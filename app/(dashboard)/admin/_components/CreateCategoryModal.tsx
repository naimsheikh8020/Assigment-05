"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface CreateCategoryModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: {
    name: string;
    description: string;
  }) => void;
}

export default function CreateCategoryModal({
  open,
  onClose,
  onSubmit,
}: CreateCategoryModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (!open) {
      setName("");
      setDescription("");
    }
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Category name is required.");
      return;
    }

    onSubmit({
      name,
      description,
    });

    onClose();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
      {/* Backdrop */}
      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-2xl font-bold text-white">
            Create Category
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 p-6"
        >
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Category Name
            </label>

            <input
              type="text"
              placeholder="Enter category name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Description
            </label>

            <textarea
              rows={4}
              placeholder="Enter category description"
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105"
            >
              Create Category
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}