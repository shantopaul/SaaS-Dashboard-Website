import { useMemo, useRef, useState, type KeyboardEvent } from "react";
import {
  FileSearch,
  LayoutDashboard,
  ReceiptText,
  Search,
  UserRound,
  WalletCards,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button, SearchInput } from "@/components/common";
import { dashboardSearchItems } from "@/data";
import type { SearchResultItem, SearchResultType } from "@/types";
import { cn } from "@/utils";

const resultIcons = {
  customer: UserRound,
  invoice: ReceiptText,
  page: LayoutDashboard,
  report: FileSearch,
  transaction: WalletCards,
};

const resultLabels: Record<SearchResultType, string> = {
  customer: "Customer",
  invoice: "Invoice",
  page: "Page",
  report: "Report",
  transaction: "Transaction",
};

interface DashboardSearchProps {
  compact?: boolean;
  className?: string;
}

function filterSearchResults(query: string) {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return dashboardSearchItems.slice(0, 5);
  }

  return dashboardSearchItems
    .filter((item) =>
      `${item.title} ${item.description} ${item.keywords}`
        .toLowerCase()
        .includes(normalizedQuery),
    )
    .slice(0, 6);
}

function SearchResultLink({
  item,
  onSelect,
}: {
  item: SearchResultItem;
  onSelect: () => void;
}) {
  const Icon = resultIcons[item.type];

  return (
    <Link
      className="focus-ring flex items-start gap-3 rounded-md px-3 py-2 transition-colors hover:bg-secondary"
      onClick={onSelect}
      to={item.href}
    >
      <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
        <Icon className="size-4" aria-hidden="true" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="flex items-center justify-between gap-3">
          <span className="truncate text-sm font-semibold text-foreground">
            {item.title}
          </span>
          <span className="shrink-0 text-caption font-medium uppercase text-muted-foreground">
            {resultLabels[item.type]}
          </span>
        </span>
        <span className="mt-1 line-clamp-2 text-caption text-muted-foreground">
          {item.description}
        </span>
      </span>
    </Link>
  );
}

function SearchPanel({
  autoFocus = false,
  onClose,
}: {
  autoFocus?: boolean;
  onClose?: () => void;
}) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(autoFocus);
  const inputRef = useRef<HTMLInputElement>(null);
  const results = useMemo(() => filterSearchResults(query), [query]);
  const hasQuery = query.trim().length > 0;

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Escape") {
      setQuery("");
      setShowResults(false);
      onClose?.();
    }

    if (event.key === "Enter" && results[0]) {
      event.preventDefault();
      navigate(results[0].href);
      setShowResults(false);
      onClose?.();
    }
  };

  return (
    <div
      className="w-full"
      onBlur={() => {
        window.setTimeout(() => setShowResults(false), 120);
      }}
      onFocus={() => setShowResults(true)}
    >
      <SearchInput
        ref={inputRef}
        autoFocus={autoFocus}
        className="bg-background"
        label="Search dashboard"
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Search customers, invoices, pages..."
        value={query}
      />

      {showResults ? (
        <div className="absolute left-0 right-0 top-12 z-50 mt-2 rounded-lg border border-border bg-popover p-2 text-popover-foreground shadow-card">
          <div className="px-2 pb-2 text-caption font-semibold uppercase text-muted-foreground">
            {hasQuery ? "Search results" : "Suggested results"}
          </div>

          {results.length > 0 ? (
            <div className="space-y-1">
              {results.map((item) => (
                <SearchResultLink
                  key={item.id}
                  item={item}
                  onSelect={() => {
                    setShowResults(false);
                    onClose?.();
                  }}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-md border border-dashed border-border bg-muted/30 px-3 py-6 text-center">
              <p className="text-sm font-semibold text-foreground">
                No matching results
              </p>
              <p className="mt-1 text-caption text-muted-foreground">
                Try searching for a customer, invoice, report, or page.
              </p>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}

export function DashboardSearch({
  compact = false,
  className,
}: DashboardSearchProps) {
  const [open, setOpen] = useState(false);

  if (compact) {
    return (
      <div className={cn("relative", className)}>
        <Button
          aria-expanded={open}
          aria-label="Search dashboard"
          onClick={() => setOpen((current) => !current)}
          size="icon"
          variant="ghost"
        >
          <Search className="size-5" />
        </Button>
        {open ? (
          <div className="absolute right-0 top-12 z-50 w-[calc(100vw-2rem)] max-w-sm">
            <SearchPanel autoFocus onClose={() => setOpen(false)} />
          </div>
        ) : null}
      </div>
    );
  }

  return (
    <div className={cn("relative", className)}>
      <SearchPanel />
    </div>
  );
}
