import { Github, Linkedin, Mail, Twitter } from "lucide-react";

const footerLinks = [
  { label: "Docs", href: "#" },
  { label: "Status", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Legal", href: "#" },
];

const socials = [
  { label: "Twitter", icon: Twitter, href: "#" },
  { label: "GitHub", icon: Github, href: "#" },
  { label: "LinkedIn", icon: Linkedin, href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              Stay in the build loop.
            </h3>
            <p className="mt-3 max-w-lg text-sm text-zinc-400">
              Weekly product drops, launch templates, and prompt engineering
              secrets for AI-first builders.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-md border border-zinc-800 bg-zinc-900 px-4 py-3">
                <Mail className="h-4 w-4 text-zinc-400" />
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full bg-transparent text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
              <button className="rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-500">
                Join Newsletter
              </button>
            </div>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-sm font-semibold text-white">
                Explore
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-400">
                {footerLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-white">
                Social
              </p>
              <div className="mt-4 flex flex-col gap-2 text-sm text-zinc-400">
                {socials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-2 hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-zinc-800 pt-6 text-xs text-zinc-400 sm:flex-row">
          <span>© 2026 Levitate. All rights reserved.</span>
          <span>Engineered for autonomous scale.</span>
        </div>
      </div>
    </footer>
  );
}
