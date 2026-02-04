"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";

const perks = [
  "Unlimited prompt iterations",
  "Full-stack hosting included",
  "Auth + database presets",
  "Launch-ready SEO",
];

export default function Pricing() {
  const [activeIndex, setActiveIndex] = useState(1);

  const cardBase =
    "rounded-2xl border bg-zinc-950 p-6 shadow-sm transition";
  const cardActive =
    "border-blue-500/60 bg-gradient-to-br from-zinc-900 to-zinc-950 -translate-y-1 shadow-md";
  const cardInactive =
    "border-zinc-800 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-md";

  return (
    <section id="pricing" className="py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
            Pricing
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Build without limits, pay when you scale.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setActiveIndex(0)}
            onMouseLeave={() => setActiveIndex(1)}
            className={`${cardBase} ${
              activeIndex === 0 ? cardActive : cardInactive
            }`}
          >
            <p className="text-sm text-zinc-400">Starter</p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              $0
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Launch your first sites.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-300">
              {perks.map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-300" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full rounded-md border border-zinc-700 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:text-white">
              Get Started
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => setActiveIndex(1)}
            onMouseLeave={() => setActiveIndex(1)}
            className={`${cardBase} ${
              activeIndex === 1 ? cardActive : cardInactive
            }`}
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-blue-300">Scale</span>
              <span className="rounded-full border border-blue-500/40 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-blue-200">
                Most Popular
              </span>
            </div>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              $149
            </h3>
            <p className="mt-2 text-sm text-zinc-300">
              For teams shipping weekly.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-200">
              {perks.concat("Dedicated AI architect").map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-300" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full rounded-md bg-blue-600 py-2 text-sm font-semibold text-white hover:bg-blue-500">
              Launch Scale
            </button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setActiveIndex(2)}
            onMouseLeave={() => setActiveIndex(1)}
            className={`${cardBase} ${
              activeIndex === 2 ? cardActive : cardInactive
            }`}
          >
            <p className="text-sm text-zinc-400">
              Enterprise
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-white">
              Custom
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              Governance + dedicated SLAs.
            </p>
            <div className="mt-6 space-y-3 text-sm text-zinc-300">
              {[
                "Private deploy targets",
                "Custom compliance",
                "Security reviews",
                "AI ops support",
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-blue-300" />
                  <span>{perk}</span>
                </div>
              ))}
            </div>
            <button className="mt-8 w-full rounded-md border border-zinc-700 py-2 text-sm font-semibold text-zinc-200 hover:border-zinc-500 hover:text-white">
              Talk to Sales
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
