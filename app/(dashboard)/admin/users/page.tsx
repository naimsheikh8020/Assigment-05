"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ArrowLeft, ChevronDown, Search } from "lucide-react";

import UserTable, {
  User,
} from "../_components/UserTable";

export default function UsersPage() {
  // Replace with RTK Query
  const [users, setUsers] = useState<User[]>([
    {
      id: "1",
      name: "MOTIN",
      email: "motin@gmail.com",
      phone: null,
      avatar: null,
      role: "CUSTOMER",
      status: "ACTIVE",
      createdAt: "2026-07-09",
    },
    {
      id: "2",
      name: "Provider",
      email: "provider@gmail.com",
      phone: "01712345678",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
      role: "PROVIDER",
      status: "ACTIVE",
      createdAt: "2026-07-08",
    },
    {
      id: "3",
      name: "Naim",
      email: "naim@gmail.com",
      phone: null,
      avatar: null,
      role: "CUSTOMER",
      status: "SUSPENDED",
      createdAt: "2026-07-08",
    },
    {
      id: "4",
      name: "Naim Sheikh",
      email: "naim123@gmail.com",
      phone: null,
      avatar: null,
      role: "CUSTOMER",
      status: "ACTIVE",
      createdAt: "2026-07-08",
    },
  ]);

  const [search, setSearch] = useState("");
  const [role, setRole] = useState("ALL");
  const filteredUsers = useMemo(() => {
    return users.filter((user) =>
      `${user.name} ${user.email}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [users, search]);

  const handleToggleStatus = (
    id: string,
    status: "ACTIVE" | "SUSPENDED"
  ) => {
    // Update UI immediately
    setUsers((prev) =>
      prev.map((user) =>
        user.id === id
          ? {
            ...user,
            status,
          }
          : user
      )
    );

    // Backend API
    // await updateUserStatus({
    //   id,
    //   status,
    // }).unwrap();
  };

  return (
    <main className="space-y-8 mx-auto max-w-7xl mt-10">

      {/* Header */}

      <section className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800 p-8">

        <Link
          href="/admin"
          className="mb-6 inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          <ArrowLeft size={18} />
          Back
        </Link>

        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <span className="rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-medium text-indigo-300">
              Admin Panel
            </span>

            <h1 className="mt-5 text-4xl font-bold text-white">
              Manage Users
            </h1>

            <p className="mt-3 max-w-2xl text-slate-400">
              View all registered users and manage their
              account status.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">

            <p className="text-sm text-slate-400">
              Total Users
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              {filteredUsers.length}
            </h2>

          </div>

        </div>

      </section>

      {/* Search */}
      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

          <div>
            <h2 className="text-2xl font-semibold text-white">
              Users
            </h2>

            <p className="mt-1 text-slate-400">
              Search by user name or email.
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 lg:w-auto lg:flex-row">

            {/* Search */}

            <div className="relative flex-1 lg:w-80">

              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search users..."
                className="w-full rounded-2xl border border-white/10 bg-slate-900 py-3 pl-12 pr-4 text-white outline-none transition focus:border-indigo-500"
              />

            </div>

            {/* Role Filter */}

            <div className="relative w-full lg:w-56">
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="h-12 w-full appearance-none rounded-2xl border border-white/10 bg-slate-900/80 px-4 pr-10 text-sm font-medium text-white shadow-lg outline-none transition-all duration-200 hover:border-indigo-500/50 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
              >
                <option value="ALL">All Roles</option>
                <option value="CUSTOMER">Customer</option>
                <option value="PROVIDER">Provider</option>
                <option value="ADMIN">Admin</option>
              </select>

              <ChevronDown
                size={18}
                className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
              />
            </div>

          </div>

        </div>
      </section>

      {/* User Table */}

      <section className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">

        <UserTable
          users={filteredUsers}
          onToggleStatus={handleToggleStatus}
        />

      </section>

    </main>
  );
}