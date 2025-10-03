import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getProjects, getTeam } from "../lib/data";
import NotFound from "./NotFound";
import { setPageMeta } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Project = () => {
  const { slug } = useParams();
  const { t } = useTranslation("common");
  const projects = getProjects();
  const team = getTeam();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    if (project) {
      setPageMeta(`${project.title} | ${t('nav.projects')} | Team Portfolio`, project.summary);
    }
  }, [project, t]);

  if (!project) {
    return <NotFound />;
  }

  const projectTeam = team.filter(member => project.team.includes(member.slug));

  return (
    <div className="space-y-8">
      {project.thumb && (
        <img
          src={project.thumb}
          alt={project.title}
          className="w-full h-auto max-h-[400px] object-cover rounded-lg"
        />
      )}
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {project.summary}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold">{t('project.about')}</h2>
          <p>{project.summary}</p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{t('project.tags')}</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h2 className="text-2xl font-bold mt-8">{t('project.team')}</h2>
          <div className="flex flex-wrap gap-4">
            {projectTeam.map(member => (
              <Link to={`/profile/${member.slug}`} key={member.slug} className="flex flex-col items-center gap-2 text-center">
                <Avatar>
                  <AvatarImage src={member.avatar} alt={member.name} />
                  <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{member.name}</span>
              </Link>
            ))}
          </div>
          {Object.values(project.links).some(link => link) && (
            <>
              <h2 className="text-2xl font-bold mt-8">{t('project.links')}</h2>
              <div className="flex gap-2 flex-wrap">
                {project.links.repo && <Button variant="outline" asChild><a href={project.links.repo} target="_blank" rel="noreferrer">{t('buttons.repo')}</a></Button>}
                {project.links.demo && <Button variant="outline" asChild><a href={project.links.demo} target="_blank" rel="noreferrer">{t('buttons.liveDemo')}</a></Button>}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
