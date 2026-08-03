"use client";

import Image from "next/image";
import { Pencil, Trash2 } from "lucide-react";

export interface Gear {
  id: string;
  name: string;
  brand: string;
  image: string;
  pricePerDay: string;
  totalStock: number;
  availableStock: number;
  isAvailable: boolean;
  provider: {
    name: string;
  };
  category: {
    name: string;
  };
}

interface GearTableProps {
  gears: Gear[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function GearTable({
  gears,
  onEdit,
  onDelete,
}: GearTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-white/10 bg-slate-900/70">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Gear
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Brand
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Category
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Price / Day
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Stock
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Provider
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Status
              </th>

              
            </tr>
          </thead>

          <tbody>
            {gears.length === 0 ? (
              <tr>
                <td
                  colSpan={8}
                  className="py-16 text-center text-slate-400"
                >
                  No gears found.
                </td>
              </tr>
            ) : (
              gears.map((gear) => (
                <tr
                  key={gear.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  {/* Gear */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      <Image
                        src={gear.image}
                        alt={gear.name}
                        width={60}
                        height={60}
                        className="rounded-xl object-cover"
                      />

                      <div>
                        <h3 className="font-semibold text-white">
                          {gear.name}
                        </h3>

                        <p className="text-sm text-slate-400">
                          {gear.availableStock} available
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Brand */}

                  <td className="px-6 py-5 text-slate-300">
                    {gear.brand}
                  </td>

                  {/* Category */}

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs text-indigo-300">
                      {gear.category.name}
                    </span>
                  </td>

                  {/* Price */}

                  <td className="px-6 py-5 font-semibold text-white">
                    ৳{gear.pricePerDay}
                  </td>

                  {/* Stock */}

                  <td className="px-6 py-5 text-slate-300">
                    {gear.availableStock} / {gear.totalStock}
                  </td>

                  {/* Provider */}

                  <td className="px-6 py-5 text-slate-300">
                    {gear.provider.name}
                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        gear.isAvailable
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {gear.isAvailable
                        ? "Available"
                        : "Unavailable"}
                    </span>
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