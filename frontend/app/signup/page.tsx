import Link from 'next/link';
import Image from 'next/image';

export default function SignUpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-zinc-50 dark:from-background-dark dark:via-background-dark dark:to-black text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-gradient-to-br from-emerald-400/30 to-transparent blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-tr from-zinc-300/40 to-transparent blur-3xl dark:from-zinc-700/40"></div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-14">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Levitate.png" alt="Levitate Logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-bold tracking-tight">Levitate</span>
          </Link>
          <Link href="/signin" className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
            Sign In
          </Link>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Get started</p>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold leading-tight">
              Create your Levitate workspace and launch faster.
            </h1>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
              Spin up production-ready web apps, manage deployments, and collaborate with your team in minutes.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-[20px]">bolt</span>
                <span>Instant infrastructure with guardrails.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-[20px]">shield</span>
                <span>Enterprise-grade security by default.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-[20px]">rocket_launch</span>
                <span>Ship new products with confidence.</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-zinc-200 dark:border-border-dark bg-white/80 dark:bg-surface-dark/80 shadow-xl backdrop-blur p-8">
            <h2 className="text-2xl font-bold">Sign up for free</h2>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">No credit card required. Get a private workspace in seconds.</p>

            <form className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium">
                Full name
                <input
                  type="text"
                  placeholder="Jordan Lee"
                  className="h-11 rounded-lg border border-zinc-200 dark:border-border-dark bg-white dark:bg-black/40 px-3 text-sm outline-none focus:border-zinc-500 dark:focus:border-zinc-400"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Work email
                <input
                  type="email"
                  placeholder="jordan@company.com"
                  className="h-11 rounded-lg border border-zinc-200 dark:border-border-dark bg-white dark:bg-black/40 px-3 text-sm outline-none focus:border-zinc-500 dark:focus:border-zinc-400"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Password
                <input
                  type="password"
                  placeholder="Create a strong password"
                  className="h-11 rounded-lg border border-zinc-200 dark:border-border-dark bg-white dark:bg-black/40 px-3 text-sm outline-none focus:border-zinc-500 dark:focus:border-zinc-400"
                />
              </label>

              <button
                type="submit"
                className="mt-2 h-11 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Create account
              </button>
            </form>

            <div className="mt-6 border-t border-zinc-200 dark:border-border-dark pt-5 text-sm text-zinc-600 dark:text-zinc-400">
              Already have an account?
              <Link href="/signin" className="ml-2 font-semibold text-zinc-900 dark:text-white hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
