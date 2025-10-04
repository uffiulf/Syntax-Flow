import { Input } from "@/components/ui/input";
import { useTranslation } from "react-i18next";
import { useSearch } from "@/lib/searchContext";
import { useEffect, useState } from "react";

const SearchBar = () => {
  const { t } = useTranslation("common");
  const { query, setQuery } = useSearch();
  const [localValue, setLocalValue] = useState(query);

  useEffect(() => {
    const id = setTimeout(() => setQuery(localValue), 300);
    return () => clearTimeout(id);
  }, [localValue, setQuery]);

  return (
    <Input
      type="search"
      value={localValue}
      onChange={(e) => setLocalValue(e.target.value)}
      placeholder={t("search_placeholder") || t("filters.search")}
      className="w-full"
      aria-label={t("filters.search")}
    />
  );
};

export default SearchBar;
