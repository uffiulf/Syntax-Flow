import { useSearch } from "@/lib/searchContext";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

const SkillsFilter = () => {
  const { t } = useTranslation("common");
  const { allSkills, selectedSkills, toggleSkill, clearFilters } = useSearch();
  if (allSkills.length === 0) return null;
  return (
    <div className="mt-4 flex flex-wrap justify-center gap-2" aria-label={t("filters.skills") || 'Skills filter'}>
      <Badge
        variant={selectedSkills.length === 0 ? "secondary" : "outline"}
        onClick={clearFilters}
        className="cursor-pointer"
      >
        {t("filters.all")}
      </Badge>
      {allSkills.map(skill => {
        const active = selectedSkills.includes(skill);
        return (
          <Badge
            key={skill}
            onClick={() => toggleSkill(skill)}
            role="checkbox"
            aria-checked={active}
            className={cn("cursor-pointer", active ? "border-primary" : "opacity-70 hover:opacity-100")}
            variant={active ? "secondary" : "outline"}
          >
            {skill}
          </Badge>
        );
      })}
    </div>
  );
};

export default SkillsFilter;
