import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";

const featuredGear = [
  {
    id: "1",
    name: "Mountain Bike",
    category: "Cycling",
    price: 20,
    image:
      "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=800",
    rating: 4.9,
  },
  {
    id: "2",
    name: "Camping Tent",
    category: "Camping",
    price: 15,
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
    rating: 4.8,
  },
  {
    id: "3",
    name: "Hiking Backpack",
    category: "Hiking",
    price: 10,
    image:
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800",
    rating: 4.7,
  },
  {
    id: "4",
    name: "Kayak",
    category: "Water Sports",
    price: 35,
    image:
      "https://images.unsplash.com/photo-1511497584788-876760111969?w=800",
    rating: 5,
  },
];

export default function FeaturedGear() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
              Featured Gear
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              Popular Equipment
            </h2>

            <p className="mt-4 max-w-2xl text-slate-400">
              Browse some of the most rented sports and outdoor
              equipment on GearUp.
            </p>
          </div>

          <Link
            href="/gear"
            className="hidden items-center gap-2 text-indigo-400 transition hover:text-indigo-300 md:flex"
          >
            View All

            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Cards */}

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {featuredGear.map((gear) => (
            <Link
              key={gear.id}
              href={`/gear/${gear.id}`}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/40"
            >
              {/* Image */}

              <div className="relative overflow-hidden">
                <img
                  src={gear.image}
                  alt={gear.name}
                  className="h-60 w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <span className="absolute left-4 top-4 rounded-full bg-indigo-600 px-3 py-1 text-xs font-semibold text-white">
                  {gear.category}
                </span>
              </div>

              {/* Body */}

              <div className="p-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">
                    {gear.name}
                  </h3>

                  <div className="flex items-center gap-1 text-yellow-400">
                    <Star
                      size={16}
                      fill="currentColor"
                    />

                    <span className="text-sm text-white">
                      {gear.rating}
                    </span>
                  </div>
                </div>

                <p className="mt-3 text-slate-400">
                  Premium quality rental equipment.
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-500">
                      Starting from
                    </p>

                    <h4 className="text-2xl font-bold text-white">
                      ${gear.price}
                      <span className="text-base font-medium text-slate-400">
                        /day
                      </span>
                    </h4>
                  </div>

                  <button className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:scale-105">
                    Rent Now
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile Button */}

        <div className="mt-10 md:hidden">
          <Link
            href="/gear"
            className="flex justify-center rounded-xl border border-white/10 bg-white/5 py-3 text-white backdrop-blur transition hover:bg-white/10"
          >
            View All Gear
          </Link>
        </div>
      </div>
    </section>
  );
}