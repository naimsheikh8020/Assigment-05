"use client";

import Link from "next/link";
import { LogOut, Package, User } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function ProfileDropdown({
  open,
  onClose,
}: Props) {
  if (!open) return null;

  const profile = {
    name: "MOTIN",
    email: "motin@gmail.com",
    role: "CUSTOMER",
    status: "ACTIVE",
  };

  return (
    <div className="absolute right-0 top-14 z-50 w-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/95 shadow-2xl backdrop-blur-xl">

      {/* Header */}

      <div className="border-b border-white/10 p-5">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-xl font-bold text-white">
          {profile.name.charAt(0)}
        </div>

        <h3 className="mt-3 text-center text-lg font-semibold text-white">
          {profile.name}
        </h3>

        <p className="truncate text-center text-sm text-slate-400">
          {profile.email}
        </p>

        <div className="mt-3 flex items-center justify-center gap-2">
          <span className="rounded-full bg-indigo-500/20 px-2.5 py-1 text-[11px] font-medium text-indigo-300">
            {profile.role}
          </span>

          <span className="rounded-full bg-emerald-500/20 px-2.5 py-1 text-[11px] font-medium text-emerald-400">
            {profile.status}
          </span>
        </div>
      </div>

      {/* Menu */}

      <div className="p-2">

        <Link
          href="/profile"
          onClick={onClose}
          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
        >
          <User size={18} />
          Profile
        </Link>

        <Link
          href="/order"
          onClick={onClose}
          className="mt-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
        >
          <Package size={18} />
          My Orders
        </Link>

        <div className="my-2 border-t border-white/10" />

        <button
          onClick={() => {
            onClose();

            // logout logic
          }}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-red-400 transition hover:bg-red-500/10"
        >
          <LogOut size={18} />
          Logout
        </button>

      </div>
    </div>
  );
}