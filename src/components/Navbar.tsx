"use client";

import DarkModeToggle from "@/components/DarkModeToggle";
import { useUserStore } from "@/lib/store/userStore";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Navbar() {
  const searchTerm = useUserStore((s) => s.searchTerm);
  const setSearchTerm = useUserStore((s) => s.setSearchTerm);
  const sortBy = useUserStore((s) => s.sortBy);
  const setSortBy = useUserStore((s) => s.setSortBy);

  return (
    <header
      className="
        flex flex-col md:flex-row gap-3 md:gap-6
        md:items-center md:justify-between
        px-6 py-4
        border-b-2
        bg-gradient-to-r from-emerald-50 via-teal-50 to-cyan-50
        dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
        border-emerald-200 dark:border-teal-800
        shadow-sm
      "
    >
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-400 dark:bg-teal-400 rounded-full border-2 border-white dark:border-gray-900"></div>
        </div>
        <h1 className="text-xl font-bold whitespace-nowrap bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
          Team Dashboard
        </h1>
      </div>

      {/* Center: Search */}
      <div className="relative w-full md:max-w-sm">
        <input
          type="text"
          placeholder="Search users..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="
            w-full px-4 py-2.5 pl-10
            border-2 rounded-lg
            bg-white dark:bg-gray-800
            border-emerald-200 dark:border-gray-700
            focus:border-emerald-400 dark:focus:border-teal-500
            focus:ring-2 focus:ring-emerald-200 dark:focus:ring-teal-900
            outline-none
            placeholder:text-gray-400 dark:placeholder:text-gray-500
            transition-all duration-200
            shadow-sm
          "
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-emerald-500 dark:text-teal-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        SortBy
        <Select
          value={sortBy}
          onValueChange={(v) => setSortBy(v as "name" | "email")}
        >
          <SelectTrigger className="w-32 border-2 border-emerald-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-emerald-300 dark:hover:border-teal-600 transition-colors">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="name">Name</SelectItem>
            <SelectItem value="email">Email</SelectItem>
          </SelectContent>
        </Select>

        <DarkModeToggle />
      </div>
    </header>
  );
}