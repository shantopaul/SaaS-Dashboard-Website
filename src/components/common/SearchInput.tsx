import { forwardRef, type InputHTMLAttributes } from "react";
import { Search } from "lucide-react";
import { Input } from "./Input";

interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "type"
> {
  label?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  ({ label = "Search", placeholder = "Search...", ...props }, ref) => {
    return (
      <Input
        ref={ref}
        aria-label={label}
        leftElement={<Search aria-hidden="true" className="size-4" />}
        placeholder={placeholder}
        type="search"
        {...props}
      />
    );
  },
);

SearchInput.displayName = "SearchInput";
