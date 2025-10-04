import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { setPageMeta } from "@/lib/utils";

const Blog = () => {
  const { t } = useTranslation("common");
  useEffect(() => {
    setPageMeta(`${t('nav.blog')} | Team Portfolio`, t('hero.pitch'));
  }, [t]);
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
        {t('nav.blog')}
      </h1>
      <p className="mt-4 text-lg text-muted-foreground">
        Coming soon.
      </p>
    </div>
  );
};

export default Blog;
