import { useSearch } from "@/lib/searchContext";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const TagFilter = () => {
  const { t } = useTranslation("common");
  const { allTags, selectedTags, toggleTag, clearFilters } = useSearch();

  if (allTags.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap justify-center gap-2" aria-label={t("filters.tags") || 'Tag filter'}>
      <Badge
        variant={selectedTags.length === 0 ? "secondary" : "outline"}
        onClick={clearFilters}
        className="cursor-pointer"
      >
        {t("filters.all")}
      </Badge>
      {allTags.map(tag => {
        const active = selectedTags.includes(tag);
        return (
          <Badge
            key={tag}
            onClick={() => toggleTag(tag)}
            role="checkbox"
            aria-checked={active}
            className={cn("cursor-pointer", active ? "border-primary" : "opacity-70 hover:opacity-100")}
            variant={active ? "secondary" : "outline"}
          >
            {tag}
          </Badge>
        );
      })}
    </div>
  );
};

export default TagFilter;
