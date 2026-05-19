import { Link } from "react-router-dom";
import { cn } from "@/utils";

interface BrandLogoProps {
  className?: string;
}

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <Link
      className={cn(
        "focus-ring group inline-flex items-center gap-3 rounded-md transition-all duration-300",
        className,
      )}
      to="/"
    >
      <span className="relative flex size-10 items-center justify-center rounded-xl border border-primary/20 bg-primary/8 shadow-[inset_0_1px_2px_rgba(255,255,255,0.15)] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary/12">
        <svg
          className="size-5.5 text-primary transition-transform duration-300 group-hover:rotate-6"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="logo-grad"
              x1="0"
              y1="0"
              x2="24"
              y2="24"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="currentColor" />
              <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
          </defs>
          {/* Dynamic delta wing / compass guide */}
          <path
            d="M12 3L2 21L12 17L22 21L12 3Z"
            fill="url(#logo-grad)"
            fillOpacity="0.15"
            stroke="url(#logo-grad)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Internal fluid data flow pathway */}
          <path
            d="M12 7L6 17.5H18L12 7Z"
            stroke="url(#logo-grad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Glowing central pilot coordinate */}
          <circle cx="12" cy="13.5" r="2.2" fill="url(#logo-grad)" />
        </svg>
      </span>
      <span className="leading-none select-none">
        <span className="block text-body-md tracking-tight font-black text-foreground">
          <span className="bg-gradient-to-r from-foreground via-foreground to-foreground bg-clip-text">
            Flow
          </span>
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-medium">
            Pilot
          </span>
        </span>
        <span className="block mt-1 text-[9px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
          SaaS Analytics
        </span>
      </span>
    </Link>
  );
}
