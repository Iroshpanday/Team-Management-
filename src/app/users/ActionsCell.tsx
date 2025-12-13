"use client";

import { User } from "@/lib/schemas/userSchema";
import { Button } from "@/components/ui/button";
import { useUserStore } from "@/lib/store/userStore";

interface Props {
  user: User;
}

export default function ActionsCell({ user }: Props) {
  const deleteUser = useUserStore((s) => s.deleteUser);
  const selectUser = useUserStore((s) => s.selectUser);

  return (
    <div className="flex gap-2">
      <Button
        size="sm"
        variant="outline"
        onClick={(e) => {
          e.stopPropagation();
          selectUser(user);
        }}
      >
        Edit
      </Button>

      <Button
        size="sm"
        variant="destructive"
        onClick={(e) => {
          e.stopPropagation();
          if (confirm("Delete this user?")) {
            deleteUser(user.id);
          }
        }}
      >
        Delete
      </Button>
    </div>
  );
}
