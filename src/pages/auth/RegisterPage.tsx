import { Link } from "react-router-dom";

export function RegisterPage() {
  return (
    <div className="flex flex-col gap-6 p-6 sm:p-8">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-h3 font-bold tracking-tight text-foreground">
          Create an account
        </h1>
        <p className="text-body-sm text-muted-foreground">
          Registration form UI will be built in Feature 12.
        </p>
      </div>

      <div className="flex justify-center py-8">
        <span className="text-sm text-muted-foreground">
          [ Register Form Placeholder ]
        </span>
      </div>

      <div className="flex justify-center">
        <Link
          className="text-body-sm font-semibold text-primary hover:underline"
          to="/login"
        >
          Already have an account? Sign in
        </Link>
      </div>
    </div>
  );
}
