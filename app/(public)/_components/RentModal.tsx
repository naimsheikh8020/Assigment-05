"use client";

import { useMemo, useState } from "react";
import { Minus, Plus, X } from "lucide-react";

interface RentModalProps {
  open: boolean;
  onClose: () => void;
  gearItemId: string;
  gearName: string;
  pricePerDay: number;
  availableStock: number;
  onSubmit: (payload: {
    startDate: string;
    endDate: string;
    items: {
      gearItemId: string;
      quantity: number;
    }[];
  }) => void;
}

export default function RentModal({
  open,
  onClose,
  gearItemId,
  gearName,
  pricePerDay,
  availableStock,
  onSubmit,
}: RentModalProps) {
  const today = new Date().toISOString().split("T")[0];

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [quantity, setQuantity] = useState(1);
  const [error, setError] = useState<string | null>(null);

  // ✅ Hooks are always called
  const totalDays = useMemo(() => {
    const start = new Date(startDate);
    const end = new Date(endDate);

    if (end < start) return 0;

    const diff =
      Math.floor(
        (end.getTime() - start.getTime()) /
          (1000 * 60 * 60 * 24)
      ) + 1;

    return diff;
  }, [startDate, endDate]);

  const totalPrice = useMemo(() => {
    return totalDays * quantity * pricePerDay;
  }, [totalDays, quantity, pricePerDay]);

  const isValid = Boolean(startDate && endDate && totalDays > 0 && quantity > 0);

  const handleRent = () => {
    if (!startDate || !endDate) {
      setError("Please select rental dates.");
      return;
    }

    if (totalDays === 0) {
      setError("End date can't be before the start date.");
      return;
    }

    setError(null);

    onSubmit({
      startDate,
      endDate,
      items: [
        {
          gearItemId,
          quantity,
        },
      ],
    });

    onClose();
  };

  // Optional: reset form when closing
  const handleClose = () => {
    setQuantity(1);
    setStartDate(today);
    setEndDate(today);
    setError(null);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-end justify-center bg-black/70 backdrop-blur-sm transition-opacity duration-300 sm:items-center sm:p-4 ${
        open ? "visible opacity-100" : "invisible opacity-0"
      }`}
      role="dialog"
      aria-modal="true"
      aria-labelledby="rent-modal-title"
    >
      {/* Backdrop */}
      <div className="absolute inset-0" onClick={handleClose} />

      {/* Modal */}
      <div
        className={`relative flex max-h-[92vh] w-full flex-col overflow-hidden rounded-t-3xl border border-white/10 bg-slate-900 shadow-2xl transition-transform duration-300 sm:max-h-[90vh] sm:max-w-lg sm:rounded-3xl ${
          open ? "translate-y-0" : "translate-y-full sm:translate-y-0"
        }`}
      >
        {/* Drag handle (mobile only) */}
        <div className="flex justify-center pb-1 pt-3 sm:hidden">
          <span className="h-1.5 w-10 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="flex shrink-0 items-center justify-between border-b border-white/10 p-5 sm:p-6">
          <div className="min-w-0 pr-4">
            <h2
              id="rent-modal-title"
              className="text-xl font-bold text-white sm:text-2xl"
            >
              Rent Gear
            </h2>
            <p className="mt-1 truncate text-slate-400">{gearName}</p>
          </div>

          <button
            onClick={handleClose}
            aria-label="Close"
            className="shrink-0 rounded-lg p-2.5 text-slate-400 transition hover:bg-white/10 hover:text-white active:scale-95"
          >
            <X size={20} />
          </button>
        </div>

        {/* Body (scrollable) */}
        <div className="flex-1 space-y-5 overflow-y-auto p-5 sm:space-y-6 sm:p-6">
          {/* Price */}
          <div className="rounded-2xl bg-white/5 p-4">
            <p className="text-sm text-slate-400">Price Per Day</p>
            <h3 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
              ${pricePerDay}
            </h3>
          </div>

          {/* Dates */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-slate-300">
                Start Date
              </label>
              <input
                type="date"
                min={today}
                value={startDate}
                onChange={(e) => {
                  setStartDate(e.target.value);
                  setError(null);
                }}
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3.5 text-base text-white outline-none focus:border-indigo-500 sm:py-3"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-slate-300">
                End Date
              </label>
              <input
                type="date"
                min={startDate}
                value={endDate}
                onChange={(e) => {
                  setEndDate(e.target.value);
                  setError(null);
                }}
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3.5 text-base text-white outline-none focus:border-indigo-500 sm:py-3"
              />
            </div>
          </div>

          {error && (
            <p className="rounded-xl bg-red-500/10 px-4 py-3 text-sm text-red-400">
              {error}
            </p>
          )}

          {/* Quantity */}
          <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
            <div>
              <span className="font-medium text-white">Quantity</span>
              <p className="text-xs text-slate-400">
                {availableStock} available
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                aria-label="Decrease quantity"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="rounded-lg bg-white/10 p-3 transition hover:bg-white/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
                disabled={quantity <= 1}
              >
                <Minus size={18} />
              </button>

              <span className="w-6 text-center text-lg font-semibold tabular-nums">
                {quantity}
              </span>

              <button
                aria-label="Increase quantity"
                disabled={quantity >= availableStock}
                onClick={() => setQuantity((q) => q + 1)}
                className="rounded-lg bg-white/10 p-3 transition hover:bg-white/20 active:scale-95 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Plus size={18} />
              </button>
            </div>
          </div>

          {/* Summary */}
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="flex justify-between">
              <span className="text-slate-400">Rental Days</span>
              <span>{totalDays}</span>
            </div>

            <div className="mt-3 flex justify-between">
              <span className="text-slate-400">Quantity</span>
              <span>{quantity}</span>
            </div>

            <div className="mt-5 border-t border-white/10 pt-5">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-indigo-400">${totalPrice}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex shrink-0 gap-3 border-t border-white/10 p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:gap-4 sm:p-6">
          <button
            onClick={handleClose}
            className="flex-1 rounded-xl border border-white/10 py-3.5 font-medium text-white transition hover:bg-white/5 active:scale-[0.98] sm:py-3"
          >
            Cancel
          </button>

          <button
            onClick={handleRent}
            disabled={!isValid}
            className="flex-1 rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 py-3.5 font-semibold text-white transition hover:scale-[1.02] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:scale-100 sm:py-3"
          >
            Confirm Rental
          </button>
        </div>
      </div>
    </div>
  );
}