"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useUserStore } from "@/lib/store/userStore";
import UserForm from "./AddUserForm";

export default function AddUserDialog() {
  const addUserModalOpen = useUserStore((s) => s.addUserModalOpen);
  const setAddUserModalOpen = useUserStore((s) => s.setAddUserModalOpen);

  return (
    <Dialog open={addUserModalOpen} onOpenChange={setAddUserModalOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add User</DialogTitle>
        </DialogHeader>

        <UserForm onClose={() => setAddUserModalOpen(false)} />
      </DialogContent>
    </Dialog>
  );
}
