"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";

interface Category {
  id: string;
  name: string;
  description: string;
}

interface EditCategoryModalProps {
  open: boolean;
  category: Category | null;
  onClose: () => void;
  onSubmit: (
    id: string,
    data: {
      name: string;
      description: string;
    }
  ) => void;
}

export default function EditCategoryModal({
  open,
  category,
  onClose,
  onSubmit,
}: EditCategoryModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] =
    useState("");

  useEffect(() => {
    if (category) {
      setName(category.name);
      setDescription(category.description);
    }
  }, [category]);

  if (!open || !category) return null;

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    onSubmit(category.id, {
      name,
      description,
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">

      <div
        className="absolute inset-0"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900">

        <div className="flex items-center justify-between border-b border-white/10 p-6">

          <h2 className="text-2xl font-bold text-white">
            Edit Category
          </h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 hover:bg-white/10"
          >
            <X />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5 p-6"
        >

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Name
            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 outline-none"
            />

          </div>

          <div>

            <label className="mb-2 block text-sm text-slate-300">
              Description
            </label>

            <textarea
              rows={4}
              value={description}
              onChange={(e) =>
                setDescription(e.target.value)
              }
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 outline-none"
            />

          </div>

          <div className="flex justify-end gap-3">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-white/10 px-5 py-3"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 px-5 py-3 font-semibold"
            >
              Update Category
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}