import { serviceOptions } from "@/data/site";

/**
 * Receives equipment requests from the contact form.
 *
 * Submissions are forwarded as JSON to CONTACT_WEBHOOK_URL (e.g. a Formspree,
 * Make, Zapier, or n8n webhook that emails the team). Until that variable is
 * set, the endpoint refuses submissions so nobody's request is silently lost.
 */

const REQUIRED = ["fullName", "company", "email", "phone", "equipment", "service"] as const;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success.
  if (typeof body.website === "string" && body.website.trim() !== "") {
    return Response.json({ ok: true });
  }

  const data: Record<string, string> = {};
  for (const key of [...REQUIRED, "message"]) {
    const value = body[key];
    data[key] = typeof value === "string" ? value.trim().slice(0, 4000) : "";
  }

  const missing = REQUIRED.filter((k) => !data[k]);
  if (missing.length) {
    return Response.json({ error: "Please complete all required fields." }, { status: 422 });
  }
  if (!EMAIL_RE.test(data.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 422 });
  }
  if (!(serviceOptions as readonly string[]).includes(data.service)) {
    return Response.json({ error: "Please select a service." }, { status: 422 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[equipment-request] CONTACT_WEBHOOK_URL is not set; submission was not delivered.");
    return Response.json(
      { error: "Online requests are not available yet. Please contact our team directly using the details on this page." },
      { status: 503 },
    );
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...data, submittedAt: new Date().toISOString(), source: "foirton-website" }),
    });
    if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
  } catch (err) {
    console.error("[equipment-request] delivery failed", err);
    return Response.json({ error: "We couldn't send your request. Please try again shortly." }, { status: 502 });
  }

  return Response.json({ ok: true });
}
