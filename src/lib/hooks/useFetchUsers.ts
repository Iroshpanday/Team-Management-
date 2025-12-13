import { useEffect, useState, useCallback } from "react";
import { User } from "@/lib/schemas/userSchema";
import { useUserStore } from "@/lib/store/userStore";

type UseFetchUsersReturn = {
  loading: boolean;
  error: string | null;
  refetch: () => void;
};

export const useFetchUsers = (): UseFetchUsersReturn => {
  const setUsers = useUserStore((state) => state.setUsers);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch function wrapped in useCallback to fix useEffect dependency warning
  const fetchUsers = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/users");
      if (!res.ok) throw new Error("Failed to fetch users");

      // Type-safe API response
      const data = (await res.json()) as { success: boolean; data: User[] };
      setUsers(data.data);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Unknown error");
      }
    } finally {
      setLoading(false);
    }
  }, [setUsers]);

  // Automatically fetch users on mount
  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return {
    loading,
    error,
    refetch: fetchUsers,
  };
};
