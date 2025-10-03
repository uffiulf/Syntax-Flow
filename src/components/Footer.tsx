import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation("common");

  return (
    <footer className="border-t" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} TeamPortfolio. {t("footer.rights")}
        </p>
        <div
          className="flex items-center space-x-4 mt-4 sm:mt-0"
          aria-label="Social links"
        >
          {/* Social links can be added here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;