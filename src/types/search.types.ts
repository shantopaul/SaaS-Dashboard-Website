export type SearchResultType =
  | "customer"
  | "invoice"
  | "page"
  | "report"
  | "transaction";

export interface SearchResultItem {
  description: string;
  href: string;
  id: string;
  keywords: string;
  title: string;
  type: SearchResultType;
}
