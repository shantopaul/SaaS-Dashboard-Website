# FlowPilot Project Coding Style and GitHub Push Workflow

This document defines the exact **Design Philosophy, Coding Standards, and Git/GitHub Workflows** for the FlowPilot SaaS Dashboard project. All AI assistants and human developers working on this codebase **must read and adhere strictly** to these patterns to ensure visual excellence, premium aesthetics, clean build states, and structured Git logs.

---

## 🎨 1. Premium Visual & Design Philosophy

FlowPilot is a state-of-the-art SaaS product. Its interface must evoke visual wonder, premium craftsmanship, and seamless tactile feedback.

### A. Hybrid Theme Spacing & Contrast Optimization

FlowPilot supports a fully native hybrid Light & Dark mode theme. To ensure premium styling:

- **☀️ Light Mode (Vibrant, Energetic Blue Accent)**:
  - Primary sections and CTA highlights must use beautiful gradients, e.g., `bg-gradient-to-r from-blue-600 to-indigo-700`.
  - Ensure high-contrast white text (`text-white`) and soft-tinted labels (`text-blue-100`) to guarantee accessibility over primary backdrops.
- **🌙 Dark Mode (Sleek Obsidian Slate Glass)**:
  - Avoid solid bright colors that destroy eye comfort. Wrap interactive zones and CTAs in a dark-theme glassmorphic slate look: `dark:from-card/40 dark:to-background/60 bg-card/60 backdrop-blur-sm border-border/80`.
  - Add deep, ambient radial halos in the background to provide a holographic depth feel: `dark:bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.08),transparent)]` or `-z-10 bg-gradient-to-tr from-primary/12 via-accent/8 to-transparent opacity-75 blur-3xl`.
  - Set titles to theme-compliant white (`dark:text-foreground`) and descriptions to muted slates (`dark:text-muted-foreground`).

### B. High-Fidelity Badge System

- Features and highlight cards must avoid generic icons with plain blue colors. Always style badges with custom dual-tone HSL themes matching their category:
  - 🟣 **Operational/Analytical**: `bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20`
  - 🟢 **Financial/Growth**: `bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20`
  - 🔵 **Security/Visibility**: `bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20`
  - 🔴 **Collaboration/Teamwork**: `bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20`
  - 🟧 **Utility/Integrity**: `bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20`

### C. Touch-Friendly, Responsive Layouts

- **Fluid Typography**: Headings must adapt dynamically to screen size. Never use giant static `text-heading-xl` on mobile. Instead, scale them smoothly:
  ```typescript
  className =
    "text-3xl font-extrabold tracking-tight leading-[1.15] text-foreground sm:text-heading-xl md:text-display-md";
  ```
- **Full-Width Touch Targets**: All action buttons in CTA banners and hero sections must be responsive. They must stretch to full-width on mobile to fit the viewport comfortably and scale back to normal on desktop:
  ```typescript
  className =
    "w-full sm:w-auto inline-flex h-11 items-center justify-center rounded-lg";
  ```
- **Tactile Interactions**: Always add micro-interactions for all interactive grid cards, badges, and link options:
  ```typescript
  className =
    "transition-all duration-300 hover:scale-[1.02] hover:shadow-card-hover hover:border-primary/20";
  ```

---

## 💻 2. Core Coding & Component Standards

### A. Framer Motion Animation Safe Practices

> [!IMPORTANT]
> **CRITICAL ANIMATION RULE**:
> When configuring `<motion.div>` or other animated components using a string variable for states (e.g., `animate="visible"`), you **MUST** supply a corresponding `variants={YOUR_VARIANTS_OBJECT}` mapping.
> In the absence of a `variants` dictionary, Framer Motion will fail to trigger transitions, leaving components permanently hidden at `opacity: 0`.
>
> - **If using custom delay/duration on the spot**: Pass explicit target states directly instead of variant names:
>   ```typescript
>   // CORRECT
>   <motion.div
>     animate={{ opacity: 1, y: 0 }}
>     initial={{ opacity: 0, y: 26 }}
>     transition={{ delay: 0.12, duration: 0.6, ease: "easeOut" }}
>   >
>   ```

### B. Tailwind Class Merging with `cn`

- When modifying components or constructing interactive buttons with dynamically appended classes, always import the tailwind merge utility from `@/utils`:

  ```typescript
  import { cn } from "@/utils";

  // Usage
  className={cn("base-classes", isDynamic && "conditional-classes", customClass)}
  ```

### C. Information-Rich Layouts

- Avoid plain empty squares or cards with only single wrapped sentences. If displaying a grid highlight card:
  1. Define a concise, punchy **Title** (`text-heading-md font-extrabold tracking-tight`).
  2. Include a highly descriptive, readable **Helper Description** (`text-body-sm text-muted-foreground leading-relaxed`) to balance out empty space.
  3. Prepend a beautiful, theme-themed custom badge icon.

---

## 🌿 3. Git Workflow & GitHub Push Guidelines

Every code modification must go through a strict verification suite before being pushed to remote repositories to guarantee that the production build is permanently stable.

### A. The 3-Step Verification Pre-Commit Hook

Before committing any code or pushing changes, **always execute the following verification chain** in the project's root folder:

```powershell
# 1. Format the codebase cleanly
npm run format

# 2. Audit and lint files for TypeScript/ESLint warnings
npm run lint

# 3. Compile assets and perform build sanity checks
npm run build
```

> [!IMPORTANT]
> You are **ONLY** allowed to commit or push code if the compilation builds successfully with **Exit Code 0** (Zero warnings, zero errors).

### B. Safe Windows Git Execution

- On Windows environments, Git may throw safe-directory warnings depending on workspace directories. Always prefix command calls with `-c safe.directory` to avoid CLI permission hangs:
  ```powershell
  git -c safe.directory='YOUR_PROJECT_PATH' add .
  git -c safe.directory='YOUR_PROJECT_PATH' commit -m "Commit message"
  git -c safe.directory='YOUR_PROJECT_PATH' push origin BRANCH_NAME
  ```

### C. Standard Git Branching Flow

1. **Branch Checkout**: Always work inside dedicated feature branches (e.g. `feature/28-responsive-pass`) instead of direct updates to `main`.
2. **Push Branch**: Synchronize all incremental commits to their remote tracking branch on GitHub.
3. **Verify PR & Merge**: Once the feature is completed, open a Pull Request, merge it into `main`, and clean up tracking references.

---

### Summary Checklist for New Code

- [ ] Does it compile cleanly with `npm run build` and zero errors?
- [ ] Are all headers responsive (`text-3xl` scaling to `text-heading-xl`)?
- [ ] Do buttons stretch to full width (`w-full sm:w-auto`) on mobile viewports?
- [ ] Does dark mode look premium (obsidian glass, custom glow halos, custom badge colors)?
- [ ] Did you avoid `animate="visible"` without declaring variants?
- [ ] Did you format and lint before pushing?
