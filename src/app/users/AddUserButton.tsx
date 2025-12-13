"use client";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/store/userStore";

export default function AddUserButton() {
  const setAddUserModalOpen = useUserStore((s) => s.setAddUserModalOpen);

  return (
    <Button 
      onClick={() => setAddUserModalOpen(true)}
      className="
        group relative
        bg-linear-to-r from-emerald-600 to-teal-600 
        hover:from-emerald-700 hover:to-teal-700
        text-white font-semibold
        px-6 py-3
        rounded-xl
        shadow-lg hover:shadow-xl
        transition-all duration-300
        border-2 border-emerald-500/20
        overflow-hidden
      "
    >
      {/* Animated background shine effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Button content */}
      <span className="relative flex items-center gap-2">
        <svg 
          className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2.5} 
            d="M12 4v16m8-8H4" 
          />
        </svg>
        <span>Add User</span>
      </span>
      
      {/* Pulse ring on hover */}
      <div className="absolute inset-0 rounded-xl ring-2 ring-emerald-400/0 group-hover:ring-emerald-400/50 transition-all duration-300 group-hover:scale-105"></div>
    </Button>
  );
}