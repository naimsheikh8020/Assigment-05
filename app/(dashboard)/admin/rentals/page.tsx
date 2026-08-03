"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Search,
  ChevronDown,
} from "lucide-react";

import RentalTable, {
  Rental,
} from "../_components/RentalTable";
import RentalDetailsModal from "../_components/RentalDetailsModal";

export default function RentalOrdersPage() {
  // Replace with RTK Query
  const [rentals] = useState<Rental[]>([
    {
      id: "1",
      customer: {
        name: "MOTIN",
        email: "motin@gmail.com",
      },
      startDate: "2026-08-15",
      endDate: "2026-08-18",
      totalAmount: "1230",
      status: "COMPLETED",
      items: [
        {
          id: "1",
          quantity: 2,
          pricePerDay: "205",
          subtotal: "1230",
          gearItem: {
            name: "Nike Running Shoe",
            image:
              "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
          },
        },
      ],
    },
    {
      id: "2",
      customer: {
        name: "Naim",
        email: "naim@gmail.com",
      },
      startDate: "2026-08-10",
      endDate: "2026-08-12",
      totalAmount: "600",
      status: "PENDING",
      items: [
        {
          id: "2",
          quantity: 1,
          pricePerDay: "200",
          subtotal: "600",
          gearItem: {
            name: "Adidas Running Shoe",
            image:
              "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
          },
        },
      ],
    },
  ]);

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("ALL");

  const [selectedRental, setSelectedRental] =
    useState<Rental | null>(null);

  const [open, setOpen] = useState(false);

  const filteredRentals = useMemo(() => {
    return rentals.filter((rental) => {
      const matchesSearch =
        rental.customer.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        rental.customer.email
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesStatus =
        status === "ALL" ||
        rental.status === status;

      return matchesSearch && matchesStatus;
    });
  }, [rentals, search, status]);

  return (
    <main className="mx-auto max-w-7xl space-y-8 px-4 py-8">

      {/* Header */}

      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-8">

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <Link
              href="/admin"
              className="mb-5 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
            >
              <ArrowLeft size={18} />
              Back
            </Link>

            <h1 className="text-4xl font-bold text-white">
              Rental Orders
            </h1>

            <p className="mt-3 text-slate-400">
              Manage and monitor all rental
              orders placed by customers.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">

            <p className="text-sm text-slate-400">
              Total Orders
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              {filteredRentals.length}
            </h2>

          </div>

        </div>

      </section>

      {/* Filters */}

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-2xl font-semibold text-white">
              Orders
            </h2>

            <p className="mt-1 text-slate-400">
              Search by customer name or email.
            </p>

          </div>

          <div className="flex w-full flex-col gap-4 lg:w-auto lg:flex-row">

            {/* Search */}

            <div className="relative lg:w-80">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                placeholder="Search orders..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="w-full rounded-2xl border border-white/10 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none transition focus:border-indigo-500"
              />

            </div>

            {/* Status Filter */}

            <div className="relative lg:w-52">

              <select
                value={status}
                onChange={(e) =>
                  setStatus(e.target.value)
                }
                className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-slate-900 px-4 pr-10 text-white outline-none transition focus:border-indigo-500"
              >
                <option value="ALL">
                  All Status
                </option>

                <option value="PENDING">
                  Pending
                </option>

                <option value="CONFIRMED">
                  Confirmed
                </option>

                <option value="PAID">
                  Paid
                </option>

                <option value="COMPLETED">
                  Completed
                </option>

              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />

            </div>

          </div>

        </div>

      </section>

      {/* Rental Table */}

      <RentalTable
        rentals={filteredRentals}
        onView={(rental) => {
          setSelectedRental(rental);
          setOpen(true);
        }}
      />
            {/* Details Modal */}

      <RentalDetailsModal
        open={open}
        rental={selectedRental}
        onClose={() => {
          setOpen(false);
          setSelectedRental(null);
        }}
      />

    </main>
  );
}