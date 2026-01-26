"use client";

import { useEffect, useState } from "react";

type User = {
  _id: string;
  email: string;
  username: string;
  role: "USER" | "ADMIN";
};

export default function PromoteUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("/api/admin/users")
      .then(res => res.json())
      .then(setUsers);
  }, []);

  async function promote(userId: string) {
    setLoading(true);

    const res = await fetch("/api/admin/promote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId }),
    });

    if (res.ok) {
      setUsers(users =>
        users.map(u =>
          u._id === userId ? { ...u, role: "ADMIN" } : u
        )
      );
    } else {
      alert("Promotion failed");
    }

    setLoading(false);
  }

  return (
    <div className="border p-4 rounded">
      <h2 className="text-center text-xl font-semibold mb-4">Promote User to Admin</h2>

      <table className="w-full border">
        <thead>
          <tr className="border-b">
            <th className="text-left p-2">Username</th>
            <th className="text-left p-2">Email</th>
            <th className="text-left p-2">Role</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody>
          {users.map(user => (
            <tr key={user._id} className="border-b">
              <td className="p-2">{user.username}</td>
              <td className="p-2">{user.email}</td>
              <td className="p-2">{user.role}</td>
              <td className="p-2 text-center">
                {user.role === "ADMIN" ? (
                  <span className="text-gray-400">Already Admin</span>
                ) : (
                  <button
                    onClick={() => promote(user._id)}
                    disabled={loading}
                    className="px-3 py-1 bg-black text-white rounded"
                  >
                    Promote
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
