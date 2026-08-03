"use client";

import { Pencil, Trash2 } from "lucide-react";

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  createdAt: string;
}

interface CategoryTableProps {
  categories: Category[];
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export default function CategoryTable({
  categories,
  onEdit,
  onDelete,
}: CategoryTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="max-h-[520px] overflow-auto ">
        <table className="min-w-full border-collapse">
          <thead className="sticky top-0 z-10 border-b border-white/10 bg-slate-900/95 backdrop-blur">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Name
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Slug
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Description
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Created
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {categories.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="px-6 py-12 text-center text-slate-400"
                >
                  No categories found.
                </td>
              </tr>
            ) : (
              categories.map((category) => (
                <tr
                  key={category.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  <td className="whitespace-nowrap px-6 py-5 font-medium text-white">
                    {category.name}
                  </td>

                  <td className="whitespace-nowrap px-6 py-5">
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm text-indigo-300">
                      {category.slug}
                    </span>
                  </td>

                  <td className="max-w-xs truncate px-6 py-5 text-slate-400">
                    {category.description}
                  </td>

                  <td className="whitespace-nowrap px-6 py-5 text-slate-400">
                    {new Date(category.createdAt).toLocaleDateString()}
                  </td>

                  <td className="px-6 py-5">
                    <div className="flex items-center justify-center gap-3">
                      <button
                        onClick={() => onEdit(category.id)}
                        className="rounded-xl bg-indigo-500/10 p-2 text-indigo-400 transition hover:bg-indigo-500 hover:text-white"
                      >
                        <Pencil size={18} />
                      </button>

                      <button
                        onClick={() => onDelete(category.id)}
                        className="rounded-xl bg-red-500/10 p-2 text-red-400 transition hover:bg-red-500 hover:text-white"
                      >
                        <Trash2 size={18} />
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