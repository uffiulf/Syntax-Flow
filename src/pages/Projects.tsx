import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useSearch } from "@/lib/searchContext";
import { setPageMeta } from "@/lib/utils";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import TagFilter from "@/components/TagFilter";
import Reveal from "@/components/Reveal";

const Projects = () => {
  const { t } = useTranslation("common");
  const { filteredProjects } = useSearch();

  useEffect(() => {
    setPageMeta(`${t("nav.projects")} | Team Portfolio`, t("hero.pitch"));
  }, [t]);

  return (
    <div className="space-y-16">
      <section className="py-20">
        <div>
          <h1 className="text-left text-5xl font-extrabold tracking-tight md:text-7xl">
            {t("nav.projects")}
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
            {t("hero.pitch")}
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-xl">
          <SearchBar />
          <TagFilter />
        </div>
      </section>

      <section className="py-20">
        <h2 className="text-2xl font-bold">{t("nav.projects")}</h2>
        <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, idx) => (
            <Reveal key={project.slug} index={idx}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
          {filteredProjects.length === 0 && (
            <p className="text-muted-foreground col-span-full">
              {t("noResults")}
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;
