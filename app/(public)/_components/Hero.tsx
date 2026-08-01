import Link from "next/link";
import { ArrowRight, ArrowUpRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-6 py-24 lg:py-32">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-indigo-500/20 blur-[120px]" />

        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[140px]" />

        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/10 blur-[180px]" />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
        {/* LEFT */}

        <div>
          <span className="inline-flex rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300 backdrop-blur">
            🚀 Trusted Sports Gear Rental Platform
          </span>

          <h1 className="mt-8 text-5xl font-black leading-tight text-white md:text-7xl">
            Rent Premium
            <span className="bg-gradient-to-r from-indigo-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {" "}
              Sports Gear
            </span>
            <br />
            Anytime.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">
            Discover high-quality sports and outdoor equipment from
            trusted providers. Save money, travel lighter, and enjoy
            your next adventure without buying expensive gear.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/gear"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-7 py-4 font-semibold text-white shadow-xl shadow-indigo-500/20 transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40"
            >
              Browse Gear

              <ArrowRight
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            
          </div>
        </div>

        {/* RIGHT */}

        <div className="relative">
          {/* Glow */}

          <div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 blur-3xl" />

          {/* Glass Card */}
          <div className="relative mx-auto w-full max-w-md">
  {/* Glow */}
  <div className="absolute inset-0 rounded-[32px] bg-gradient-to-r from-indigo-500/20 via-cyan-500/20 to-purple-500/20 blur-3xl" />

  {/* Glass Card */}
  <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-3xl">
    {/* Glass Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5" />

    <div className="relative">
      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-400">
          ● Available
        </span>

        <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-3 py-1">
          <Star
            size={14}
            fill="currentColor"
            className="text-yellow-400"
          />
          <span className="text-sm text-white">4.9</span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-10">
        <p className="text-sm uppercase tracking-[0.25em] text-indigo-400">
          FEATURED GEAR
        </p>

        <h2 className="mt-3 text-3xl font-bold text-white">
          Mountain Bike
        </h2>

        <p className="mt-3 leading-7 text-slate-400">
          Lightweight premium carbon frame with hydraulic
          brakes and front suspension.
        </p>
      </div>

      {/* Footer */}
      <div className="mt-10 flex items-end justify-between">
        <div>
          <p className="text-sm text-slate-500">
            Starting from
          </p>

          <h3 className="mt-1 text-4xl font-black text-white">
            $20
            <span className="text-lg font-medium text-slate-400">
              /day
            </span>
          </h3>
        </div>

        <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/30">
          Rent

          <ArrowUpRight size={18} />
        </button>
      </div>
    </div>
  </div>
</div>

          

          {/* Floating Card */}

          
        </div>
      </div>
    </section>
  );
}