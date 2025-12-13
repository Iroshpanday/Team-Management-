"use client";

import { useEffect, useMemo } from "react";
import { User } from "@/lib/schemas/userSchema";
import { useUserStore } from "@/lib/store/userStore";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";

interface Props {
  initialUsers: User[];
}

export default function UserListClient({ initialUsers }: Props) {
  const setUsers = useUserStore((s) => s.setUsers);
  const users = useUserStore((s) => s.users);
  const setSelectedUser = useUserStore((s) => s.setSelectedUser);
  const searchTerm = useUserStore((s) => s.searchTerm || "");
  const sortBy = useUserStore((s) => s.sortBy || "name");

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers]);

  const filteredUsers = useMemo(() => {
    const filtered = users.filter(
      (u) =>
        u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        u.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [users, searchTerm, sortBy]);

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-emerald-50/20 to-teal-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 p-4 sm:p-6 lg:p-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        <div className="bg-linear-to-br from-emerald-500 to-teal-600 rounded-xl p-6 shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-emerald-100 text-sm font-medium mb-1">Total Users</p>
              <p className="text-3xl font-bold">{users.length}</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-teal-500 to-cyan-600 rounded-xl p-6 shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-teal-100 text-sm font-medium mb-1">Filtered Results</p>
              <p className="text-3xl font-bold">{filteredUsers.length}</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="bg-linear-to-br from-cyan-500 to-emerald-600 rounded-xl p-6 shadow-lg text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-cyan-100 text-sm font-medium mb-1">Active Search</p>
              <p className="text-3xl font-bold">{searchTerm ? "Yes" : "No"}</p>
            </div>
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Main Table Card */}
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-emerald-100 dark:border-teal-900 overflow-hidden backdrop-blur-sm">
        {/* Table Header */}
        <div className="bg-linear-to-r from-emerald-50 to-teal-50 dark:from-gray-800 dark:to-gray-800 border-b-2 border-emerald-100 dark:border-teal-900 px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-900 dark:text-gray-100">User Directory</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Manage and view all team members</p>
            </div>
          </div>
        </div>

        {/* Table Content */}
        <div className="overflow-x-auto">
          <DataTable
            columns={columns}
            data={filteredUsers}
            onRowClick={(user) => setSelectedUser(user)}
          />
        </div>

        {/* Empty State */}
        {filteredUsers.length === 0 && (
          <div className="py-20 text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 mb-4">
              <svg className="w-10 h-10 text-emerald-600 dark:text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
              </svg>
            </div>
            <p className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">No users found</p>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or sorting criteria</p>
          </div>
        )}
      </div>
    </div>
  );
}