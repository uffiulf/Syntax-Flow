import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation("common");
  useEffect(() => {
    document.title = `404 | ${t("notFound.title")} | Team Portfolio`;
  }, [t]);
  return (
    <div className="text-center" role="alert" aria-live="polite">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-2xl font-semibold">{t("notFound.title")}</p>
      <p className="mt-4 text-muted-foreground">
        {t("notFound.message")}
      </p>
      <div className="mt-8">
        <Button asChild>
          <Link to="/">{t("goHome")}</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
