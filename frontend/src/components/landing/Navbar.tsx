import { ArrowUpRight } from "lucide-react";

const navItems = [
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/90">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-md bg-white text-sm font-semibold text-zinc-900">
            L
          </div>
          <span className="text-sm font-semibold tracking-tight text-white">
            Levitate
          </span>
        </div>
        <nav className="hidden items-center gap-8 text-sm text-zinc-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button className="group inline-flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-xs font-semibold uppercase tracking-tight text-white transition hover:bg-blue-500">
          Start Building Free
          <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
        </button>
      </div>
    </header>
  );
}
