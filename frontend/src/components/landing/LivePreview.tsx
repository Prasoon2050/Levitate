"use client";

import { motion } from "framer-motion";
import { Code2, Monitor } from "lucide-react";

const codeLines = [
  "export default function Landing() {",
  "  return (",
  "    <main className=\"bg-zinc-50 text-zinc-900\">",
  "      <Hero />",
  "      <Features />",
  "    </main>",
  "  );",
  "}",
];

export default function LivePreview() {
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
            Live Code Preview
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Watch code transform into a live site in real time.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Code2 className="h-4 w-4 text-blue-300" />
              <span>generated.tsx</span>
            </div>
            <pre className="mt-4 space-y-2 text-xs text-zinc-300">
              {codeLines.map((line) => (
                <div key={line} className="font-mono">
                  {line}
                </div>
              ))}
            </pre>
            <div className="mt-6 h-2 w-24 rounded-full bg-blue-400" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <Monitor className="h-4 w-4 text-blue-300" />
              <span>Live Preview</span>
            </div>
            <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-900 p-5">
              <div className="space-y-4">
                <div className="h-6 w-2/3 rounded-full bg-white" />
                <div className="h-3 w-full rounded-full bg-zinc-700" />
                <div className="h-3 w-5/6 rounded-full bg-zinc-700" />
                <div className="grid gap-3 sm:grid-cols-3">
                  <div className="h-24 rounded-xl bg-zinc-950" />
                  <div className="h-24 rounded-xl bg-zinc-950" />
                  <div className="h-24 rounded-xl bg-zinc-950" />
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-between text-xs text-zinc-400">
              <span>Build status: Live</span>
              <span className="text-white">99 Lighthouse</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
