"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { dispatchRouteTransitionStart } from "@/src/components/animations/route-transition-events";
import { withBasePath } from "@/src/lib/base-path";

type TransitionLinkProps = Omit<LinkProps, "onClick"> & {
  children: ReactNode;
  className?: string;
  onNavigate?: () => void;
};

function canHandleClientTransition(event: MouseEvent<HTMLAnchorElement>) {
  return !(
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  );
}

export function TransitionLink({ href, children, className, onNavigate, ...props }: TransitionLinkProps) {
  const router = useRouter();
  const pathname = usePathname();
  const prefetchedRef = useRef(false);

  const hrefString = typeof href === "string" ? href : href.toString();
  const isExternalHref = /^([a-z][a-z0-9+.-]*:|\/\/)/i.test(hrefString);

  // For internal routes, always render and navigate with basePath.
  const internalHref = !isExternalHref ? withBasePath(hrefString) : hrefString;

  const prefetchRoute = () => {
    if (prefetchedRef.current || isExternalHref) {
      return;
    }

    prefetchedRef.current = true;
    router.prefetch(internalHref);
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!canHandleClientTransition(event) || isExternalHref) {
      return;
    }

    const currentPath = pathname ?? "/";

    // Compare against the internal href (includes basePath) so GitHub Pages navigation works reliably.
    if (currentPath === internalHref) {
      onNavigate?.();
      return;
    }

    event.preventDefault();
    prefetchRoute();
    dispatchRouteTransitionStart({ href: internalHref });
    onNavigate?.();

    const delay = prefetchedRef.current ? 120 : 190;

    window.setTimeout(() => {
      router.push(internalHref);
    }, delay);
  };

  return (
    <Link
      href={internalHref}
      className={className}
      onMouseEnter={prefetchRoute}
      onFocus={prefetchRoute}
      onClick={handleClick}
      {...props}
    >
      {children}
    </Link>
  );
}
