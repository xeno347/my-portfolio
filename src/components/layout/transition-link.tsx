"use client";

import Link, { type LinkProps } from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";
import { dispatchRouteTransitionStart } from "@/src/components/animations/route-transition-events";

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

  // Ensure GitHub Pages (basePath) always works for internal navigation.
  // In `output: "export"`, `router.push("/contact")` can break when hosted under `/<repo>/`.
  const internalHref = !isExternalHref && hrefString.startsWith("/")
    ? `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${hrefString}`
    : hrefString;

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

    if (currentPath === hrefString) {
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
      href={href}
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
