import { create } from "zustand";
import { User } from "@/lib/schemas/userSchema";

type SortBy = "name" | "email";

type UserStore = {
  users: User[];
  selectedUser: User | null; // detail panel
  editUser: User | null; // edit modal

  searchTerm: string;
  sortBy: SortBy;

  addUserModalOpen: boolean;

  setAddUserModalOpen: (open: boolean) => void;
  setSelectedUser: (user: User | null) => void;
  setEditUser: (user: User | null) => void;

  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;

  setSearchTerm: (value: string) => void;
  setSortBy: (value: SortBy) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  selectedUser: null,
  editUser: null,
  searchTerm: "",
  sortBy: "name",
  addUserModalOpen: false,

  setAddUserModalOpen: (open) => set({ addUserModalOpen: open }),
  setSelectedUser: (user) => set({ selectedUser: user }),
  setEditUser: (user) => set({ editUser: user }),

  setUsers: (users) => set({ users }),
  addUser: (user) => set((state) => ({ users: [...state.users, user] })),
  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((u) => (u.id === updatedUser.id ? updatedUser : u)),
    })),
  deleteUser: (id) => set((state) => ({ users: state.users.filter((u) => u.id !== id) })),
  setSearchTerm: (value) => set({ searchTerm: value }),
  setSortBy: (value) => set({ sortBy: value }),
}));
