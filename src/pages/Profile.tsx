import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { setPageMeta } from "@/lib/utils";
import { getTeam, getProjects } from "@/lib/data";
import NotFound from "./NotFound";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

const Profile = () => {
  const { slug } = useParams();
  const { t } = useTranslation("common");
  const team = getTeam();
  const member = team.find((m) => m.slug === slug);
  const projects = getProjects();

  if (!member) {
    return <NotFound />;
  }

  const related = projects.filter((p) => p.team.includes(member.slug)).slice(0, 4);

  useEffect(() => {
    setPageMeta(`${member.name} | Profile | Team Portfolio`, member.bio);
  }, [member]);

  return (
    <div className="space-y-8">
      <div className="flex flex-col items-center text-center">
        <Avatar className="h-32 w-32 mb-4">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <h1 className="text-4xl font-bold">{member.name}</h1>
        <div className="flex flex-wrap gap-2 mt-2">
          {member.roles.map((r) => (
            <Badge key={r}>{r}</Badge>
          ))}
        </div>
        <p className="mt-4 text-lg text-muted-foreground">{member.bio}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-2xl font-bold">{t("profile.highlights")}</h2>
          <ul className="list-disc list-inside space-y-1">
            {member.highlights.map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">{t("profile.skills")}</h2>
          <div className="flex flex-wrap gap-2">
            {member.skills.map((s) => (
              <Badge key={s} variant="secondary">
                {s}
              </Badge>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-8">{t("profile.links")}</h2>
          <div className="flex gap-2 flex-wrap">
            {member.links.github && (
              <Button variant="outline" asChild>
                <a href={member.links.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </Button>
            )}
            {member.links.linkedin && (
              <Button variant="outline" asChild>
                <a href={member.links.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </Button>
            )}
          </div>

          <h2 className="text-2xl font-bold mt-8">{t("profile.cv")}</h2>
          <Button asChild>
            <a href={member.cvUrl} target="_blank" rel="noreferrer">
              {t("buttons.downloadCv")}
            </a>
          </Button>
        </div>
      </div>
      {related.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold mt-8">{t("profile.relatedProjects")}</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {related.map((r) => (
              <Button key={r.slug} variant="outline" asChild>
                <a href={`/project/${r.slug}`}>{r.title}</a>
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
