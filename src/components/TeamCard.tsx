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
    <Card>
      <CardHeader className="items-center">
        <Avatar className="h-24 w-24">
          <AvatarImage src={member.avatar} alt={member.name} />
          <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <CardTitle>{member.name}</CardTitle>
        <div className="flex flex-wrap gap-1">
            {member.roles.map((r) => <Badge key={r} variant="outline">{r}</Badge>)}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-center">{member.bio}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {member.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary">{skill}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-center gap-2">
        <Button asChild>
          <Link to={`/profile/${member.slug}`}>{t("view_profile")}</Link>
        </Button>
        <Button variant="outline" asChild>
          <a href={member.cvUrl} target="_blank" rel="noreferrer">{t("download_cv")}</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default TeamCard;
