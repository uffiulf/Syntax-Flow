import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";

const Footer = () => {
  const { t } = useTranslation("common");

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
  ];

  return (
    <footer className="bg-card border-t border-border mt-20" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/60 rounded-lg flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="M2 17l10 5 10-5" />
                  <path d="M2 12l10 5 10-5" />
                </svg>
              </div>
              <span className="text-lg">Team Portfolio</span>
            </div>
            <p className="text-muted-foreground mb-4">
              {t("hero.pitch")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">{t("nav.home")}</Link></li>
              <li><Link to="/team" className="text-muted-foreground hover:text-foreground transition-colors">{t("nav.team")}</Link></li>
              <li><Link to="/projects" className="text-muted-foreground hover:text-foreground transition-colors">{t("nav.projects")}</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4">{t("footer.legal", "Legal")}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t("footer.privacy", "Privacy Policy")}</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">{t("footer.terms", "Terms of Service")}</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Team Portfolio. {t("footer.rights", "All rights reserved.")}
          </p>

          {/* Social Links */}
          <div className="flex items-center space-x-4" aria-label="Social links">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.href} aria-label={social.label} className="text-muted-foreground hover:text-foreground transition-colors">
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </div>

          {/* Toggles */}
          <div className="flex items-center space-x-2">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;