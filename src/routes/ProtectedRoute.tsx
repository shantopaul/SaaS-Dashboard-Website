import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthStore } from "@/store";

export function ProtectedRoute() {
  const location = useLocation();
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  return <Outlet />;
}
