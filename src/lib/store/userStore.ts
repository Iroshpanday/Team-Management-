import { create } from "zustand";
import { User } from "@/lib/schemas/userSchema";

type SortBy = "name" | "email";

type UserStore = {
  users: User[];
  selectedUser: User | null;

  searchTerm: string;
  sortBy: SortBy;

  addUserModalOpen: boolean;
  setAddUserModalOpen: (open: boolean) => void;

  setUsers: (users: User[]) => void;
  addUser: (user: User) => void;
  updateUser: (user: User) => void;
  deleteUser: (id: number) => void;
  selectUser: (user: User | null) => void;

  setSearchTerm: (value: string) => void;
  setSortBy: (value: SortBy) => void;
};

export const useUserStore = create<UserStore>((set) => ({
  users: [],
  selectedUser: null,
  searchTerm: "",
  sortBy: "name",
  addUserModalOpen: false,

  setAddUserModalOpen: (open) => set({ addUserModalOpen: open }),
  setUsers: (users) => set({ users }),

  addUser: (user) =>
    set((state) => ({ users: [...state.users, user] })),

  updateUser: (updatedUser) =>
    set((state) => ({
      users: state.users.map((u) =>
        u.id === updatedUser.id ? updatedUser : u
      ),
    })),

  deleteUser: (id) =>
    set((state) => ({
      users: state.users.filter((u) => u.id !== id),
    })),

  selectUser: (user) => set({ selectedUser: user }),

  setSearchTerm: (value) => set({ searchTerm: value }),
  setSortBy: (value) => set({ sortBy: value }),
}));
