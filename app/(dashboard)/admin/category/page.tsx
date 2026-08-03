"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Plus, Search, X, LayoutGrid } from "lucide-react";

import CategoryTable, { Category } from "../_components/CategoryTable";
import CreateCategoryModal from "../_components/CreateCategoryModal";
import EditCategoryModal from "../_components/EditCategoryModal";
import DeleteCategoryModal from "../_components/DeleteCategoryModal";

export default function CategoryPage() {
  // Replace with RTK Query later
  const [categories] = useState<Category[]>([
    {
      id: "1",
      name: "Camping",
      slug: "camping",
      description: "Camping Equipment",
      createdAt: "2026-07-08T12:59:30.360Z",
    },
    {
      id: "2",
      name: "Running",
      slug: "running",
      description: "Running Equipment",
      createdAt: "2026-07-08T13:00:53.679Z",
    },
    {
      id: "3",
      name: "Fishing",
      slug: "fishing",
      description: "Fishing Equipment",
      createdAt: "2026-07-08T13:01:16.410Z",
    },
    {
      id: "4",
      name: "Fitness",
      slug: "fitness",
      description: "Fitness Equipment",
      createdAt: "2026-07-08T13:00:25.894Z",
    },
    {
      id: "4",
      name: "Fitness",
      slug: "fitness",
      description: "Fitness Equipment",
      createdAt: "2026-07-08T13:00:25.894Z",
    },
    {
      id: "4",
      name: "Fitness",
      slug: "fitness",
      description: "Fitness Equipment",
      createdAt: "2026-07-08T13:00:25.894Z",
    },
    {
      id: "4",
      name: "Fitness",
      slug: "fitness",
      description: "Fitness Equipment",
      createdAt: "2026-07-08T13:00:25.894Z",
    },
    {
      id: "4",
      name: "Fitness",
      slug: "fitness",
      description: "Fitness Equipment",
      createdAt: "2026-07-08T13:00:25.894Z",
    },
    {
      id: "4",
      name: "Fitness",
      slug: "fitness",
      description: "Fitness Equipment",
      createdAt: "2026-07-08T13:00:25.894Z",
    },{
      id: "4",
      name: "Fitness",
      slug: "fitness",
      description: "Fitness Equipment",
      createdAt: "2026-07-08T13:00:25.894Z",
    },
    
  ]);

  const [search, setSearch] = useState("");
  const [createOpen, setCreateOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const filteredCategories = useMemo(() => {
    return categories.filter((category) =>
      category.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [categories, search]);

  const handleCreate = (data: { name: string; description: string }) => {
    console.log(data);
    // POST API
  };

  const handleEdit = (id: string, data: { name: string; description: string }) => {
    console.log(id, data);
    // PATCH API
  };

  const handleDelete = () => {
    if (!selectedCategory) return;
    console.log(selectedCategory.id);
    // DELETE API
  };

  const hasResults = filteredCategories.length > 0;
  const isFiltering = search.trim().length > 0;

  return (
    <main className="mx-auto mt-10 max-w-7xl space-y-8 px-4 pb-16 sm:px-6 lg:px-0">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800">
        {/* subtle glow accent, purely decorative */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />

        <div className="relative flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <Link
              href="/admin"
              className="mb-4 inline-flex items-center gap-2 text-sm text-slate-400 transition-colors hover:text-white"
            >
              <ArrowLeft size={16} />
              Back to Admin
            </Link>
            <br/>
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              <LayoutGrid size={14} />
              Dashboard
            </span>

            <h1 className="mt-5 text-4xl font-bold tracking-tight text-white">
              Manage Categories
            </h1>

            <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
              Create, edit and organize all categories available on the
              GearUp platform.
            </p>
          </div>

          <button
            onClick={() => setCreateOpen(true)}
            className="group flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-4 font-semibold text-white shadow-lg shadow-indigo-500/20 transition-all duration-200 hover:shadow-xl hover:shadow-indigo-500/30 hover:brightness-110 active:scale-95"
          >
            <Plus
              size={20}
              className="transition-transform duration-200 group-hover:rotate-90"
            />
            Create Category
          </button>
        </div>
      </section>

      {/* Toolbar */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-white">Categories</h2>
            <p className="mt-1 text-sm text-slate-400">
              {hasResults ? (
                <>
                  <span className="font-medium text-slate-300">
                    {filteredCategories.length}
                  </span>{" "}
                  {filteredCategories.length === 1 ? "category" : "categories"}
                  {isFiltering ? " matching your search" : " available"}
                </>
              ) : (
                "No categories match your search"
              )}
            </p>
          </div>

          <div className="relative w-full lg:max-w-md">
            <Search
              size={18}
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search categories..."
              className="w-full rounded-2xl border border-white/10 bg-slate-900 py-3 pl-11 pr-10 text-white placeholder:text-slate-500 outline-none transition-colors duration-150 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
            />

            {isFiltering && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-500 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        {hasResults ? (
          <CategoryTable
            categories={filteredCategories}
            onEdit={(id) => {
              const category = categories.find((item) => item.id === id) || null;
              setSelectedCategory(category);
              setEditOpen(true);
            }}
            onDelete={(id) => {
              const category = categories.find((item) => item.id === id) || null;
              setSelectedCategory(category);
              setDeleteOpen(true);
            }}
          />
        ) : (
          <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5">
              <Search size={22} className="text-slate-500" />
            </div>
            <p className="font-medium text-slate-300">No categories found</p>
            <p className="max-w-sm text-sm text-slate-500">
              We couldn&apos;t find any categories matching &ldquo;{search}&rdquo;.
              Try a different search term.
            </p>
            <button
              onClick={() => setSearch("")}
              className="mt-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              Clear search
            </button>
          </div>
        )}
      </section>

      {/* Create Category Modal */}
      <CreateCategoryModal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        onSubmit={handleCreate}
      />

      {/* Edit Category Modal */}
      <EditCategoryModal
        open={editOpen}
        category={selectedCategory}
        onClose={() => {
          setEditOpen(false);
          setSelectedCategory(null);
        }}
        onSubmit={handleEdit}
      />

      {/* Delete Category Modal */}
      <DeleteCategoryModal
        open={deleteOpen}
        categoryName={selectedCategory?.name || ""}
        onClose={() => {
          setDeleteOpen(false);
          setSelectedCategory(null);
        }}
        onDelete={() => {
          handleDelete();
          setDeleteOpen(false);
          setSelectedCategory(null);
        }}
      />
    </main>
  );
}