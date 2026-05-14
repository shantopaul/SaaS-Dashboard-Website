import { useState } from "react";
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  EmptyState,
  Input,
  SearchInput,
  SectionHeader,
  Select,
  Toggle,
} from "@/components";

function App() {
  const [reportsEnabled, setReportsEnabled] = useState(true);

  return (
    <main className="app-surface">
      <section className="container-shell flex min-h-screen items-center py-16">
        <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-caption font-semibold uppercase tracking-[0.24em] text-accent">
              FlowPilot Component Kit
            </p>
            <h1 className="max-w-3xl text-heading-xl sm:text-display-md">
              Reusable UI primitives for a professional SaaS dashboard.
            </h1>
            <p className="mt-5 max-w-2xl text-body-lg">
              Feature 04 adds the shared controls, cards, states, and form
              building blocks that future pages can compose consistently.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button>Primary Action</Button>
              <Button variant="outline">Secondary Action</Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <CardTitle>Core Components</CardTitle>
                  <CardDescription>
                    Shared controls are token-driven, accessible, and ready for
                    dashboard workflows.
                  </CardDescription>
                </div>
                <Badge variant="success">Ready</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <SectionHeader
                action={<Badge variant="info">Preview</Badge>}
                description="A compact surface showing the first reusable controls."
                title="Reusable surface"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <Input
                  helperText="Used later in auth, settings, and profile forms."
                  label="Workspace"
                  placeholder="FlowPilot Studio"
                />
                <Select
                  label="Default range"
                  options={[
                    { label: "Last 7 days", value: "7d" },
                    { label: "Last 30 days", value: "30d" },
                    { label: "Last 90 days", value: "90d" },
                  ]}
                  placeholder="Choose range"
                />
              </div>

              <SearchInput placeholder="Search customers, invoices, or reports" />

              <div className="flex flex-wrap items-center justify-between gap-4 rounded-lg border border-border bg-secondary p-4">
                <Toggle
                  checked={reportsEnabled}
                  label="Weekly reports"
                  onCheckedChange={setReportsEnabled}
                />
                <Badge variant={reportsEnabled ? "success" : "muted"}>
                  {reportsEnabled ? "Enabled" : "Disabled"}
                </Badge>
              </div>

              <EmptyState
                actionLabel="Create report"
                description="Empty states will guide users when dashboard tables, reports, or search results have no content."
                onAction={() => undefined}
                title="No reports selected"
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

export default App;
