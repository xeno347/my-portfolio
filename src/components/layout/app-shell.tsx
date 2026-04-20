"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { FloatingNav } from "@/src/components/layout/floating-nav";
import { RouteTransitionLayer } from "@/src/components/animations/route-transition-layer";
import { SiteFooter } from "@/src/components/layout/site-footer";
import { SiteCta } from "@/src/components/sections/site-cta";

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  const pathname = usePathname() ?? "/";
  const showGlobalCta = pathname !== "/process" && pathname !== "/contact";

  return (
    <>
      <RouteTransitionLayer />
      <FloatingNav />
      <div>
        {children}
        {showGlobalCta ? <SiteCta /> : null}
        <SiteFooter />
      </div>
    </>
  );
}
