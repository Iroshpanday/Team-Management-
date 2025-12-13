"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useUserStore } from "@/lib/store/userStore";
import UserForm from "./AddUserForm";

export default function EditUserDialog() {
  const selectedUser = useUserStore((s) => s.selectedUser);
  const selectUser = useUserStore((s) => s.selectUser);

  return (
    <Dialog
      open={!!selectedUser}
      onOpenChange={(open) => {
        if (!open) selectUser(null);
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        {selectedUser && (
          <UserForm user={selectedUser} onClose={() => selectUser(null)} />
        )}
      </DialogContent>
    </Dialog>
  );
}
