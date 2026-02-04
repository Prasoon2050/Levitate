"use client";

import { motion } from "framer-motion";
import { Database, Rocket, Smartphone } from "lucide-react";

const features = [
  {
    title: "Instant Deployment",
    description:
      "Push to production the moment your prompt lands. Zero config, zero waiting.",
    icon: Rocket,
  },
  {
    title: "Full-Stack Generation",
    description:
      "Database schemas, auth flows, APIs, and front-end UI wired together automatically.",
    icon: Database,
  },
  {
    title: "Responsive by Default",
    description:
      "Pixel-perfect layouts that snap into place on every screen size on the first try.",
    icon: Smartphone,
  },
];

export default function FeatureGrid() {
  return (
    <section id="how-it-works" className="py-28">
      <div className="mx-auto w-full max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-blue-300">
            Under the Hood
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Launch-grade infrastructure that feels like magic.
          </h2>
        </motion.div>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900 text-white">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-6 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-400">
                  {feature.description}
                </p>
                <div className="mt-6 h-1 w-12 rounded-full bg-blue-400 opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
