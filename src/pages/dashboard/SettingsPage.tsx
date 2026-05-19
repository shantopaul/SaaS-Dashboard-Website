import { useState } from "react";
import {
  Bell,
  Building2,
  Globe,
  Lock,
  Moon,
  Shield,
  Sun,
  SunMoon,
  Timer,
} from "lucide-react";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { Select } from "@/components/common/Select";
import { Toggle } from "@/components/common/Toggle";
import { useToastStore } from "@/store/toastStore";
import { useThemeStore } from "@/store/themeStore";
import { cn } from "@/utils";

// ─── Types ───────────────────────────────────────────────────────────────────

interface NotificationPrefs {
  emailNotifications: boolean;
  smsNotifications: boolean;
  productUpdates: boolean;
  billingAlerts: boolean;
  weeklyReports: boolean;
}

interface SecurityPrefs {
  twoFactorAuth: boolean;
  loginAlerts: boolean;
}

// ─── Section wrapper ─────────────────────────────────────────────────────────

function SettingsSection({
  title,
  description,
  icon: Icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card shadow-sm">
      <div className="flex items-start gap-4 border-b border-border px-6 py-5">
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Icon className="size-5" aria-hidden />
        </span>
        <div>
          <h2 className="text-base font-semibold text-foreground">{title}</h2>
          <p className="mt-0.5 text-body-sm text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
      <div className="px-6 py-6">{children}</div>
    </section>
  );
}

// ─── Toggle row ──────────────────────────────────────────────────────────────

function ToggleRow({
  label,
  description,
  checked,
  onCheckedChange,
}: {
  label: string;
  description: string;
  checked: boolean;
  onCheckedChange: (v: boolean) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-6 py-3">
      <div className="min-w-0">
        <p className="text-body-sm font-medium text-foreground">{label}</p>
        <p className="text-caption text-muted-foreground">{description}</p>
      </div>
      <Toggle
        checked={checked}
        onCheckedChange={onCheckedChange}
        aria-label={label}
      />
    </div>
  );
}

// ─── Theme option button ──────────────────────────────────────────────────────

type ThemeValue = "light" | "dark" | "system";

const themeOptions: {
  value: ThemeValue;
  label: string;
  icon: React.ElementType;
}[] = [
  { value: "light", label: "Light", icon: Sun },
  { value: "dark", label: "Dark", icon: Moon },
  { value: "system", label: "System", icon: SunMoon },
];

// ─── Page ────────────────────────────────────────────────────────────────────

export function SettingsPage() {
  const showToast = useToastStore((s) => s.showToast);
  const { theme, setTheme } = useThemeStore();

  // ── General settings state ──
  const [general, setGeneral] = useState({
    companyName: "FlowPilot Inc.",
    workspaceName: "Marketing Team",
    contactEmail: "admin@flowpilot.dev",
    timezone: "UTC",
    language: "en",
  });

  // ── Notification prefs state ──
  const [notifications, setNotifications] = useState<NotificationPrefs>({
    emailNotifications: true,
    smsNotifications: false,
    productUpdates: true,
    billingAlerts: true,
    weeklyReports: false,
  });

  const setNotif = (key: keyof NotificationPrefs) => (value: boolean) =>
    setNotifications((prev) => ({ ...prev, [key]: value }));

  // ── Security state ──
  const [security, setSecurity] = useState<SecurityPrefs>({
    twoFactorAuth: false,
    loginAlerts: true,
  });
  const [sessionTimeout, setSessionTimeout] = useState("30");
  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [passwordErrors, setPasswordErrors] = useState({
    next: "",
    confirm: "",
  });

  const setSec = (key: keyof SecurityPrefs) => (value: boolean) =>
    setSecurity((prev) => ({ ...prev, [key]: value }));

  // ── Save handlers ──
  const handleSaveGeneral = () => {
    showToast({
      title: "General settings saved",
      description: "Your workspace preferences have been updated.",
      variant: "success",
    });
  };

  const handleSaveNotifications = () => {
    showToast({
      title: "Notification preferences saved",
      description: "You will receive alerts based on your new settings.",
      variant: "success",
    });
  };

  const handleSavePassword = () => {
    const errs = { next: "", confirm: "" };
    if (passwords.next.length > 0 && passwords.next.length < 8) {
      errs.next = "Password must be at least 8 characters.";
    }
    if (passwords.next !== passwords.confirm) {
      errs.confirm = "Passwords do not match.";
    }
    setPasswordErrors(errs);
    if (errs.next || errs.confirm) return;

    showToast({
      title: "Password updated",
      description: "Your password has been changed successfully.",
      variant: "success",
    });
    setPasswords({ current: "", next: "", confirm: "" });
  };

  const handleSaveSecurity = () => {
    showToast({
      title: "Security settings saved",
      description: "Your security preferences have been updated.",
      variant: "success",
    });
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Page header */}
      <section>
        <p className="mb-1 text-body-sm font-medium text-muted-foreground">
          Manage your workspace, notifications, security, and appearance.
        </p>
        <h1 className="text-heading-lg">Settings</h1>
      </section>

      {/* ── 1. General ── */}
      <SettingsSection
        description="Configure your company and workspace details."
        icon={Building2}
        title="General"
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Company name"
            placeholder="Your company"
            value={general.companyName}
            onChange={(e) =>
              setGeneral((p) => ({ ...p, companyName: e.target.value }))
            }
          />
          <Input
            label="Workspace name"
            placeholder="e.g. Marketing Team"
            value={general.workspaceName}
            onChange={(e) =>
              setGeneral((p) => ({ ...p, workspaceName: e.target.value }))
            }
          />
          <Input
            label="Contact email"
            placeholder="billing@yourcompany.com"
            type="email"
            value={general.contactEmail}
            onChange={(e) =>
              setGeneral((p) => ({ ...p, contactEmail: e.target.value }))
            }
          />
          <Select
            label="Timezone"
            options={[
              { label: "UTC (Coordinated Universal Time)", value: "UTC" },
              { label: "US/Eastern (UTC−5)", value: "US/Eastern" },
              { label: "US/Pacific (UTC−8)", value: "US/Pacific" },
              { label: "Europe/London (UTC+0)", value: "Europe/London" },
              { label: "Europe/Berlin (UTC+1)", value: "Europe/Berlin" },
              { label: "Asia/Dhaka (UTC+6)", value: "Asia/Dhaka" },
              { label: "Asia/Tokyo (UTC+9)", value: "Asia/Tokyo" },
            ]}
            value={general.timezone}
            onChange={(e) =>
              setGeneral((p) => ({ ...p, timezone: e.target.value }))
            }
          />
          <Select
            label="Language"
            options={[
              { label: "English", value: "en" },
              { label: "Spanish", value: "es" },
              { label: "French", value: "fr" },
              { label: "German", value: "de" },
              { label: "Portuguese", value: "pt" },
              { label: "Japanese", value: "ja" },
            ]}
            value={general.language}
            onChange={(e) =>
              setGeneral((p) => ({ ...p, language: e.target.value }))
            }
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSaveGeneral}>Save general settings</Button>
        </div>
      </SettingsSection>

      {/* ── 2. Notifications ── */}
      <SettingsSection
        description="Choose which alerts and updates you want to receive."
        icon={Bell}
        title="Notification Preferences"
      >
        <div className="divide-y divide-border">
          <ToggleRow
            checked={notifications.emailNotifications}
            description="Get important activity summaries and alerts sent to your inbox."
            label="Email notifications"
            onCheckedChange={setNotif("emailNotifications")}
          />
          <ToggleRow
            checked={notifications.smsNotifications}
            description="Receive critical alerts via SMS to your registered number."
            label="SMS notifications"
            onCheckedChange={setNotif("smsNotifications")}
          />
          <ToggleRow
            checked={notifications.productUpdates}
            description="Stay informed about new features, improvements, and announcements."
            label="Product updates"
            onCheckedChange={setNotif("productUpdates")}
          />
          <ToggleRow
            checked={notifications.billingAlerts}
            description="Get notified about upcoming renewals, payment failures, and invoices."
            label="Billing alerts"
            onCheckedChange={setNotif("billingAlerts")}
          />
          <ToggleRow
            checked={notifications.weeklyReports}
            description="Receive a weekly digest of your team's key metrics."
            label="Weekly reports"
            onCheckedChange={setNotif("weeklyReports")}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSaveNotifications}>
            Save notification preferences
          </Button>
        </div>
      </SettingsSection>

      {/* ── 3. Security ── */}
      <SettingsSection
        description="Manage authentication, login alerts, and password settings."
        icon={Shield}
        title="Security"
      >
        <div className="divide-y divide-border">
          <ToggleRow
            checked={security.twoFactorAuth}
            description="Add an extra layer of protection using an authenticator app."
            label="Two-factor authentication"
            onCheckedChange={setSec("twoFactorAuth")}
          />
          <ToggleRow
            checked={security.loginAlerts}
            description="Receive an email whenever your account is accessed from a new device."
            label="Login alerts"
            onCheckedChange={setSec("loginAlerts")}
          />
        </div>

        {/* Session timeout */}
        <div className="mt-5 max-w-xs">
          <Select
            label="Session timeout"
            options={[
              { label: "15 minutes", value: "15" },
              { label: "30 minutes", value: "30" },
              { label: "1 hour", value: "60" },
              { label: "4 hours", value: "240" },
              { label: "Never", value: "0" },
            ]}
            value={sessionTimeout}
            onChange={(e) => setSessionTimeout(e.target.value)}
          />
          <p className="mt-1.5 flex items-center gap-1.5 text-caption text-muted-foreground">
            <Timer className="size-3.5" aria-hidden />
            Automatically logs you out after inactivity.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={handleSaveSecurity}>Save security settings</Button>
        </div>

        {/* Change password sub-section */}
        <div className="mt-8 border-t border-border pt-6">
          <div className="mb-5 flex items-center gap-2">
            <Lock className="size-4 text-muted-foreground" aria-hidden />
            <h3 className="text-sm font-semibold text-foreground">
              Change password
            </h3>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <Input
              label="Current password"
              placeholder="••••••••"
              type="password"
              value={passwords.current}
              onChange={(e) =>
                setPasswords((p) => ({ ...p, current: e.target.value }))
              }
            />
            <Input
              error={passwordErrors.next}
              label="New password"
              placeholder="••••••••"
              type="password"
              value={passwords.next}
              onChange={(e) =>
                setPasswords((p) => ({ ...p, next: e.target.value }))
              }
            />
            <Input
              error={passwordErrors.confirm}
              label="Confirm new password"
              placeholder="••••••••"
              type="password"
              value={passwords.confirm}
              onChange={(e) =>
                setPasswords((p) => ({ ...p, confirm: e.target.value }))
              }
            />
          </div>
          <div className="mt-4 flex justify-end">
            <Button variant="outline" onClick={handleSavePassword}>
              Update password
            </Button>
          </div>
        </div>
      </SettingsSection>

      {/* ── 4. Theme ── */}
      <SettingsSection
        description="Choose how FlowPilot looks for you. The change applies immediately."
        icon={Globe}
        title="Appearance"
      >
        <div className="flex flex-wrap gap-3">
          {themeOptions.map(({ value, label, icon: Icon }) => {
            const isActive = theme === value;
            return (
              <button
                key={value}
                aria-pressed={isActive}
                className={cn(
                  "focus-ring flex flex-1 cursor-pointer flex-col items-center gap-2 rounded-xl border-2 px-6 py-4 text-center transition-all",
                  isActive
                    ? "border-primary bg-primary/5 text-primary"
                    : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:bg-muted/40",
                )}
                type="button"
                onClick={() => setTheme(value)}
              >
                <Icon className="size-6" aria-hidden />
                <span className="text-sm font-semibold">{label}</span>
                {isActive && (
                  <span className="text-caption font-medium text-primary">
                    Active
                  </span>
                )}
              </button>
            );
          })}
        </div>
        <p className="mt-3 text-caption text-muted-foreground">
          "System" follows your OS dark/light preference.
        </p>
      </SettingsSection>
    </div>
  );
}
