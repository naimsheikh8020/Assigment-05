import { Search, CalendarDays, CreditCard, Backpack } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Browse Gear",
    description:
      "Explore thousands of sports and outdoor equipment from trusted providers.",
  },
  {
    icon: CalendarDays,
    title: "Choose Dates",
    description:
      "Select your rental period and check real-time availability.",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    description:
      "Complete your booking safely with Stripe or SSLCommerz.",
  },
  {
    icon: Backpack,
    title: "Enjoy Adventure",
    description:
      "Pick up your gear and start your next outdoor adventure.",
  },
];

export default function HowItWorks() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            How It Works
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Rent Gear in 4 Easy Steps
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Renting sports equipment has never been easier.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="group relative rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-indigo-500/40"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white">
                  <Icon size={28} />
                </div>

                <span className="text-sm font-bold text-indigo-400">
                  Step {index + 1}
                </span>

                <h3 className="mt-2 text-2xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}