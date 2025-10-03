import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from "@/components/ui/navigation-menu";
import LanguageToggle from "./LanguageToggle";
import ThemeToggle from "./ThemeToggle";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const { t } = useTranslation("common");

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold sm:inline-block">TeamPortfolio</span>
        </Link>
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link to="/">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }))}>
                  {t('home')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/team">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }))}>
                  {t('team')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/projects">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }))}>
                  {t('projects')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/blog">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }))}>
                  {t('blog')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/contact">
                <NavigationMenuLink className={cn(buttonVariants({ variant: "ghost" }))}>
                  {t('contact')}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageToggle />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;