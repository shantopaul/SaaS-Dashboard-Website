import { Navigate, Outlet, useLocation } from "react-router-dom";

const AUTH_GUARD_ENABLED = false;

export function ProtectedRoute() {
  const location = useLocation();
  const isAuthenticated = true;

  if (AUTH_GUARD_ENABLED && !isAuthenticated) {
    return <Navigate replace state={{ from: location }} to="/login" />;
  }

  return <Outlet />;
}
