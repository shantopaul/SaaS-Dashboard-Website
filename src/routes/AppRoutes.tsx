import { Navigate, Route, Routes } from "react-router-dom";
import {
  AnalyticsPage,
  BillingPage,
  DashboardPage,
  FeaturesPage,
  LandingPage,
  LoginPage,
  NotFoundPage,
  PricingPage,
  ProfilePage,
  RegisterPage,
  SettingsPage,
} from "@/pages";
import { AuthLayout, DashboardLayout, PublicLayout } from "@/components";
import { ProtectedRoute } from "./ProtectedRoute";

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route element={<LandingPage />} path="/" />
        <Route element={<FeaturesPage />} path="/features" />
        <Route element={<PricingPage />} path="/pricing" />
        <Route element={<NotFoundPage />} path="/not-found" />
      </Route>

      <Route element={<AuthLayout />}>
        <Route element={<LoginPage />} path="/login" />
        <Route element={<RegisterPage />} path="/register" />
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route element={<DashboardPage />} path="/dashboard" />
          <Route element={<AnalyticsPage />} path="/dashboard/analytics" />
          <Route element={<BillingPage />} path="/dashboard/billing" />
          <Route element={<SettingsPage />} path="/dashboard/settings" />
          <Route element={<ProfilePage />} path="/dashboard/profile" />
        </Route>
      </Route>

      <Route element={<Navigate replace to="/not-found" />} path="*" />
    </Routes>
  );
}
