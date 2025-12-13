"use client";

import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/store/userStore";

export default function AddUserButton() {
  const setAddUserModalOpen = useUserStore((s) => s.setAddUserModalOpen);

  return (
    <Button onClick={() => setAddUserModalOpen(true)}>
      Add User
    </Button>
  );
}
