import { TeamMember } from "@/lib/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard = ({ member }: TeamCardProps) => {
  const { t } = useTranslation("common");

  return (
    <Card className="group relative overflow-hidden border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/10 transition duration-300 hover:shadow-lg hover:border-primary/50 hover:-translate-y-1">
      <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-500 opacity-0 group-hover:opacity-100 transition" />
      <CardHeader className="items-center">
        <Avatar className="h-24 w-24 ring-2 ring-transparent group-hover:ring-primary/50 transition">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle className="mt-2 bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
          {member.name}
        </CardTitle>
        <div className="flex flex-wrap gap-1">
            {member.roles.map((r) => <Badge key={r} variant="outline" className="border-white/30 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm">{r}</Badge>)}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center text-sm leading-relaxed">
          {member.bio}
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {member.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="bg-violet-500/15 text-violet-700 dark:text-violet-300 dark:bg-violet-400/10">{skill}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2 pt-0">
        <Button asChild className="transition hover:shadow">
          <Link to={`/profile/${member.slug}`}>{t("buttons.viewProfile") || t("view_profile")}</Link>
        </Button>
        <Button variant="outline" asChild className="backdrop-blur bg-white/40 dark:bg-white/5 border-white/40 hover:bg-white/60 dark:hover:bg-white/10">
          <a href={member.cvUrl} target="_blank" rel="noreferrer">{t("buttons.downloadCv") || t("download_cv")}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
