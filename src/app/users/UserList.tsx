import UserListClient from "./UserListClient";
import { User } from "@/lib/schemas/userSchema";

// Server Component
export default async function UserList() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, { cache: "no-store" });
  const data = (await res.json()) as { success: boolean; data: User[] };
  const users = data.data;

  return <UserListClient initialUsers={users} />;
}
