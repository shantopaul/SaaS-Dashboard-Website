import { create } from "zustand";
import type { User } from "@/types";
import {
  auth,
  googleProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  onAuthStateChanged,
} from "@/config/firebase";
import type { User as FirebaseUser } from "firebase/auth";

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password?: string) => Promise<void>;
  register: (email: string, name: string, password?: string) => Promise<void>;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
  updateUser: (data: Partial<User>) => Promise<void>;
  initializeAuthListener: () => () => void;
}

// Convert a Firebase User into FlowPilot's custom User format
const mapFirebaseUser = (firebaseUser: FirebaseUser): User => ({
  id: firebaseUser.uid,
  name:
    firebaseUser.displayName || firebaseUser.email?.split("@")[0] || "Jane Doe",
  email: firebaseUser.email || "",
  role: "Admin",
  company: "Acme Corp",
  avatar:
    firebaseUser.photoURL ||
    `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(
      firebaseUser.displayName || firebaseUser.email || "Jane Doe",
    )}`,
});

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: true, // Default to true while checking persistent session

  login: async (email, password = "") => {
    set({ isLoading: true });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user) {
        set({
          user: mapFirebaseUser(userCredential.user),
          isAuthenticated: true,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (email, name, password = "") => {
    set({ isLoading: true });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      if (userCredential.user) {
        // Update Firebase profile display name
        await updateProfile(userCredential.user, { displayName: name });
        // Set state with updated credentials
        set({
          user: mapFirebaseUser({
            ...userCredential.user,
            displayName: name,
          } as unknown as FirebaseUser),
          isAuthenticated: true,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },

  loginWithGoogle: async () => {
    set({ isLoading: true });
    try {
      const userCredential = await signInWithPopup(auth, googleProvider);
      if (userCredential.user) {
        set({
          user: mapFirebaseUser(userCredential.user),
          isAuthenticated: true,
        });
      }
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await signOut(auth);
      set({
        user: null,
        isAuthenticated: false,
      });
    } finally {
      set({ isLoading: false });
    }
  },

  updateUser: async (data) => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      if (data.name) {
        await updateProfile(currentUser, { displayName: data.name });
      }
      if (data.avatar) {
        await updateProfile(currentUser, { photoURL: data.avatar });
      }
    }
    set((state) => ({
      user: state.user ? { ...state.user, ...data } : null,
    }));
  },

  initializeAuthListener: () => {
    // Listen to Firebase authentication status changes
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        set({
          user: mapFirebaseUser(firebaseUser),
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    });

    return unsubscribe;
  },
}));
