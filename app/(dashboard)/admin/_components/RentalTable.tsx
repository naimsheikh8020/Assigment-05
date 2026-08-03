"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

export interface Rental {
  id: string;
  customer: {
    name: string;
    email: string;
  };
  startDate: string;
  endDate: string;
  totalAmount: string;
  status: "PENDING" | "CONFIRMED" | "PAID" | "COMPLETED";
  items: {
    id: string;
    quantity: number;
    pricePerDay: string;
    subtotal: string;
    gearItem: {
      name: string;
      image: string;
    };
  }[];
}

interface RentalTableProps {
  rentals: Rental[];
  onView: (rental: Rental) => void;
}

export default function RentalTable({
  rentals,
  onView,
}: RentalTableProps) {
  const statusColor = (
    status: Rental["status"]
  ) => {
    switch (status) {
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
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-white/10 bg-slate-900/80">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Customer
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Gear
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Rental Date
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Total
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {rentals.length === 0 ? (
              <tr>
                <td
                  colSpan={6}
                  className="py-16 text-center text-slate-400"
                >
                  No rental orders found.
                </td>
              </tr>
            ) : (
              rentals.map((rental) => (
                <tr
                  key={rental.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  {/* Customer */}

                  <td className="px-6 py-5">
                    <div>
                      <h3 className="font-semibold text-white">
                        {rental.customer.name}
                      </h3>

                      <p className="text-sm text-slate-400">
                        {rental.customer.email}
                      </p>
                    </div>
                  </td>

                  {/* Gear */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-3">
                      <Image
                        src={
                          rental.items[0].gearItem.image
                        }
                        alt={
                          rental.items[0].gearItem.name
                        }
                        width={52}
                        height={52}
                        className="rounded-xl object-cover"
                      />

                      <div>
                        <p className="font-medium text-white">
                          {
                            rental.items[0].gearItem
                              .name
                          }
                        </p>

                        <p className="text-sm text-slate-400">
                          Qty:{" "}
                          {
                            rental.items[0]
                              .quantity
                          }
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Rental Date */}

                  <td className="px-6 py-5 text-slate-300">
                    <div>
                      <p>
                        {new Date(
                          rental.startDate
                        ).toLocaleDateString()}
                      </p>

                      <p className="text-sm text-slate-500">
                        to{" "}
                        {new Date(
                          rental.endDate
                        ).toLocaleDateString()}
                      </p>
                    </div>
                  </td>

                  {/* Total */}

                  <td className="px-6 py-5 font-semibold text-white">
                    ৳{rental.totalAmount}
                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(
                        rental.status
                      )}`}
                    >
                      {rental.status}
                    </span>
                  </td>

                  {/* Action */}

                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <button
                        onClick={() =>
                          onView(rental)
                        }
                        className="rounded-xl bg-indigo-500/10 p-2 text-indigo-400 transition hover:bg-indigo-500 hover:text-white"
                      >
                        <Eye size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}