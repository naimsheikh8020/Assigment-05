"use client";

import Link from "next/link";
import { Menu, UserCircle2, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Gear",
    href: "/gear",
  },
  {
    name: "Orders",
    href: "/order",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky w-full mx-auto top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8 py-10">
        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-cyan-500 text-lg font-bold text-white shadow-lg">
            G
          </div>

          <span className="hidden text-xl font-bold text-white sm:block">
            GearUp
          </span>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active =
              pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative text-sm font-medium transition ${
                  active
                    ? "text-white"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.name}

                {active && (
                  <span className="absolute -bottom-[22px] left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right */}

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-white/10 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white">
            <UserCircle2 size={28} />
          </button>

          {/* Mobile */}

          <button
            onClick={() => setOpen(!open)}
            className="rounded-lg p-2 text-white md:hidden"
          >
            {open ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          open
            ? "max-h-60 border-t border-white/10"
            : "max-h-0"
        }`}
      >
        <nav className="flex flex-col p-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-xl px-4 py-3 transition ${
                pathname === item.href
                  ? "bg-indigo-500/20 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}