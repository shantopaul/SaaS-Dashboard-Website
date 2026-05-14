function App() {
  return (
    <main className="app-surface">
      <section className="container-shell flex min-h-screen items-center py-16">
        <div className="grid w-full gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-4 text-caption font-semibold uppercase tracking-[0.24em] text-accent">
              FlowPilot Design System
            </p>
            <h1 className="max-w-3xl text-heading-xl sm:text-display-md">
              Professional SaaS foundation with reusable visual tokens.
            </h1>
            <p className="mt-5 max-w-2xl text-body-lg">
              Feature 02 defines the color, typography, spacing, radius, shadow,
              and focus standards that future public pages and dashboard screens
              will share.
            </p>
          </div>

          <div className="panel p-5">
            <div className="mb-5 flex items-center justify-between gap-4">
              <div>
                <p className="text-caption font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  Token Preview
                </p>
                <h2 className="mt-1 text-heading-md">Balanced light surface</h2>
              </div>
              <span className="rounded-md bg-success px-3 py-1 text-caption font-semibold text-success-foreground">
                Ready
              </span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-md bg-primary p-4 text-primary-foreground">
                <p className="text-caption font-semibold uppercase tracking-[0.16em] text-primary-foreground/75">
                  Primary
                </p>
                <p className="mt-4 text-heading-md text-primary-foreground">
                  # Brand Action
                </p>
              </div>
              <div className="rounded-md bg-accent p-4 text-accent-foreground">
                <p className="text-caption font-semibold uppercase tracking-[0.16em] text-accent-foreground/75">
                  Accent
                </p>
                <p className="mt-4 text-heading-md text-accent-foreground">
                  # Data Signal
                </p>
              </div>
              <div className="rounded-md border border-border bg-secondary p-4 text-secondary-foreground">
                <p className="text-caption font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Secondary
                </p>
                <p className="mt-4 text-heading-md">Cards + Forms</p>
              </div>
              <div className="rounded-md border border-border bg-muted p-4">
                <p className="text-caption font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                  Muted
                </p>
                <p className="mt-4 text-heading-md">Quiet UI states</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
