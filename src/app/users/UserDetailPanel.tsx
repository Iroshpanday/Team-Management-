"use client";

import { useUserStore } from "@/lib/store/userStore";
import { Button } from "@/components/ui/button";

export default function UserDetailPanel() {
  const selectedUser = useUserStore((state) => state.selectedUser);
  const setSelectedUser = useUserStore((state) => state.setSelectedUser);

  if (!selectedUser) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-linear-to-br from-white via-emerald-50/30 to-teal-50/30 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-2xl w-full max-w-md relative border-2 border-emerald-100 dark:border-teal-900 animate-in zoom-in-95 duration-200">
        
        {/* Close button */}
        <button
          onClick={() => setSelectedUser(null)}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-red-100 dark:hover:bg-red-900/30 flex items-center justify-center transition-all duration-200 group"
        >
          <svg
            className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-red-600 dark:group-hover:text-red-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Avatar */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-20 h-20 rounded-full bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg ring-4 ring-emerald-100 dark:ring-teal-900/50">
            <span className="text-3xl font-bold text-white">
              {selectedUser.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h2 className="text-2xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-400 bg-clip-text text-transparent">
              {selectedUser.name}
            </h2>
            <p className="text-sm text-gray-500 dark:text-gray-400">Team Member</p>
          </div>
        </div>

        {/* Details */}
        <div className="space-y-4">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 border border-emerald-100 dark:border-gray-700">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Email</p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100 break-all">{selectedUser.email}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 border border-emerald-100 dark:border-gray-700">
            <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
              <svg
                className="w-5 h-5 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Company</p>
              <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{selectedUser.company}</p>
            </div>
          </div>

          {selectedUser.phone && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 border border-emerald-100 dark:border-gray-700">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Phone</p>
                <p className="text-sm font-medium text-gray-900 dark:text-gray-100">{selectedUser.phone}</p>
              </div>
            </div>
          )}

          {selectedUser.website && (
            <div className="flex items-start gap-3 p-3 rounded-lg bg-white/60 dark:bg-gray-800/60 border border-emerald-100 dark:border-gray-700">
              <div className="w-10 h-10 rounded-lg bg-linear-to-br from-emerald-500 to-teal-600 flex items-center justify-center shrink-0">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">Website</p>
                <a 
                  href={`https://${selectedUser.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-emerald-600 dark:text-teal-400 hover:underline break-all"
                >
                  {selectedUser.website}
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Action Button */}
        <Button
          onClick={() => setSelectedUser(null)}
          className="mt-6 w-full bg-linear-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
        >
          Close
        </Button>
      </div>
    </div>
  );
}