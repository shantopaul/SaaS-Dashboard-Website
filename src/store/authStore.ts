import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User } from "@/types";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, name?: string) => void;
  register: (email: string, name: string) => void;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
}

// Mock user data to simulate a real backend response
const generateMockUser = (email: string, name: string = "Jane Doe"): User => ({
  id: `usr_${Math.random().toString(36).substring(2, 9)}`,
  name,
  email,
  role: "Admin",
  company: "Acme Corp",
  avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(name)}`,
});

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: (email, name) => {
        set({
          user: generateMockUser(email, name || "Jane Doe"),
          isAuthenticated: true,
        });
      },

      register: (email, name) => {
        set({
          user: generateMockUser(email, name),
          isAuthenticated: true,
        });
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
        });
      },

      updateUser: (data) => {
        set((state) => ({
          user: state.user ? { ...state.user, ...data } : null,
        }));
      },
    }),
    {
      name: "flowpilot-auth-storage",
    },
  ),
);
