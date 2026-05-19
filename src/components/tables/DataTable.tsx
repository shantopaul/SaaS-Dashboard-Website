import { type ReactNode, useMemo, useState } from "react";
import { SearchInput } from "@/components/common";
import { cn } from "@/utils";

export interface DataTableColumn<TData> {
  accessor: (row: TData) => ReactNode;
  className?: string;
  header: string;
  id: string;
  mobileLabel?: string;
}

interface DataTableProps<TData> {
  caption: string;
  columns: DataTableColumn<TData>[];
  data: TData[];
  emptyMessage?: string;
  getMobileTitle: (row: TData) => ReactNode;
  getRowId: (row: TData) => string;
  getSearchText?: (row: TData) => string;
  mobileSummary?: (row: TData) => ReactNode;
  renderActions?: (row: TData) => ReactNode;
  searchPlaceholder?: string;
  withSearch?: boolean;
}

export function DataTable<TData>({
  caption,
  columns,
  data,
  emptyMessage = "No records found.",
  getMobileTitle,
  getRowId,
  getSearchText,
  mobileSummary,
  renderActions,
  searchPlaceholder = "Search table...",
  withSearch = false,
}: DataTableProps<TData>) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredData = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery || !getSearchText) {
      return data;
    }

    return data.filter((row) =>
      getSearchText(row).toLowerCase().includes(normalizedQuery),
    );
  }, [data, getSearchText, searchQuery]);

  return (
    <div className="space-y-4">
      {withSearch ? (
        <div className="max-w-sm">
          <SearchInput
            label={`Search ${caption}`}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={searchPlaceholder}
            value={searchQuery}
          />
        </div>
      ) : null}

      <div className="hidden overflow-x-auto md:block">
        <table className="w-full min-w-[680px] text-left text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-border text-caption uppercase text-muted-foreground">
              {columns.map((column) => (
                <th
                  key={column.id}
                  className={cn("pb-3 font-semibold", column.className)}
                  scope="col"
                >
                  {column.header}
                </th>
              ))}
              {renderActions ? (
                <th className="pb-3 text-right font-semibold" scope="col">
                  Actions
                </th>
              ) : null}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredData.map((row) => (
              <tr
                key={getRowId(row)}
                className="transition-colors hover:bg-muted/40"
              >
                {columns.map((column) => (
                  <td
                    key={column.id}
                    className={cn("py-4 pr-4 align-middle", column.className)}
                  >
                    {column.accessor(row)}
                  </td>
                ))}
                {renderActions ? (
                  <td className="py-4 text-right align-middle">
                    {renderActions(row)}
                  </td>
                ) : null}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {filteredData.map((row) => (
          <article
            key={getRowId(row)}
            className="rounded-lg border border-border bg-background p-4"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">{getMobileTitle(row)}</div>
              {renderActions ? (
                <div className="shrink-0">{renderActions(row)}</div>
              ) : null}
            </div>
            {mobileSummary ? (
              <div className="mt-3">{mobileSummary(row)}</div>
            ) : null}
            <dl className="mt-4 grid grid-cols-2 gap-3 text-caption">
              {columns.slice(1).map((column) => (
                <div key={column.id}>
                  <dt className="font-semibold uppercase text-muted-foreground">
                    {column.mobileLabel ?? column.header}
                  </dt>
                  <dd className="mt-1 text-foreground">
                    {column.accessor(row)}
                  </dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      {filteredData.length === 0 ? (
        <div className="rounded-lg border border-dashed border-border bg-muted/30 px-4 py-8 text-center text-body-sm text-muted-foreground">
          {emptyMessage}
        </div>
      ) : null}
    </div>
  );
}
