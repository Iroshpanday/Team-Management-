"use client";

import { useEffect, useMemo } from "react";
import { User } from "@/lib/schemas/userSchema";
import { useUserStore } from "@/lib/store/userStore";
import { DataTable } from "@/components/DataTable";
import { columns } from "./columns";

interface Props {
  initialUsers: User[];
}

export default function UserListClient({ initialUsers }: Props) {
  const setUsers = useUserStore((s) => s.setUsers);
  const users = useUserStore((s) => s.users);
  const selectUser = useUserStore((s) => s.selectUser);
  const searchTerm = useUserStore((s) => s.searchTerm);
  const sortBy = useUserStore((s) => s.sortBy);

  useEffect(() => {
    setUsers(initialUsers);
  }, [initialUsers, setUsers]);

  const filteredUsers = useMemo(() => {
    return users
      .filter(
        (u) =>
          u.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          u.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }, [users, searchTerm, sortBy]);

  return (
    <div className="p-4">
      <DataTable
        columns={columns}
        data={filteredUsers}
        onRowClick={selectUser}
      />
    </div>
  );
}
