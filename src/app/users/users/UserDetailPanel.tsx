"use client";

import { useUserStore } from "@/lib/store/userStore";
import { Button } from "@/components/ui/button";

export default function UserDetailPanel() {
  const selectedUser = useUserStore((state) => state.selectedUser);
  const selectUser = useUserStore((state) => state.selectUser);

  if (!selectedUser) return null;

  return (
    <div className="fixed inset-0 bg-black/30 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded shadow-lg w-96 relative">
        <h2 className="text-xl font-bold mb-2">{selectedUser.name}</h2>
        <p className="mb-1">
          <strong>Email:</strong> {selectedUser.email}
        </p>
        <p className="mb-1">
          <strong>Company:</strong> {selectedUser.company}
        </p>
        {selectedUser.phone && (
          <p className="mb-1">
            <strong>Phone:</strong> {selectedUser.phone}
          </p>
        )}
        {selectedUser.website && (
          <p className="mb-1">
            <strong>Website:</strong> {selectedUser.website}
          </p>
        )}

        <Button
          variant="secondary"
          className="mt-4"
          onClick={() => selectUser(null)}
        >
          Close
        </Button>
      </div>
    </div>
  );
}
