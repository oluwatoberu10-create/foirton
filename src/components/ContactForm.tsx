"use client";

import { useSearchParams } from "next/navigation";
import { Suspense, useCallback, useEffect, useState } from "react";
import { serviceOptions } from "@/data/site";

type Status = "idle" | "sending" | "sent" | "error";

const fieldClass =
  "peer block w-full rounded-sm border border-charcoal/15 bg-white px-4 py-3.5 text-base text-ink placeholder:text-charcoal/35 transition-colors outline-none hover:border-charcoal/30 focus:border-gold focus:ring-2 focus:ring-gold/25 aria-[invalid=true]:border-red-500";

function Field({
  label,
  name,
  required = false,
  children,
  className = "",
}: {
  label: string;
  name: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={`f-${name}`} className="mb-2 block text-sm font-semibold text-charcoal">
        {label}
        {required ? (
          <span className="ml-0.5 text-gold-dark" aria-hidden="true">
            *
          </span>
        ) : (
          <span className="ml-1.5 text-xs font-medium text-charcoal/40">(optional)</span>
        )}
      </label>
      {children}
    </div>
  );
}

/** Reads ?service= and ?equipment= set by CTA links elsewhere on the page. */
function Prefill({ onPrefill }: { onPrefill: (v: { service?: string; equipment?: string }) => void }) {
  const params = useSearchParams();
  const service = params.get("service") ?? undefined;
  const equipment = params.get("equipment") ?? undefined;
  useEffect(() => {
    if (service || equipment) onPrefill({ service, equipment });
  }, [service, equipment, onPrefill]);
  return null;
}

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [service, setService] = useState("");
  const [equipment, setEquipment] = useState("");

  const prefill = useCallback(({ service: s, equipment: eq }: { service?: string; equipment?: string }) => {
    if (s && (serviceOptions as readonly string[]).includes(s)) setService(s);
    if (eq) setEquipment(eq);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }
    setStatus("sending");
    setMessage("");
    try {
      const res = await fetch("/api/equipment-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Something went wrong. Please try again.");
      setStatus("sent");
      form.reset();
      setService("");
      setEquipment("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex min-h-[420px] flex-col items-start justify-center rounded-sm bg-white p-8 sm:p-12">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold text-ink">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.2} aria-hidden="true">
            <path d="m5 12 4.5 4.5L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        <h3 className="mt-6 text-2xl font-extrabold text-ink">Request received</h3>
        <p className="mt-3 max-w-md leading-relaxed text-charcoal/70">
          Thank you. Our team will review your equipment requirements and get back to you to discuss the next steps.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-bold text-gold-dark underline-offset-4 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-sm bg-white p-6 shadow-[0_30px_70px_-40px_rgba(11,13,16,0.45)] sm:p-10">
      <Suspense fallback={null}>
        <Prefill onPrefill={prefill} />
      </Suspense>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="fullName" required>
          <input id="f-fullName" name="fullName" type="text" autoComplete="name" required maxLength={120} className={fieldClass} placeholder="Your full name" />
        </Field>
        <Field label="Company Name" name="company" required>
          <input id="f-company" name="company" type="text" autoComplete="organization" required maxLength={160} className={fieldClass} placeholder="Your company" />
        </Field>
        <Field label="Email" name="email" required>
          <input id="f-email" name="email" type="email" autoComplete="email" required maxLength={160} className={fieldClass} placeholder="you@company.com" />
        </Field>
        <Field label="Phone Number" name="phone" required>
          <input id="f-phone" name="phone" type="tel" autoComplete="tel" required maxLength={40} className={fieldClass} placeholder="+234 …" />
        </Field>
        <Field label="Equipment Needed" name="equipment" required>
          <input
            id="f-equipment"
            name="equipment"
            type="text"
            required
            maxLength={160}
            value={equipment}
            onChange={(e) => setEquipment(e.target.value)}
            className={fieldClass}
            placeholder="e.g. Excavator, Wheel Loader"
          />
        </Field>
        <Field label="Service Required" name="service" required>
          <div className="relative">
            <select
              id="f-service"
              name="service"
              required
              value={service}
              onChange={(e) => setService(e.target.value)}
              className={`${fieldClass} appearance-none pr-10 ${service ? "" : "text-charcoal/40"}`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {serviceOptions.map((opt) => (
                <option key={opt} value={opt} className="text-ink">
                  {opt}
                </option>
              ))}
            </select>
            <svg className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-charcoal/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path d="m6 9 6 6 6-6" />
            </svg>
          </div>
        </Field>
        <Field label="Message" name="message" className="sm:col-span-2">
          <textarea
            id="f-message"
            name="message"
            rows={5}
            maxLength={4000}
            className={`${fieldClass} resize-y`}
            placeholder="Tell us about your project, timeline, location, and any specifications."
          />
        </Field>
      </div>

      {/* Honeypot for basic spam protection */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" && (
        <p role="alert" className="mt-6 rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
          {message}
        </p>
      )}

      <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-charcoal/50">
          Fields marked <span className="text-gold-dark">*</span> are required.
        </p>
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex min-h-13 items-center justify-center gap-2.5 rounded-sm bg-gold px-8 py-3.5 font-bold tracking-wide text-ink shadow-[0_10px_30px_-12px_rgba(201,161,74,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-light focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending…" : "Submit Equipment Request"}
        </button>
      </div>
    </form>
  );
}
