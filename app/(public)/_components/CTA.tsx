import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] border border-white/10 bg-gradient-to-br from-indigo-600/20 via-slate-900 to-cyan-600/20 p-10 backdrop-blur-2xl md:p-20">
          {/* Background Glow */}

          <div className="absolute -left-32 -top-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-[120px]" />

          <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-cyan-500/20 blur-[120px]" />

          <div className="relative text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
              Ready to Start?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-black text-white md:text-6xl">
              Your Next Adventure
              <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {" "}
                Starts Here
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
              Browse premium sports gear, book instantly, and enjoy
              your outdoor experience without the cost of ownership.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/gear"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-xl shadow-indigo-500/20 transition duration-300 hover:scale-105"
              >
                Browse Gear

                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/auth/register"
                className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:bg-white/10"
              >
                Become a Provider
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}