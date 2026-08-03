import Link from "next/link";
import {
  Boxes,
  Users,
  FolderTree,
  ClipboardList,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "Manage Categories",
    description: "View, update and manage all categories.",
    href: "/admin/category",
    icon: Boxes,
    color: "from-indigo-600 to-cyan-500",
  },
  {
    title: "Manage Users",
    description: "Search users and update status.",
    href: "/admin/users",
    icon: Users,
    color: "from-emerald-600 to-green-500",
  },
  {
    title: "Rental Orders",
    description: "Monitor all rental orders.",
    href: "/admin/rentals",
    icon: ClipboardList,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Get Gear",
    description: "View, All the Gear.",
    href: "/admin/product",
    icon: FolderTree,
    color: "from-purple-600 to-pink-500",
  },
];

export default function AdminDashboard() {
  return (
    <main className="space-y-10 mt-15 max-w-7xl mx-auto">

      <div>
        <h1 className="text-4xl font-bold text-white">
          Admin Dashboard
        </h1>

        <p className="mt-2 text-slate-400">
          Manage your GearUp application from one place.
        </p>
      </div>

      {/* Dashboard Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${card.color}`}
              >
                <Icon size={28} className="text-white" />
              </div>

              <h2 className="mt-6 text-xl font-bold text-white">
                {card.title}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-400">
                {card.description}
              </p>

              <div className="mt-6 flex items-center gap-2 font-medium text-indigo-400">
                Open
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              </div>
            </Link>
          );
        })}

      </div>

      {/* Quick Overview */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <h2 className="text-2xl font-bold text-white">
          Quick Overview
        </h2>

        <div className="mt-8 grid gap-6 md:grid-cols-4">

          <div>
            <p className="text-sm text-slate-400">
              Total Users
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              120
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Total Gear
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              85
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Rentals
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              37
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">
              Categories
            </p>

            <h3 className="mt-2 text-3xl font-bold text-white">
              12
            </h3>
          </div>

        </div>

      </div>

    </main>
  );
}