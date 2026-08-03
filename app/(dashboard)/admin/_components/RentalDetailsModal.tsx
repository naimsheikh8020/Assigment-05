"use client";

import Image from "next/image";
import { CalendarDays, Package, User, X } from "lucide-react";
import { Rental } from "./RentalTable";

interface RentalDetailsModalProps {
  open: boolean;
  rental: Rental | null;
  onClose: () => void;
}

export default function RentalDetailsModal({
  open,
  rental,
  onClose,
}: RentalDetailsModalProps) {
  if (!open || !rental) return null;

  const statusColor = () => {
    switch (rental.status) {
      case "PENDING":
        return "bg-yellow-500/20 text-yellow-400";

      case "CONFIRMED":
        return "bg-blue-500/20 text-blue-400";

      case "PAID":
        return "bg-indigo-500/20 text-indigo-400";

      case "COMPLETED":
        return "bg-emerald-500/20 text-emerald-400";

      default:
        return "bg-slate-500/20 text-slate-400";
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

      {/* Backdrop */}

      <div
        onClick={onClose}
        className="absolute inset-0"
      />

      {/* Modal */}

      <div className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Rental Details
            </h2>

            <p className="mt-1 text-slate-400">
              Order ID: {rental.id}
            </p>

          </div>

          <button
            onClick={onClose}
            className="rounded-xl p-2 transition hover:bg-white/10"
          >
            <X size={22} />
          </button>

        </div>

        {/* Body */}

        <div className="flex-1 space-y-6 overflow-y-auto p-6">

          {/* Customer + Status */}

          <div className="grid gap-6 md:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

              <div className="mb-4 flex items-center gap-2">

                <User
                  size={20}
                  className="text-indigo-400"
                />

                <h3 className="font-semibold text-white">
                  Customer
                </h3>

              </div>

              <p className="font-medium text-white">
                {rental.customer.name}
              </p>

              <p className="mt-1 text-slate-400">
                {rental.customer.email}
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

              <div className="mb-4 flex items-center gap-2">

                <CalendarDays
                  size={20}
                  className="text-indigo-400"
                />

                <h3 className="font-semibold text-white">
                  Rental Information
                </h3>

              </div>

              <div className="space-y-3">

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Start
                  </span>

                  <span className="text-white">
                    {new Date(
                      rental.startDate
                    ).toLocaleDateString()}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    End
                  </span>

                  <span className="text-white">
                    {new Date(
                      rental.endDate
                    ).toLocaleDateString()}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Status
                  </span>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor()}`}
                  >
                    {rental.status}
                  </span>

                </div>

                <div className="flex justify-between">

                  <span className="text-slate-400">
                    Total
                  </span>

                  <span className="text-xl font-bold text-white">
                    ৳{rental.totalAmount}
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Gear Items */}

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">

            <div className="mb-5 flex items-center gap-2">

              <Package
                size={20}
                className="text-indigo-400"
              />

              <h3 className="font-semibold text-white">
                Ordered Gear
              </h3>

            </div>

            <div className="space-y-4">
              {rental.items.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-800/50 p-4 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={item.gearItem.image}
                      alt={item.gearItem.name}
                      width={70}
                      height={70}
                      className="rounded-xl object-cover"
                    />

                    <div>
                      <h4 className="font-semibold text-white">
                        {item.gearItem.name}
                      </h4>

                      <p className="mt-1 text-sm text-slate-400">
                        Quantity: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1 text-right">
                    <p className="text-slate-400">
                      ৳{item.pricePerDay}
                      <span className="text-xs">
                        {" "}
                        / day
                      </span>
                    </p>

                    <p className="font-semibold text-white">
                      Subtotal: ৳{item.subtotal}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-5 text-lg font-semibold text-white">
              Order Summary
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-slate-400">
                  Total Items
                </span>

                <span className="text-white">
                  {rental.items.length}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Total Quantity
                </span>

                <span className="text-white">
                  {rental.items.reduce(
                    (total, item) =>
                      total + item.quantity,
                    0
                  )}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-slate-400">
                  Total Amount
                </span>

                <span className="text-2xl font-bold text-indigo-400">
                  ৳{rental.totalAmount}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

        <div className="flex justify-end border-t border-white/10 p-6">
          <button
            onClick={onClose}
            className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-8 py-3 font-semibold text-white transition hover:scale-105"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}