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
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {t("nav.projects")}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {t("hero.pitch")}
        </p>
      </div>

      <div className="mx-auto max-w-xl">
        <SearchBar />
        <TagFilter />
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, idx) => (
          <Reveal key={project.slug} index={idx}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
        {filteredProjects.length === 0 && (
          <p className="text-center text-muted-foreground col-span-full">
            {t("noResults")}
          </p>
        )}
      </div>
    </div>
  );
};

export default Projects;
