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

  const prefetchRoute = () => {
    if (prefetchedRef.current) {
      return;
    }

    prefetchedRef.current = true;
    router.prefetch(hrefString);
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!canHandleClientTransition(event)) {
      return;
    }

    const currentPath = pathname ?? "/";

    if (currentPath === hrefString) {
      onNavigate?.();
      return;
    }

    event.preventDefault();
    prefetchRoute();
    dispatchRouteTransitionStart({ href: hrefString });
    onNavigate?.();

    const delay = prefetchedRef.current ? 120 : 190;

    window.setTimeout(() => {
      router.push(hrefString);
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
