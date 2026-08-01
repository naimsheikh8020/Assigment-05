import Link from "next/link";
import { ArrowRight } from "lucide-react";

const categories = [
  {
    id: "1",
    name: "Camping",
    description: "Camping equipment",
  },
  {
    id: "2",
    name: "Hiking",
    description: "Hiking equipment",
  },
  {
    id: "3",
    name: "Fitness",
    description: "Fitness equipment",
  },
  {
    id: "4",
    name: "Fishing",
    description: "Fishing equipment",
  },
  {
    id: "5",
    name: "Running",
    description: "Running equipment",
  },
  {
    id: "6",
    name: "Winter Sports",
    description: "Winter sports equipment",
  },
];

export default function CategorySection() {
  return (
    <section className="px-6 py-2">
      <div className="mx-auto max-w-7xl">
        {/* Header */}

        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-indigo-400">
              Categories
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              Explore Categories
            </h2>

            <p className="mt-3 max-w-xl text-slate-400">
              Browse sports and outdoor categories to find the perfect
              equipment for your next adventure.
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

        {/* Grid */}

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={`/gear?category=${category.name}`}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-white/10"
            >
              {/* Icon */}

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 text-3xl backdrop-blur">
                🏕️
              </div>

              <h3 className="text-2xl font-semibold text-white">
                {category.name}
              </h3>

              <p className="mt-3 text-slate-400">
                {category.description}
              </p>

              <div className="mt-8 flex items-center gap-2 font-medium text-indigo-400 transition group-hover:translate-x-2">
                Explore

                <ArrowRight size={18} />
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
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  );
}