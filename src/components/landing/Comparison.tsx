"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const oldWay = [
  "Agency onboarding calls",
  "4 weeks of back-and-forth",
  "$5k+ upfront costs",
  "Hand-offs across multiple tools",
];

const newWay = [
  "Single prompt kickoff",
  "30 seconds to deploy",
  "$0 to start",
  "Unified stack, instant scale",
];

export default function Comparison() {
  return (
    <section className="py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
            No Humans Needed
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Replace agencies with autonomous velocity.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              The Old Way
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Agency
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              $5k+ • 4 weeks
            </p>
            <div className="mt-6 space-y-3">
              {oldWay.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <X className="h-4 w-4 text-zinc-400" />
                  <span className="text-zinc-300">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-sm"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
              Our AI
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Levitate
            </h3>
            <p className="mt-2 text-sm text-zinc-400">
              $0 start • 30 seconds
            </p>
            <div className="mt-6 space-y-3">
              {newWay.map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <Check className="h-4 w-4 text-blue-300" />
                  <span className="text-zinc-200">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
