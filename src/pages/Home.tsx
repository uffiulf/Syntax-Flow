import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import SearchBar from "@/components/SearchBar";
import RoleFilter from "@/components/RoleFilter";
import { getProjects, getTeam } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import TeamCard from "@/components/TeamCard";
import Carousel from "@/components/Carousel";
import Hero from "@/components/Hero";

const Home = () => {
  const { t } = useTranslation("common");
  const projects = getProjects();
  const team = getTeam();
  const featuredProjects = projects.filter((p) => p.featured);

  useEffect(() => {
    document.title = `Home | Team Portfolio`;
  }, []);

  return (
    <div className="space-y-16">
      <Hero />
      {/* Search and Filter */}
      <section aria-labelledby="search-filter-heading">
        <h2 id="search-filter-heading" className="sr-only">{t("filters.search")}</h2>
        <div className="mx-auto max-w-xl">
          <SearchBar />
          <RoleFilter />
        </div>
      </section>

      {/* Featured Projects */}
      <section aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="text-2xl font-bold">{t("sections.featuredProjects")}</h2>
        <Carousel>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Carousel>
      </section>

      {/* Team Preview */}
      <section aria-labelledby="team-preview-heading">
        <h2 id="team-preview-heading" className="text-2xl font-bold">{t("sections.teamPreview")}</h2>
        <div className="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.slice(0, 4).map((member) => (
            <TeamCard key={member.slug} member={member} />
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section aria-labelledby="offerings-heading">
        <h2 id="offerings-heading" className="text-2xl font-bold text-center">{t("sections.whatWeOffer")}</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center">
          <div>
            <h3 className="font-semibold">{t("offerings.development")}</h3>
          </div>
          <div>
            <h3 className="font-semibold">{t("offerings.devops")}</h3>
          </div>
          <div>
            <h3 className="font-semibold">{t("offerings.projectManagement")}</h3>
          </div>
            <div>
            <h3 className="font-semibold">{t("offerings.design")}</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
