"use client";

import { FadeUp } from "@/components/ui/Motion";
import { useState } from "react";

export function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("ok");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="lead" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50 to-white" />
      <div className="relative mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <FadeUp>
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">
                Get Details + Site Visit
              </h2>
              <p className="mt-2 text-slate-600">
                Submit your requirements. Your lead goes directly into your lead database (and can
                be forwarded to WhatsApp/Email/CRM later).
              </p>

              <div className="mt-6 glass rounded-3xl p-5">
                <div className="text-sm text-slate-600">What you get</div>
                <ul className="mt-3 space-y-2 text-slate-800">
                  <li>• Floor plan + pricing</li>
                  <li>• Call back within 30 minutes</li>
                  <li>• Site visit scheduling</li>
                </ul>
              </div>
            </div>
          </FadeUp>

          <FadeUp delay={0.08}>
            <form onSubmit={onSubmit} className="glass rounded-3xl p-6">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm text-slate-700">Name</label>
                  <input
                    name="name"
                    required
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-slate-900 outline-none soft-border focus:ring-2 focus:ring-emerald-200"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700">Phone (WhatsApp)</label>
                  <input
                    name="phone"
                    required
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-slate-900 outline-none soft-border focus:ring-2 focus:ring-sky-200"
                    placeholder="+91..."
                  />
                </div>

                <div>
                  <label className="text-sm text-slate-700">Budget</label>
                  <select
                    name="budget"
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-slate-900 outline-none soft-border"
                    defaultValue="₹ 50L - ₹ 1Cr"
                  >
                    <option>₹ 50L - ₹ 1Cr</option>
                    <option>₹ 1Cr - ₹ 2Cr</option>
                    <option>₹ 2Cr+</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-slate-700">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="mt-1 w-full rounded-2xl bg-white/70 px-4 py-3 text-slate-900 outline-none soft-border"
                    placeholder="Looking for 3BHK, premium location..."
                  />
                </div>

                <button
                  disabled={status === "loading"}
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-lg transition hover:opacity-90 disabled:opacity-60"
                >
                  {status === "loading" ? "Submitting..." : "Request Callback"}
                </button>

                {status === "ok" && (
                  <div className="text-sm text-emerald-700">✅ Submitted. We’ll contact you soon.</div>
                )}
                {status === "error" && (
                  <div className="text-sm text-rose-700">❌ Something went wrong. Try again.</div>
                )}
              </div>
            </form>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
