"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useUserStore } from "@/lib/store/userStore";
import UserForm from "./AddUserForm";

export default function EditUserDialog() {
  const editUser = useUserStore((s) => s.editUser);
  const setEditUser = useUserStore((s) => s.setEditUser);

  return (
    <Dialog open={!!editUser} onOpenChange={(open) => !open && setEditUser(null)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
        </DialogHeader>

        {editUser && <UserForm user={editUser} onClose={() => setEditUser(null)} />}
      </DialogContent>
    </Dialog>
  );
}
