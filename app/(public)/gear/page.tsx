import { Search } from "lucide-react";
import Link from "next/link";

const gears = Array.from({ length: 8 });

export default function GearPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Header */}

        <div className="mb-10">
          <h1 className="text-4xl font-bold">Browse Gear</h1>

          <p className="mt-2 text-slate-400">
            Find the perfect equipment for your next adventure.
          </p>

          {/* Search */}

          <div className="relative mt-8">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              size={20}
            />

            <input
              type="text"
              placeholder="Search gear..."
              className="w-full rounded-2xl border border-white/10 bg-white/5 py-4 pl-12 pr-5 outline-none backdrop-blur transition focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Layout */}

        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">

          {/* Sidebar */}

          <aside className="h-fit rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

            {/* Category */}

            <div>
              <h2 className="mb-4 text-xl font-semibold">
                Categories
              </h2>

              <div className="space-y-3">

                {[
                  "Camping",
                  "Hiking",
                  "Fishing",
                  "Fitness",
                  "Running",
                ].map((item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 text-slate-300"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-indigo-500"
                    />

                    {item}
                  </label>
                ))}

              </div>
            </div>

            {/* Divider */}

            <div className="my-8 h-px bg-white/10" />

            {/* Sort */}

            <div>
              <h2 className="mb-4 text-xl font-semibold">
                Price
              </h2>

              <div className="space-y-3">

                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="price"
                    className="accent-indigo-500"
                  />

                  Low → High
                </label>

                <label className="flex cursor-pointer items-center gap-3">
                  <input
                    type="radio"
                    name="price"
                    className="accent-indigo-500"
                  />

                  High → Low
                </label>

              </div>
            </div>
          </aside>

          {/* Cards */}

          <section>

            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">
                Available Gear
              </h2>

              <span className="text-slate-400">
                8 Items
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

              {gears.map((_, index) => (
                <Link
                  key={index}
                  href={`/gear/${index + 1}`}
                  className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40"
                >
                  <div className="h-52 bg-gradient-to-br from-slate-700 to-slate-900" />

                  <div className="space-y-4 p-5">

                    <div className="flex items-center justify-between">

                      <h3 className="text-xl font-semibold">
                        Mountain Bike
                      </h3>

                      <span className="rounded-full bg-emerald-500/20 px-2 py-1 text-xs text-emerald-400">
                        Available
                      </span>

                    </div>

                    <p className="text-sm text-slate-400">
                      Premium outdoor equipment for your next trip.
                    </p>

                    <div className="flex items-center justify-between">

                      <div>

                        <p className="text-xs text-slate-500">
                          Price
                        </p>

                        <h4 className="text-2xl font-bold">
                          $20
                          <span className="text-sm text-slate-400">
                            /day
                          </span>
                        </h4>

                      </div>

                      <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-4 py-2 font-semibold transition hover:scale-105">
                        Rent
                      </button>

                    </div>

                  </div>
                </Link>
              ))}

            </div>

          </section>

        </div>

      </div>
    </main>
  );
}