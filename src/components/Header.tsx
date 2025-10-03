import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const Header = () => {
  const { t } = useTranslation("common");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-colors duration-300",
      scrolled ? "backdrop-blur-md bg-background/70 border-b border-border/40 shadow-sm" : "bg-transparent border-b border-transparent"
    )}>
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 -top-1 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/20 to-transparent" />
      </div>
      <div className="relative container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold sm:inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">TeamPortfolio</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }), "hover:text-primary transition-colors")}> {t('home')} </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/team">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }), "hover:text-primary transition-colors")}> {t('team')} </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/projects">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }), "hover:text-primary transition-colors")}> {t('projects')} </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }), "hover:text-primary transition-colors")}> {t('blog')} </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }), "hover:text-primary transition-colors")}> {t('contact')} </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="relative flex flex-1 items-center justify-end space-x-2">
          <LanguageToggle />
            <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;