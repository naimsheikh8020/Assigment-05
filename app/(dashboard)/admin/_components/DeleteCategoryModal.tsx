"use client";

import { Trash2, X } from "lucide-react";

interface DeleteCategoryModalProps {
  open: boolean;
  categoryName: string;
  onClose: () => void;
  onDelete: () => void;
}

export default function DeleteCategoryModal({
  open,
  categoryName,
  onClose,
  onDelete,
}: DeleteCategoryModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-6">

        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-2 hover:bg-white/10"
        >
          <X />
        </button>

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red-500/20 text-red-400">

          <Trash2 size={34} />

        </div>

        <h2 className="mt-6 text-center text-2xl font-bold text-white">
          Delete Category
        </h2>

        <p className="mt-4 text-center text-slate-400">
          Are you sure you want to delete
        </p>

        <p className="mt-1 text-center font-semibold text-white">
          {categoryName} ?
        </p>

        <p className="mt-4 text-center text-sm text-red-400">
          This action cannot be undone.
        </p>

        <div className="mt-8 flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 rounded-xl border border-white/10 py-3"
          >
            Cancel
          </button>

          <button
            onClick={onDelete}
            className="flex-1 rounded-xl bg-red-600 py-3 font-semibold transition hover:bg-red-700"
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}