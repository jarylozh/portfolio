"use client";

import { type MouseEvent } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

gsap.registerPlugin(ScrollToPlugin);

const sections = [
  { label: "About", href: "#hero" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
];

const NAV_OFFSET = 64;

function handleNavClick(href: string) {
  return (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    gsap.to(window, {
      duration: 1.2,
      scrollTo: { y: target as Element, offsetY: NAV_OFFSET },
      ease: "power2.inOut",
    });
    history.replaceState(null, "", href);
  };
}

export function SiteNav() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-center gap-4 px-5 py-4 sm:px-8 md:px-12 lg:px-24">
        <NavigationMenu>
          <NavigationMenuList className="gap-0 sm:gap-1">
            {sections.map((section) => (
              <NavigationMenuItem key={section.href}>
                <NavigationMenuLink
                  render={
                    <a
                      className="text-foreground"
                      href={section.href}
                      onClick={handleNavClick(section.href)}
                    />
                  }
                  className="rounded-none px-2 text-sm tracking-widest uppercase text-foreground font-heading transition-[text-decoration] hover:bg-transparent hover:underline hover:underline-offset-4 focus:bg-transparent sm:px-3 sm:text-base"
                >
                  {section.label} 
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
