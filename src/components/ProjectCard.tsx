import { Project } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import ImageWithFallback from "@/components/figma/ImageWithFallback";
import { buildSrcSet } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Card className="group relative overflow-hidden border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10 transition duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-500 opacity-0 group-hover:opacity-100 transition" />
      <CardHeader className="pb-4">
        <CardTitle className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          {project.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="relative mb-4 overflow-hidden rounded-md">
          <ImageWithFallback
            src={project.thumb}
            alt={project.title}
            className="rounded-md aspect-video object-cover transition duration-300 group-hover:scale-[1.03]"
            srcSet={buildSrcSet(project.thumb, [400, 800, 1200])}
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            decoding="async"
            loading="lazy"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 min-h-[3.6em]">{project.summary}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-violet-500/15 text-violet-700 dark:text-violet-300 dark:bg-violet-400/10">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-0">
        <Button asChild className="transition hover:shadow">
          <Link to={`/project/${project.slug}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
