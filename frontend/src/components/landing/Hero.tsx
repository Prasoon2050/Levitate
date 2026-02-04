"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const prompts = [
  {
    text: "Build a marketplace for organic coffee beans with subscriptions.",
    url: "https://levitate.site/organic-coffee",
  },
  {
    text: "Create a fintech dashboard for treasury ops with real-time alerts.",
    url: "https://levitate.site/treasury-ops",
  },
  {
    text: "Launch a hiring portal for enterprise engineering teams.",
    url: "https://levitate.site/engineering-hire",
  },
];

function TypingDemo() {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<"typing" | "generating">("typing");
  const [promptIndex, setPromptIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (phase === "typing") {
      let index = 0;
      interval = setInterval(() => {
        index += 1;
        const currentPrompt = prompts[promptIndex]?.text ?? "";
        setDisplayText(currentPrompt.slice(0, index));
        if (index >= currentPrompt.length) {
          clearInterval(interval);
          timeout = setTimeout(() => setPhase("generating"), 600);
        }
      }, 45);
    }

    if (phase === "generating") {
      timeout = setTimeout(() => {
        setDisplayText("");
        setPhase("typing");
        setPromptIndex((prev) => (prev + 1) % prompts.length);
      }, 2400);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [phase]);

  return (
    <div className="min-h-[120px] space-y-4">
      <div className="flex items-start gap-3">
        <div className="mt-1 h-2.5 w-2.5 rounded-full bg-blue-400" />
        <p className="font-mono text-sm text-white sm:text-base">
          <span className="text-zinc-500">$</span> {displayText}
          <span className="ml-1 inline-block h-4 w-2 translate-y-[2px] bg-white animate-blink" />
        </p>
      </div>
      {phase === "generating" && (
        <div className="flex items-center gap-2 text-sm text-zinc-400">
          <Sparkles className="h-4 w-4 text-blue-300" />
          <span>Generating</span>
          <span className="flex gap-1">
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:120ms]" />
            <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-blue-400 [animation-delay:240ms]" />
          </span>
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-24">
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-1 text-xs uppercase tracking-[0.3em] text-zinc-300">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            Autonomous Web Developer
          </p>
          <h1 className="text-balance text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">
            Describe it. See it. Deploy it. Instantly.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            The world&apos;s first autonomous AI web developer. Zero code, zero
            human intervention.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button className="group inline-flex items-center gap-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Start Building Free
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </button>
            <button className="rounded-md border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-500 hover:text-white">
              Watch a Demo
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="mt-12 w-full"
        >
          <div className="mx-auto w-full max-w-3xl rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-sm">
            <div className="flex items-center gap-2 text-xs text-zinc-400">
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              <span className="ml-2">Command Input</span>
            </div>
            <div className="mt-6 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-4">
              <TypingDemo />
            </div>
            <div className="mt-6 border-t border-zinc-800 pt-4 text-xs text-zinc-400">
              Suggested prompts
              <div className="mt-3 flex flex-wrap gap-2">
                {prompts.map((prompt) => (
                  <span
                    key={prompt.url}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-[11px] text-zinc-300"
                  >
                    {prompt.text}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6 grid gap-4 text-xs text-zinc-400 sm:grid-cols-3">
              <div>
                <p className="text-white">Deploy Target</p>
                <p>Vercel + Supabase</p>
              </div>
              <div>
                <p className="text-white">Build Time</p>
                <p>28 seconds</p>
              </div>
              <div>
                <p className="text-white">Status</p>
                <p className="text-white">Live + Running</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
