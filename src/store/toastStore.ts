import { create } from "zustand";

export type ToastVariant = "success" | "info" | "warning" | "danger";

export interface ToastMessage {
  description?: string;
  id: string;
  title: string;
  variant: ToastVariant;
}

interface ToastState {
  dismissToast: (id: string) => void;
  showToast: (toast: Omit<ToastMessage, "id">) => void;
  toasts: ToastMessage[];
}

export const useToastStore = create<ToastState>((set) => ({
  toasts: [],

  showToast: (toast) => {
    const id = `toast_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;

    set((state) => ({
      toasts: [{ ...toast, id }, ...state.toasts].slice(0, 4),
    }));
  },

  dismissToast: (id) => {
    set((state) => ({
      toasts: state.toasts.filter((toast) => toast.id !== id),
    }));
  },
}));
