export function Sidebar() {
  return (
    <aside className="hidden w-64 flex-col border-r border-border bg-card md:flex">
      <div className="flex h-16 items-center px-4 border-b border-border">
        <span className="font-semibold">FlowPilot Placeholder</span>
      </div>
      <div className="flex-1 p-4">
        {/* Navigation placeholder */}
        <div className="text-sm text-muted-foreground">
          Sidebar Nav Placeholder
        </div>
      </div>
    </aside>
  );
}
