import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Code, Cloud, Users, Palette } from "lucide-react";
import { useTranslation } from "react-i18next";

const items = [
  { icon: Code, key: "development" },
  { icon: Cloud, key: "devops" },
  { icon: Users, key: "projectManagement" },
  { icon: Palette, key: "design" },
] as const;

export default function Offerings() {
  const { t } = useTranslation("common");
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
      {items.map(({ icon: Icon, key }) => (
        <Card key={key} className="text-center hover:shadow-xl transition-shadow rounded-2xl">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon className="h-8 w-8 text-primary" />
              </div>
            </div>
            <h3 className="font-semibold">{t(`offerings.${key}`)}</h3>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">&nbsp;</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

