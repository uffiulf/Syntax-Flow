import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearch } from "@/lib/searchContext";
import { setPageMeta } from "@/lib/utils";
import TeamCard from "@/components/TeamCard";
import SearchBar from "@/components/SearchBar";
import RoleFilter from "@/components/RoleFilter";
import SkillsFilter from "@/components/SkillsFilter";
import Reveal from "@/components/Reveal";

const Team = () => {
  const { t } = useTranslation("common");
  const { filteredTeam } = useSearch();

  useEffect(() => {
    setPageMeta(`${t("nav.team")} | Team Portfolio`, t("hero.pitch"));
  }, [t]);

  return (
    <div className="space-y-16">
      <section className="py-20">
        <div>
          <h1 className="text-left text-5xl font-extrabold tracking-tight md:text-7xl">
            {t("nav.team")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {t("hero.pitch")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-xl">
          <SearchBar />
          <RoleFilter />
          <SkillsFilter />
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-2xl font-bold">{t("nav.team")}</h2>
        <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTeam.map((member, idx) => (
            <Reveal key={member.slug} index={idx}>
              <TeamCard member={member} />
            </Reveal>
          ))}
          {filteredTeam.length === 0 && (
            <p className="text-center text-muted-foreground col-span-full">
              {t("noResults")}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Team;
