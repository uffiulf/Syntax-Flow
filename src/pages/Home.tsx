import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import SearchBar from "@/components/SearchBar";
import RoleFilter from "@/components/RoleFilter";
import { getProjects, getTeam } from "@/lib/data";
import ProjectCard from "@/components/ProjectCard";
import TeamCard from "@/components/TeamCard";
import { Carousel as EmblaCarousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Hero from "@/components/Hero";
import Reveal from "@/components/Reveal";
import Offerings from "@/components/Offerings";

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
      <section aria-labelledby="search-filter-heading" className="py-20">
        <h2 id="search-filter-heading" className="sr-only">{t("filters.search")}</h2>
        <div className="mx-auto max-w-xl">
          <SearchBar />
          <RoleFilter />
        </div>
      </section>

      {/* Featured Projects */}
      <section aria-labelledby="featured-heading" className="py-20">
        <h2 id="featured-heading" className="text-2xl font-bold">{t("sections.featuredProjects")}</h2>
        <EmblaCarousel className="mt-4" opts={{ align: "start" }}>
          <CarouselContent>
            {featuredProjects.map((project, idx) => (
              <CarouselItem key={project.slug} className="md:basis-1/2 lg:basis-1/3">
                <Reveal index={idx}>
                  <ProjectCard project={project} />
                </Reveal>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </EmblaCarousel>
      </section>

      {/* Team Preview */}
      <section aria-labelledby="team-preview-heading" className="py-20">
        <h2 id="team-preview-heading" className="text-2xl font-bold">{t("sections.teamPreview")}</h2>
        <div className="mt-4 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {team.slice(0, 4).map((member, idx) => (
            <Reveal key={member.slug} index={idx}>
              <TeamCard member={member} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* What We Offer */}
      <section aria-labelledby="offerings-heading" className="py-20">
        <h2 id="offerings-heading" className="text-2xl font-bold">{t("sections.whatWeOffer")}</h2>
        <div className="mt-8">
          <Offerings />
        </div>
      </section>
    </div>
  );
};

export default Home;
