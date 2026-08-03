"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowLeft,
  Plus,
  Search,
} from "lucide-react";

import GearTable, {
  Gear,
} from "../_components/GearTable";

import CreateGearModal from "../_components/CreateGearModal";
import EditGearModal from "../_components/EditGearModal";
import DeleteGearModal from "../_components/DeleteGearModal";

export default function GearPage() {
  // Replace with RTK Query
  const [gears] = useState<Gear[]>([
    {
      id: "1",
      name: "Nike Running Shoe",
      brand: "Nike",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
      pricePerDay: "205",
      totalStock: 158,
      availableStock: 152,
      isAvailable: true,
      provider: {
        name: "Provider",
      },
      category: {
        name: "Running",
      },
    },
    {
      id: "2",
      name: "Camping Gear",
      brand: "Adidas",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
      pricePerDay: "200",
      totalStock: 20,
      availableStock: 10,
      isAvailable: true,
      provider: {
        name: "Provider",
      },
      category: {
        name: "Camping",
      },
    },
    {
      id: "3",
      name: "Football",
      brand: "Puma",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974",
      pricePerDay: "150",
      totalStock: 15,
      availableStock: 0,
      isAvailable: false,
      provider: {
        name: "Provider",
      },
      category: {
        name: "Football",
      },
    },
  ]);

  const [search, setSearch] = useState("");

  const [createOpen, setCreateOpen] =
    useState(false);

  const [editOpen, setEditOpen] =
    useState(false);

  const [deleteOpen, setDeleteOpen] =
    useState(false);

  const [selectedGear, setSelectedGear] =
    useState<Gear | null>(null);

  const filteredGears = useMemo(() => {
    return gears.filter(
      (gear) =>
        gear.name
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        gear.brand
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        gear.category.name
          .toLowerCase()
          .includes(search.toLowerCase())
    );
  }, [gears, search]);

  const handleCreate = (data: any) => {
    console.log(data);

    // POST API

    setCreateOpen(false);
  };

  const handleEdit = (
    id: string,
    data: any
  ) => {
    console.log(id, data);

    // PATCH API

    setEditOpen(false);
  };

  const handleDelete = () => {
    if (!selectedGear) return;

    console.log(selectedGear.id);

    // DELETE API

    setDeleteOpen(false);
  };

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
              Manage Gear
            </h1>

            <p className="mt-3 text-slate-400">
              Create, update and delete gear
              items.
            </p>

          </div>

          

        </div>

      </section>

      {/* Search */}

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h2 className="text-2xl font-semibold text-white">
              Gear List
            </h2>

            <p className="mt-1 text-slate-400">
              Search by gear name, brand or
              category.
            </p>

          </div>

          <div className="relative w-full lg:max-w-md">

            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              placeholder="Search gear..."
              className="w-full rounded-2xl border border-white/10 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none transition focus:border-indigo-500"
            />

          </div>

        </div>

      </section>

      <GearTable
        gears={filteredGears}
        onEdit={(id) => {
          const gear =
            gears.find(
              (item) => item.id === id
            ) || null;

          setSelectedGear(gear);
          setEditOpen(true);
        }}
        onDelete={(id) => {
          const gear =
            gears.find(
              (item) => item.id === id
            ) || null;

          setSelectedGear(gear);
          setDeleteOpen(true);
        }}
      />
      {/* Create Gear */}

      

    </main>
  );
}