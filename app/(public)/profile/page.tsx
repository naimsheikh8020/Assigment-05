"use client";

import Image from "next/image";
import Link from "next/link";
import { Edit3, KeyRound, Mail, Phone, Shield, User } from "lucide-react";

export default function ProfilePage() {
  const profile = {
    name: "MOTIN",
    email: "motin@gmail.com",
    phone: null,
    avatar: null,
    role: "CUSTOMER",
    status: "ACTIVE",
    joined: "09 Jul 2026",
  };

  return (
    <main className="min-h-screen bg-slate-950 py-10 text-white">
      <div className="mx-auto max-w-5xl px-4">

        {/* Header */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="flex flex-col items-center">

            {profile.avatar ? (
              <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-indigo-500/30">
                <Image
                  src={profile.avatar}
                  alt={profile.name}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 text-5xl font-bold">
                {profile.name.charAt(0)}
              </div>
            )}

            <h1 className="mt-6 text-4xl font-bold">
              {profile.name}
            </h1>

            <p className="mt-2 text-slate-400">
              {profile.email}
            </p>

            <div className="mt-6 flex gap-3">

              <span className="rounded-full bg-indigo-500/20 px-4 py-2 text-sm text-indigo-300">
                {profile.role}
              </span>

              <span className="rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-400">
                {profile.status}
              </span>

            </div>

          </div>
        </div>

        {/* Information */}

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="mb-8 text-2xl font-bold">
            Personal Information
          </h2>

          <div className="grid gap-6 md:grid-cols-2">

            <InfoCard
              icon={<User size={20} />}
              label="Full Name"
              value={profile.name}
            />

            <InfoCard
              icon={<Mail size={20} />}
              label="Email"
              value={profile.email}
            />

            <InfoCard
              icon={<Phone size={20} />}
              label="Phone"
              value={profile.phone ?? "Not Added"}
            />

            <InfoCard
              icon={<Shield size={20} />}
              label="Account Status"
              value={profile.status}
            />

          </div>

        </div>

     

      </div>
    </main>
  );
}

function InfoCard({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-5">
      <div className="flex items-center gap-3 text-indigo-400">
        {icon}
        <span className="text-sm text-slate-400">
          {label}
        </span>
      </div>

      <h3 className="mt-3 text-lg font-semibold">
        {value}
      </h3>
    </div>
  );
}