import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { setPageMeta } from "@/lib/utils";

const Contact = () => {
  const { t } = useTranslation("common");

  useEffect(() => {
    setPageMeta(`${t('nav.contact')} | Team Portfolio`, t('hero.pitch'));
  }, [t]);

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {t("nav.contact")}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        {t('hero.pitch')}
      </p>
      <div className="mt-8">
        <Button asChild>
          <a href="mailto:contact@example.com">{t("contact_us")}</a>
        </Button>
      </div>
    </div>
  );
};

export default Contact;
