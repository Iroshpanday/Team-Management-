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
        border-b
        bg-white dark:bg-gray-900
        dark:border-gray-700
      "
    >
      {/* Left */}
      <h1 className="text-lg font-bold whitespace-nowrap">
        Team Dashboard
      </h1>

      {/* Center: Search */}
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
          border rounded px-3 py-2 w-full md:max-w-sm
          bg-white dark:bg-gray-800
          dark:border-gray-600
          outline-none placeholder:text-gray-900 dark:placeholder:text-gray-400
        "

      />

      {/* Right */}
      <div className="flex items-center gap-3">
        <Select
          value={sortBy}
          onValueChange={(v) => setSortBy(v as "name" | "email")}
        >
          <SelectTrigger className="w-32">
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
