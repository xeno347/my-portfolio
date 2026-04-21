"use client";

import gsap from "gsap";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { useEffect, useRef } from "react";
import { withBasePath } from "@/src/lib/base-path";

type SharedProps = {
  children: ReactNode;
  className?: string;
};

type MagneticButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type MagneticButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type MagneticButtonProps = MagneticButtonAsButton | MagneticButtonAsAnchor;

function isAnchorProps(props: { href?: string }): props is { href: string } {
  return typeof props.href === "string";
}

export function MagneticButton({
  children,
  className,
  ...elementProps
}: MagneticButtonProps) {
  const buttonRef = useRef<HTMLElement | null>(null);
  const contentRef = useRef<HTMLSpanElement | null>(null);
  const borderRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const content = contentRef.current;
    const border = borderRef.current;

    if (!button || !content || !border) {
      return;
    }

    const xToContent = gsap.quickTo(content, "x", {
      duration: 0.35,
      ease: "power3.out",
    });
    const yToContent = gsap.quickTo(content, "y", {
      duration: 0.35,
      ease: "power3.out",
    });
    const xToBorder = gsap.quickTo(border, "x", {
      duration: 0.45,
      ease: "power3.out",
    });
    const yToBorder = gsap.quickTo(border, "y", {
      duration: 0.45,
      ease: "power3.out",
    });

    const onMouseMove = (event: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const mx = event.clientX - (rect.left + rect.width / 2);
      const my = event.clientY - (rect.top + rect.height / 2);

      xToContent(gsap.utils.clamp(-8, 8, mx * 0.18));
      yToContent(gsap.utils.clamp(-8, 8, my * 0.18));
      xToBorder(gsap.utils.clamp(-12, 12, mx * 0.25));
      yToBorder(gsap.utils.clamp(-12, 12, my * 0.25));
    };

    const onMouseLeave = () => {
      xToContent(0);
      yToContent(0);
      xToBorder(0);
      yToBorder(0);
    };

    button.addEventListener("mousemove", onMouseMove);
    button.addEventListener("mouseleave", onMouseLeave);

    return () => {
      button.removeEventListener("mousemove", onMouseMove);
      button.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  const sharedClassName = `group relative inline-flex items-center justify-center overflow-hidden rounded-none border border-black bg-black/95 px-8 py-4 text-sm uppercase tracking-[0.2em] text-[#f2f0e9] ${className ?? ""}`;

  const content = (
    <>
      <span
        ref={borderRef}
        className="pointer-events-none absolute inset-0 border border-black/35"
      />
      <span ref={contentRef} className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
    </>
  );

  if (isAnchorProps(elementProps)) {
    const { href, ...anchorProps } = elementProps;

    const resolvedHref = /^([a-z][a-z0-9+.-]*:|\/\/|mailto:|tel:)/i.test(href)
      ? href
      : withBasePath(href);

    return (
      <a
        ref={(node) => {
          buttonRef.current = node;
        }}
        href={resolvedHref}
        className={sharedClassName}
        {...anchorProps}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      ref={(node) => {
        buttonRef.current = node;
      }}
      className={sharedClassName}
      {...elementProps}
    >
      {content}
    </button>
  );
}
