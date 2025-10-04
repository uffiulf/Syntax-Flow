import { useTranslation } from "react-i18next";
import { Badge } from "@/components/ui/badge";
import { useSearch } from "@/lib/searchContext";
import { cn } from "@/lib/utils";

const RoleFilter = () => {
  const { t } = useTranslation("common");
  const { allRoles, selectedRoles, toggleRole, clearFilters } = useSearch();

  return (
    <div
      className="mt-4 flex flex-wrap justify-center gap-2"
      aria-label={t("filters.role") || "Role filter"}
    >
      <Badge
        variant={selectedRoles.length === 0 ? "secondary" : "outline"}
        onClick={clearFilters}
        className="cursor-pointer"
      >
        {t("filters.all")}
      </Badge>
      {allRoles.map((role) => {
        const active = selectedRoles.includes(role);
        return (
          <Badge
            key={role}
            role="checkbox"
            aria-checked={active}
            onClick={() => toggleRole(role)}
            className={cn(
              "cursor-pointer",
              active ? "border-primary" : "opacity-70 hover:opacity-100"
            )}
            variant={active ? "secondary" : "outline"}
          >
            {t(`filters.roles.${role}`, role)}
          </Badge>
        );
      })}
    </div>
  );
};

export default RoleFilter;
