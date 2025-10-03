import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearch } from "@/lib/searchContext";
import { setPageMeta } from "@/lib/utils";
import TeamCard from "@/components/TeamCard";
import SearchBar from "@/components/SearchBar";
import RoleFilter from "@/components/RoleFilter";
import SkillsFilter from "@/components/SkillsFilter";

const Team = () => {
  const { t } = useTranslation("common");
  const { filteredTeam } = useSearch();

  useEffect(() => {
    setPageMeta(`${t("nav.team")} | Team Portfolio`, t("hero.pitch"));
  }, [t]);

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {t("nav.team")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("hero.pitch")}
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <SearchBar />
        <RoleFilter />
        <SkillsFilter />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredTeam.map((member) => (
          <TeamCard key={member.slug} member={member} />
        ))}
        {filteredTeam.length === 0 && (
          <p className="text-center text-muted-foreground col-span-full">
            {t("noResults")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Team;
