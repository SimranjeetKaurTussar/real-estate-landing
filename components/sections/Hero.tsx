"use client";

import { FadeUp } from "@/components/ui/Motion";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* Soft cinematic gradient + light beams */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-sky-50 to-white" />
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-emerald-300/25 blur-3xl" />
      <div className="absolute top-10 right-0 h-96 w-96 rounded-full bg-sky-300/25 blur-3xl" />
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)] bg-[linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[size:56px_56px]" />

      <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-14 md:pt-28">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <FadeUp>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1 text-sm text-slate-700 soft-border">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
                Premium Listings • Faster Lead Capture
              </div>
            </FadeUp>

            <FadeUp delay={0.08}>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl">
                Luxury Properties, Presented Like a Brand Film.
              </h1>
            </FadeUp>

            <FadeUp delay={0.14}>
              <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
                A single-page real estate landing that showcases listings beautifully and captures
                leads into your dashboard—clean, fast, and premium.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#listings"
                  className="rounded-2xl bg-slate-900 px-5 py-3 text-white shadow-lg transition hover:opacity-90"
                >
                  View Listings
                </a>
                <a
                  href="#lead"
                  className="rounded-2xl glass px-5 py-3 text-slate-900 transition hover:shadow-xl"
                >
                  Get a Callback
                </a>
              </div>
            </FadeUp>

            <FadeUp delay={0.26}>
              <div className="mt-8 grid grid-cols-3 gap-3 text-sm text-slate-700">
                <div className="glass rounded-2xl p-4">
                  <div className="text-slate-900 font-semibold">+38%</div>
                  <div className="text-slate-600">More inquiries</div>
                </div>
                <div className="glass rounded-2xl p-4">
                  <div className="text-slate-900 font-semibold">2s</div>
                  <div className="text-slate-600">Avg load</div>
                </div>
                <div className="glass rounded-2xl p-4">
                  <div className="text-slate-900 font-semibold">CRM-ready</div>
                  <div className="text-slate-600">Lead pipeline</div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Parallax “cinematic” visual */}
          <motion.div style={{ y }} className="relative">
            <div className="glass glow rounded-3xl p-3">
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
                  alt="Luxury interior"
                  className="h-[360px] w-full object-cover md:h-[430px]"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-emerald-200/25" />
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 glass rounded-3xl p-4">
              <div className="text-sm text-slate-600">Starting from</div>
              <div className="text-xl font-semibold text-slate-900">₹ 98 Lakh</div>
            </div>

            <div className="absolute -top-6 -right-4 glass rounded-3xl p-4">
              <div className="text-sm text-slate-600">Hot area</div>
              <div className="text-lg font-semibold text-slate-900">Chandigarh</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
