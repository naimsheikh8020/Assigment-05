"use client";

import Image from "next/image";
import Link from "next/link";

const orders = [
  {
    id: "1",
    status: "PENDING",
    startDate: "15 Aug 2026",
    endDate: "18 Aug 2026",
    total: 1230,
    quantity: 2,
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
    name: "Nike Running Shoe",
    category: "Running",
  },
  {
    id: "2",
    status: "PAID",
    startDate: "15 Aug 2026",
    endDate: "18 Aug 2026",
    total: 615,
    quantity: 1,
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
    name: "Adidas Running Shoe",
    category: "Running",
  },
  {
    id: "3",
    status: "COMPLETED",
    startDate: "15 Aug 2026",
    endDate: "18 Aug 2026",
    total: 1845,
    quantity: 3,
    image:
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
    name: "Camping Gear",
    category: "Camping",
  },
];

function StatusBadge({
  status,
}: {
  status: string;
}) {
  const colors: Record<string, string> = {
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
      className={`rounded-full border px-3 py-1 text-xs font-semibold ${colors[status]}`}
    >
      {status}
    </span>
  );
}

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-10 text-white">
      <div className="mx-auto max-w-6xl px-4">

        {/* Header */}

        <div className="mb-10">
          <h1 className="text-4xl font-bold">
            My Orders
          </h1>

          <p className="mt-2 text-slate-400">
            Track all your rental orders.
          </p>
        </div>

        <div className="space-y-6">

          {orders.map((order) => (
            <div
              key={order.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
            >
              <div className="flex flex-col gap-6 md:flex-row">

                {/* Image */}

                <div className="relative h-48 w-full overflow-hidden rounded-2xl md:h-40 md:w-52 md:flex-shrink-0">
                  <Image
                    src={order.image}
                    alt={order.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Content */}

                <div className="flex flex-1 flex-col justify-between">

                  <div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                      <div>
                        <h2 className="text-2xl font-bold">
                          {order.name}
                        </h2>

                        <p className="mt-1 text-slate-400">
                          {order.category}
                        </p>
                      </div>

                      <StatusBadge status={order.status} />

                    </div>

                    <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

                      <div>
                        <p className="text-sm text-slate-500">
                          Rental Date
                        </p>

                        <p className="mt-1">
                          {order.startDate}
                        </p>

                        <p>{order.endDate}</p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          Quantity
                        </p>

                        <p className="mt-1">
                          {order.quantity}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          Order ID
                        </p>

                        <p className="mt-1 truncate">
                          #{order.id}
                        </p>
                      </div>

                      <div>
                        <p className="text-sm text-slate-500">
                          Total Amount
                        </p>

                        <p className="mt-1 text-2xl font-bold text-indigo-400">
                          ${order.total}
                        </p>
                      </div>

                    </div>

                  </div>

                  {/* ---------- PART 2 STARTS HERE ---------- */}
                  <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-end">

                    <Link
                      href={`/order/${order.id}`}
                      className="rounded-xl border border-white/10 px-5 py-3 text-center font-medium text-white transition hover:bg-white/10"
                    >
                      View Details
                    </Link>

                    {order.status === "PENDING" && (
                      <Link
                        href={`/dashboard/customer/order/${order.id}/pay`}
                        className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 text-center font-semibold text-white transition hover:scale-105"
                      >
                        Pay Now
                      </Link>
                    )}

                    {order.status === "COMPLETED" && (
                      <Link
                        href={`/dashboard/customer/order/${order.id}/review`}
                        className="rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 px-5 py-3 text-center font-semibold text-white transition hover:scale-105"
                      >
                        Leave Review
                      </Link>
                    )}

                    {order.status === "PAID" && (
                      <button
                        className="cursor-default rounded-xl bg-purple-500/20 px-5 py-3 font-semibold text-purple-400"
                        disabled
                      >
                        Paid
                      </button>
                    )}

                    {order.status === "CONFIRMED" && (
                      <button
                        className="cursor-default rounded-xl bg-blue-500/20 px-5 py-3 font-semibold text-blue-400"
                        disabled
                      >
                        Confirmed
                      </button>
                    )}

                    {order.status === "CANCELLED" && (
                      <button
                        className="cursor-default rounded-xl bg-red-500/20 px-5 py-3 font-semibold text-red-400"
                        disabled
                      >
                        Cancelled
                      </button>
                    )}

                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}