import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { useAuthStore, useToastStore } from "@/store";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
  rememberMe: z.boolean().optional(),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const location = useLocation();
  const login = useAuthStore((state) => state.login);
  const loginWithGoogle = useAuthStore((state) => state.loginWithGoogle);
  const showToast = useToastStore((state) => state.showToast);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsSubmitting(true);
    try {
      await login(data.email, data.password);
      showToast({
        description: "Welcome back to your FlowPilot dashboard.",
        title: "Logged in successfully",
        variant: "success",
      });

      // Redirect to requested page or dashboard
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    } catch (err: unknown) {
      const error = err as Error;
      showToast({
        description: error.message || "Invalid credentials. Please try again.",
        title: "Login failed",
        variant: "danger",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      showToast({
        description: "Welcome back to your FlowPilot dashboard.",
        title: "Logged in successfully",
        variant: "success",
      });
      const from = location.state?.from?.pathname || "/dashboard";
      navigate(from, { replace: true });
    } catch (err: unknown) {
      const error = err as Error;
      showToast({
        description: error.message || "Google authentication failed.",
        title: "Google Auth Error",
        variant: "danger",
      });
    }
  };

  return (
    <div className="flex flex-col p-6 sm:p-8">
      <div className="mb-8 flex flex-col items-center gap-2 text-center">
        <h1 className="text-h3 font-bold tracking-tight text-foreground">
          Welcome back
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Enter your credentials to access your account
        </p>
      </div>

      <form
        aria-label="Sign in to your account"
        className="flex flex-col gap-5"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          error={errors.email?.message}
          label="Email address"
          leftElement={<Mail className="size-4" />}
          placeholder="name@company.com"
          type="email"
          {...register("email")}
        />

        <div className="space-y-1">
          <Input
            error={errors.password?.message}
            label="Password"
            leftElement={<Lock className="size-4" />}
            placeholder="••••••••"
            rightElement={
              <button
                className="focus-ring rounded-md text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setShowPassword(!showPassword)}
                tabIndex={-1}
                type="button"
              >
                <span className="sr-only">
                  {showPassword ? "Hide password" : "Show password"}
                </span>
                {showPassword ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </button>
            }
            type={showPassword ? "text" : "password"}
            {...register("password")}
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-body-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors select-none">
            <input
              className="focus-ring size-4 rounded border-input bg-background text-primary"
              type="checkbox"
              {...register("rememberMe")}
            />
            Remember me
          </label>
          <Link
            className="text-body-sm font-medium text-primary hover:underline focus-ring rounded-sm"
            to="/login" // Optional forgot password route placeholder
          >
            Forgot password?
          </Link>
        </div>

        <Button className="mt-2 w-full" isLoading={isSubmitting} type="submit">
          Sign in
        </Button>
      </form>

      <div className="relative my-6">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-card px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>

      <Button
        aria-label="Sign in with Google"
        className="w-full"
        onClick={handleGoogleSignIn}
        type="button"
        variant="outline"
      >
        <svg
          aria-hidden="true"
          className="mr-2 size-4"
          focusable="false"
          viewBox="0 0 24 24"
        >
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Google
      </Button>

      <div className="mt-8 flex justify-center text-body-sm">
        <span className="text-muted-foreground">Don't have an account?</span>{" "}
        <Link
          className="ml-1 font-semibold text-primary hover:underline focus-ring rounded-sm"
          to="/register"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
}
