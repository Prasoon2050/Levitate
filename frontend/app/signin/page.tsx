import Link from 'next/link';
import Image from 'next/image';

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-white to-zinc-50 dark:from-background-dark dark:via-background-dark dark:to-black text-zinc-900 dark:text-zinc-50 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-gradient-to-br from-zinc-300/40 to-transparent blur-3xl dark:from-zinc-700/40"></div>
      <div className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-gradient-to-tr from-emerald-400/30 to-transparent blur-3xl"></div>

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-14">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/Levitate.png" alt="Levitate Logo" width={32} height={32} className="w-8 h-8 rounded-lg" />
            <span className="text-lg font-bold tracking-tight">Levitate</span>
          </Link>
          <Link href="/signup" className="text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors">
            Create account
          </Link>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.95fr_1.05fr] items-center">
          <div className="rounded-2xl border border-zinc-200 dark:border-border-dark bg-white/80 dark:bg-surface-dark/80 shadow-xl backdrop-blur p-8">
            <h1 className="text-2xl md:text-3xl font-bold">Welcome back</h1>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">Sign in to continue building with Levitate.</p>

            <form className="mt-6 grid gap-4">
              <label className="grid gap-2 text-sm font-medium">
                Email address
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="h-11 rounded-lg border border-zinc-200 dark:border-border-dark bg-white dark:bg-black/40 px-3 text-sm outline-none focus:border-zinc-500 dark:focus:border-zinc-400"
                />
              </label>
              <label className="grid gap-2 text-sm font-medium">
                Password
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="h-11 rounded-lg border border-zinc-200 dark:border-border-dark bg-white dark:bg-black/40 px-3 text-sm outline-none focus:border-zinc-500 dark:focus:border-zinc-400"
                />
              </label>

              <div className="flex items-center justify-between text-sm text-zinc-600 dark:text-zinc-400">
                <label className="inline-flex items-center gap-2">
                  <input type="checkbox" className="size-4 rounded border-zinc-300 dark:border-zinc-600" />
                  Remember me
                </label>
                <button type="button" className="font-medium hover:text-zinc-900 dark:hover:text-white">
                  Forgot password?
                </button>
              </div>

              <button
                type="submit"
                className="mt-2 h-11 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-black text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
              >
                Sign in
              </button>
            </form>

            <div className="mt-6 border-t border-zinc-200 dark:border-border-dark pt-5 text-sm text-zinc-600 dark:text-zinc-400">
              New to Levitate?
              <Link href="/signup" className="ml-2 font-semibold text-zinc-900 dark:text-white hover:underline">
                Create an account
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Why Levitate</p>
            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight">
              Build, deploy, and iterate faster with an autonomous stack.
            </h2>
            <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-300 max-w-xl">
              From idea to production in one flow. Track your builds, monitor deployments, and share progress with your team.
            </p>
            <div className="mt-8 grid gap-4 text-sm text-zinc-600 dark:text-zinc-300">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-[20px]">stacks</span>
                <span>Unified workspace for engineering teams.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-[20px]">query_stats</span>
                <span>Real-time performance and reliability signals.</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-500 text-[20px]">auto_awesome</span>
                <span>Automation that scales with your roadmap.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
