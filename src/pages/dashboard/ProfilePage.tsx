import { useState } from "react";
import {
  AtSign,
  Briefcase,
  Building2,
  CalendarDays,
  Camera,
  KeyRound,
  Lock,
  MapPin,
  Phone,
  User,
  UserCircle2,
} from "lucide-react";
import { Badge } from "@/components/common/Badge";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { FadeUpItem, PageMotion } from "@/components/common/PageMotion";
import { Textarea } from "@/components/common/Textarea";
import { useAuthStore } from "@/store/authStore";
import { useToastStore } from "@/store/toastStore";
import { currentUser } from "@/data";

// ─── Avatar section ──────────────────────────────────────────────────────────

function AvatarSection({
  name,
  role,
  email,
}: {
  name: string;
  role: string;
  email: string;
}) {
  const showToast = useToastStore((s) => s.showToast);

  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const handleAvatarChange = () => {
    showToast({
      title: "Avatar upload",
      description:
        "Photo upload requires a live storage integration. This is UI-only.",
      variant: "info",
    });
  };

  return (
    <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-start sm:gap-6">
      {/* Avatar circle */}
      <div className="relative shrink-0">
        <div className="flex size-24 items-center justify-center rounded-full bg-primary/10 text-2xl font-bold text-primary ring-4 ring-primary/20">
          {initials}
        </div>
        <button
          aria-label="Change profile photo"
          className="focus-ring absolute -bottom-1 -right-1 flex size-8 items-center justify-center rounded-full border-2 border-card bg-muted text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          type="button"
          onClick={handleAvatarChange}
        >
          <Camera className="size-3.5" aria-hidden />
        </button>
      </div>

      {/* Name / role / email */}
      <div className="text-center sm:text-left">
        <h2 className="text-lg font-bold text-foreground">{name}</h2>
        <div className="mt-1 flex flex-wrap items-center justify-center gap-2 sm:justify-start">
          <Badge variant="default">{role}</Badge>
        </div>
        <p className="mt-1.5 flex items-center justify-center gap-1.5 text-body-sm text-muted-foreground sm:justify-start">
          <AtSign className="size-3.5 shrink-0" aria-hidden />
          {email}
        </p>
      </div>
    </div>
  );
}

// ─── Account detail row ───────────────────────────────────────────────────────

function DetailRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-3 py-3">
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground">
        <Icon className="size-4" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="text-caption font-semibold uppercase tracking-wider text-muted-foreground">
          {label}
        </p>
        <p className="mt-0.5 text-body-sm font-medium text-foreground">
          {value || "—"}
        </p>
      </div>
    </div>
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────────────

function ProfileSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-xl border border-border bg-card shadow-sm">
      <div className="border-b border-border px-6 py-4">
        <h2 className="text-base font-semibold text-foreground">{title}</h2>
      </div>
      <div className="px-6 py-6">{children}</div>
    </section>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export function ProfilePage() {
  const authUser = useAuthStore((s) => s.user);
  const updateUser = useAuthStore((s) => s.updateUser);
  const showToast = useToastStore((s) => s.showToast);

  // Merge auth user with static seed data so the page always has rich content
  const seed = { ...currentUser, ...(authUser ?? {}) };

  // ── Personal info state ──
  const [info, setInfo] = useState({
    name: seed.name,
    email: seed.email,
    role: seed.role,
    phone: seed.phone ?? "",
    location: seed.location ?? "",
    company: seed.company,
    bio: seed.bio ?? "",
  });

  // ── Password state ──
  const [passwords, setPasswords] = useState({
    current: "",
    next: "",
    confirm: "",
  });
  const [passwordErrors, setPasswordErrors] = useState({
    next: "",
    confirm: "",
  });

  const [isSavingInfo, setIsSavingInfo] = useState(false);
  const [isSavingPassword, setIsSavingPassword] = useState(false);

  // ── Handlers ──
  const handleUpdateProfile = async () => {
    setIsSavingInfo(true);
    await new Promise((r) => setTimeout(r, 600));
    updateUser({
      name: info.name,
      email: info.email,
      role: info.role,
      phone: info.phone,
      location: info.location,
      company: info.company,
      bio: info.bio,
    });
    setIsSavingInfo(false);
    showToast({
      title: "Profile updated",
      description: "Your personal information has been saved successfully.",
      variant: "success",
    });
  };

  const handleUpdatePassword = async () => {
    const errs = { next: "", confirm: "" };
    if (!passwords.current) {
      errs.next = "Current password is required.";
    } else if (passwords.next.length > 0 && passwords.next.length < 8) {
      errs.next = "New password must be at least 8 characters.";
    }
    if (passwords.next !== passwords.confirm) {
      errs.confirm = "Passwords do not match.";
    }
    setPasswordErrors(errs);
    if (errs.next || errs.confirm) return;

    setIsSavingPassword(true);
    await new Promise((r) => setTimeout(r, 600));
    setIsSavingPassword(false);
    setPasswords({ current: "", next: "", confirm: "" });
    showToast({
      title: "Password updated",
      description: "Your password has been changed successfully.",
      variant: "success",
    });
  };

  // Account member since (static for demo)
  const memberSince = "May 2025";

  return (
    <PageMotion>
      {/* Page header */}
      <FadeUpItem>
        <section>
          <p className="mb-1 text-body-sm font-medium text-muted-foreground">
            Manage your personal information, account details, and security.
          </p>
          <h1 className="text-heading-lg">Profile</h1>
        </section>
      </FadeUpItem>

      {/* ── Avatar + quick details card ── */}
      <FadeUpItem>
        <section className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <AvatarSection email={info.email} name={info.name} role={info.role} />
        </section>
      </FadeUpItem>

      {/* ── Personal information form ── */}
      <ProfileSection title="Personal Information">
        <div className="grid gap-5 sm:grid-cols-2">
          <Input
            label="Full name"
            leftElement={<User className="size-4" />}
            placeholder="Your full name"
            value={info.name}
            onChange={(e) => setInfo((p) => ({ ...p, name: e.target.value }))}
          />
          <Input
            label="Email address"
            leftElement={<AtSign className="size-4" />}
            placeholder="you@company.com"
            type="email"
            value={info.email}
            onChange={(e) => setInfo((p) => ({ ...p, email: e.target.value }))}
          />
          <Input
            label="Role"
            leftElement={<Briefcase className="size-4" />}
            placeholder="e.g. Workspace Owner"
            value={info.role}
            onChange={(e) => setInfo((p) => ({ ...p, role: e.target.value }))}
          />
          <Input
            label="Phone number"
            leftElement={<Phone className="size-4" />}
            placeholder="+1 (555) 000-0000"
            type="tel"
            value={info.phone}
            onChange={(e) => setInfo((p) => ({ ...p, phone: e.target.value }))}
          />
          <Input
            label="Company"
            leftElement={<Building2 className="size-4" />}
            placeholder="Your company name"
            value={info.company}
            onChange={(e) =>
              setInfo((p) => ({ ...p, company: e.target.value }))
            }
          />
          <Input
            label="Location"
            leftElement={<MapPin className="size-4" />}
            placeholder="City, Country"
            value={info.location}
            onChange={(e) =>
              setInfo((p) => ({ ...p, location: e.target.value }))
            }
          />
          <div className="sm:col-span-2">
            <Textarea
              helperText="A short bio helps teammates understand your background."
              label="Bio"
              placeholder="Tell us a bit about yourself..."
              rows={3}
              value={info.bio}
              onChange={(e) => setInfo((p) => ({ ...p, bio: e.target.value }))}
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            isLoading={isSavingInfo}
            leftIcon={<UserCircle2 className="size-4" />}
            onClick={handleUpdateProfile}
          >
            Update profile
          </Button>
        </div>
      </ProfileSection>

      {/* ── Account details ── */}
      <ProfileSection title="Account Details">
        <div className="divide-y divide-border">
          <DetailRow
            icon={CalendarDays}
            label="Member since"
            value={memberSince}
          />
          <DetailRow icon={Briefcase} label="Role" value={info.role} />
          <DetailRow icon={Building2} label="Company" value={info.company} />
          <DetailRow
            icon={MapPin}
            label="Location"
            value={info.location || "Not set"}
          />
        </div>
      </ProfileSection>

      {/* ── Password update ── */}
      <ProfileSection title="Update Password">
        <p className="mb-5 text-body-sm text-muted-foreground">
          Choose a strong password that is at least 8 characters long and not
          used elsewhere.
        </p>
        <div className="grid gap-5 sm:grid-cols-3">
          <Input
            label="Current password"
            leftElement={<Lock className="size-4" />}
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
            leftElement={<KeyRound className="size-4" />}
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
            leftElement={<KeyRound className="size-4" />}
            placeholder="••••••••"
            type="password"
            value={passwords.confirm}
            onChange={(e) =>
              setPasswords((p) => ({ ...p, confirm: e.target.value }))
            }
          />
        </div>
        <div className="mt-6 flex justify-end">
          <Button
            isLoading={isSavingPassword}
            variant="outline"
            onClick={handleUpdatePassword}
          >
            Change password
          </Button>
        </div>
      </ProfileSection>
    </PageMotion>
  );
}
