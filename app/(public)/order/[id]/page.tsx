"use client";

import Image from "next/image";
import Link from "next/link";

const order = {
  id: "22c05fd9-7ed5-4cc0-8e39-0d47c7ae883a",
  startDate: "15 Aug 2026",
  endDate: "18 Aug 2026",
  subtotal: 1230,
  total: 1230,
  status: "COMPLETED",

  items: [
    {
      id: "1",
      quantity: 2,
      pricePerDay: 205,

      gearItem: {
        name: "Nike Running Shoe",
        brand: "Programming Hero",
        category: "Running",
        condition: "NEW",
        description:
          "Official Nike Shoes",

        image:
          "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
      },
    },
  ],
};

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const styles: Record<string, string> = {
    PENDING:
      "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",

    CONFIRMED:
      "bg-blue-500/20 text-blue-400 border-blue-500/30",

    PAID:
      "bg-purple-500/20 text-purple-400 border-purple-500/30",

    COMPLETED:
      "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",

    CANCELLED:
      "bg-red-500/20 text-red-400 border-red-500/30",
  };

  return (
    <span
      className={`rounded-full border px-4 py-2 text-sm font-semibold ${styles[status]}`}
    >
      {status}
    </span>
  );
}

export default function OrderDetailsPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-10 text-white">
      <div className="mx-auto max-w-7xl px-4">

        <Link
          href="/order"
          className="text-indigo-400 transition hover:text-indigo-300"
        >
          ← Back to Orders
        </Link>

        <div className="mt-8 flex items-center justify-between">

          <div>

            <h1 className="text-4xl font-bold">
              Order Details
            </h1>

            <p className="mt-2 text-slate-400">
              View your rental information.
            </p>

          </div>

          <StatusBadge status={order.status} />

        </div>

        {/* Products */}

        <div className="mt-10 space-y-6">

          {order.items.map((item) => (

            <div
              key={item.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >

              <div className="grid gap-8 lg:grid-cols-[320px_1fr]">

                {/* Image */}

                <div className="relative aspect-square overflow-hidden rounded-2xl">

                  <Image
                    src={item.gearItem.image}
                    alt={item.gearItem.name}
                    fill
                    className="object-cover"
                  />

                </div>

                {/* Product */}

                <div>

                  <h2 className="text-3xl font-bold">
                    {item.gearItem.name}
                  </h2>

                  <p className="mt-2 text-slate-400">
                    {item.gearItem.category}
                  </p>

                  <p className="mt-6 text-slate-300 leading-7">
                    {item.gearItem.description}
                  </p>

                  <div className="mt-8 grid gap-4 sm:grid-cols-2">

                    <div className="rounded-2xl bg-white/5 p-5">
                      <p className="text-sm text-slate-500">
                        Brand
                      </p>

                      <h3 className="mt-2 text-lg font-semibold">
                        {item.gearItem.brand}
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-5">
                      <p className="text-sm text-slate-500">
                        Condition
                      </p>

                      <h3 className="mt-2 text-lg font-semibold">
                        {item.gearItem.condition}
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-5">
                      <p className="text-sm text-slate-500">
                        Quantity
                      </p>

                      <h3 className="mt-2 text-lg font-semibold">
                        {item.quantity}
                      </h3>
                    </div>

                    <div className="rounded-2xl bg-white/5 p-5">
                      <p className="text-sm text-slate-500">
                        Price / Day
                      </p>

                      <h3 className="mt-2 text-lg font-semibold">
                        ${item.pricePerDay}
                      </h3>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          ))}

        </div>

        {/* Rental Information */}

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold">
            Rental Information
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <div>
              <p className="text-sm text-slate-500">
                Start Date
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                {order.startDate}
              </h3>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                End Date
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                {order.endDate}
              </h3>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Status
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                {order.status}
              </h3>
            </div>

            <div>
              <p className="text-sm text-slate-500">
                Rental Days
              </p>

              <h3 className="mt-2 text-lg font-semibold">
                3 Days
              </h3>
            </div>

          </div>

        </div>

        {/* ---------- PART 2 STARTS HERE ---------- */}
        {/* Payment Summary */}

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-bold">
            Payment Summary
          </h2>

          <div className="mt-8 space-y-5">

            <div className="flex items-center justify-between">
              <span className="text-slate-400">
                Subtotal
              </span>

              <span className="font-medium">
                ${order.subtotal}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-slate-400">
                Delivery Fee
              </span>

              <span className="font-medium">
                $0
              </span>
            </div>

            <div className="border-t border-white/10 pt-5">

              <div className="flex items-center justify-between">

                <span className="text-xl font-semibold">
                  Total
                </span>

                <span className="text-3xl font-bold text-indigo-400">
                  ${order.total}
                </span>

              </div>

            </div>

          </div>
        </div>

        {/* Rental Timeline */}

        <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-bold">
            Rental Timeline
          </h2>

          <div className="mt-8 space-y-5">

            <div className="flex items-center gap-4">
              <div className="h-4 w-4 rounded-full bg-emerald-500" />

              <p>Rental Order Created</p>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`h-4 w-4 rounded-full ${order.status === "PENDING"
                    ? "bg-slate-600"
                    : "bg-emerald-500"
                  }`}
              />

              <p>Payment Completed</p>
            </div>

            <div className="flex items-center gap-4">
              <div
                className={`h-4 w-4 rounded-full ${order.status === "COMPLETED"
                    ? "bg-emerald-500"
                    : "bg-slate-600"
                  }`}
              />

              <p>Gear Returned</p>
            </div>

          </div>

        </div>

        {/* Actions */}

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">

          <Link
            href="/order"
            className="flex-1 rounded-2xl border border-white/10 px-6 py-4 text-center font-medium transition hover:bg-white/10"
          >
            Back to Orders
          </Link>

          {order.status === "PENDING" && (
            <button className="flex-1 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-4 font-semibold transition hover:scale-[1.02]">
              Pay Now
            </button>
          )}

          {order.status === "COMPLETED" && (
            <Link
              href={`/dashboard/customer/orders/${order.id}/review`}
              className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 px-6 py-4 text-center font-semibold transition hover:scale-[1.02]"
            >
              Leave Review
            </Link>
          )}

          {order.status === "PAID" && (
            <button
              disabled
              className="flex-1 cursor-default rounded-2xl bg-purple-500/20 px-6 py-4 font-semibold text-purple-400"
            >
              Payment Completed
            </button>
          )}

          {order.status === "CONFIRMED" && (
            <button
              disabled
              className="flex-1 cursor-default rounded-2xl bg-blue-500/20 px-6 py-4 font-semibold text-blue-400"
            >
              Waiting for Pickup
            </button>
          )}

          {order.status === "CANCELLED" && (
            <button
              disabled
              className="flex-1 cursor-default rounded-2xl bg-red-500/20 px-6 py-4 font-semibold text-red-400"
            >
              Order Cancelled
            </button>
          )}

        </div>

      </div>
    </main>
  );
}