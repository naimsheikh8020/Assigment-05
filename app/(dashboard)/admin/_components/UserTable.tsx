"use client";

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  avatar: string | null;
  role: "ADMIN" | "PROVIDER" | "CUSTOMER";
  status: "ACTIVE" | "SUSPENDED";
  createdAt: string;
}

interface UserTableProps {
  users: User[];
  onToggleStatus: (
    id: string,
    status: "ACTIVE" | "SUSPENDED"
  ) => void;
}

export default function UserTable({
  users,
  onToggleStatus,
}: UserTableProps) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead className="border-b border-white/10 bg-slate-900/70">
            <tr>
              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                User
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Phone
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Role
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
                Toggle
              </th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td
                  colSpan={5}
                  className="py-16 text-center text-slate-400"
                >
                  No users found.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-white/5 transition hover:bg-white/5"
                >
                  {/* User */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      {user.avatar ? (
                        <img
                          src={user.avatar}
                          alt={user.name}
                          className="h-11 w-11 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-cyan-500 font-semibold text-white">
                          {user.name.charAt(0)}
                        </div>
                      )}

                      <div>
                        <h3 className="font-semibold text-white">
                          {user.name}
                        </h3>

                        <p className="text-sm text-slate-400">
                          {user.email}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* Phone */}

                  <td className="px-6 py-5 text-slate-300">
                    {user.phone || "-"}
                  </td>

                  {/* Role */}

                  <td className="px-6 py-5">
                    <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-medium text-indigo-300">
                      {user.role}
                    </span>
                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${user.status === "ACTIVE"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-red-500/20 text-red-400"
                        }`}
                    >
                      {user.status}
                    </span>
                  </td>


                  {/* Toggle */}

                  <td className="px-6 py-5">
                    <div className="flex justify-center">
                      <button
                        onClick={() =>
                          onToggleStatus(
                            user.id,
                            user.status === "ACTIVE"
                              ? "SUSPENDED"
                              : "ACTIVE"
                          )
                        }
                        className={`min-w-[110px] rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${user.status === "ACTIVE"
                            ? "bg-red-500/20 text-red-400 hover:bg-red-500 hover:text-white"
                            : "bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-white"
                          }`}
                      >
                        {user.status === "ACTIVE"
                          ? "Suspend"
                          : "Activate"}
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