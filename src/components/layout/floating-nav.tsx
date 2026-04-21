"use client";

import gsap from "gsap";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { TransitionLink } from "@/src/components/layout/transition-link";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/my-journey", label: "My Journey" },
  { href: "/process", label: "My Process" },
  { href: "/about", label: "About" },
] as const;

export function FloatingNav() {
  const pathname = usePathname() ?? "/";
  const navRef = useRef<HTMLElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const tileRef = useRef<HTMLDivElement | null>(null);
  const tileBgRef = useRef<HTMLDivElement | null>(null);
  const menuItemsRef = useRef<Array<HTMLLIElement | null>>([]);
  const barTopRef = useRef<HTMLSpanElement | null>(null);
  const barMidRef = useRef<HTMLSpanElement | null>(null);
  const barBottomRef = useRef<HTMLSpanElement | null>(null);
  const menuTimelineRef = useRef<gsap.core.Timeline | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nav = navRef.current;

    if (!nav) {
      return;
    }

    let previousY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (menuOpen) {
        return;
      }

      if (ticking) {
        return;
      }

      ticking = true;

      window.requestAnimationFrame(() => {
        const currentY = window.scrollY;
        const delta = currentY - previousY;

        if (Math.abs(delta) > 4) {
          gsap.to(nav, {
            yPercent: delta > 0 && currentY > 80 ? -125 : 0,
            duration: 0.44,
            ease: "power3.out",
            overwrite: true,
          });
        }

        previousY = currentY;
        ticking = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [menuOpen]);

  useLayoutEffect(() => {
    const overlay = overlayRef.current;
    const tile = tileRef.current;
    const tileBg = tileBgRef.current;

    if (!overlay || !tile || !tileBg) {
      return;
    }

    gsap.set(overlay, { autoAlpha: 0, pointerEvents: "none" });
    gsap.set(tile, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });
    gsap.set(tileBg, { yPercent: 8, scale: 1.08, rotate: 0.001 });

    const items = menuItemsRef.current.filter(Boolean) as HTMLLIElement[];
    gsap.set(items, { yPercent: 120, rotate: 4, opacity: 0 });

    const timeline = gsap.timeline({ paused: true });

    timeline
      .set(overlay, { pointerEvents: "auto" })
      .to(overlay, { autoAlpha: 1, duration: 0.18, ease: "none" })
      .to(
        tile,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 0.62,
          ease: "power3.inOut",
        },
        0,
      )
      .to(
        tileBg,
        {
          yPercent: 0,
          scale: 1,
          duration: 0.62,
          ease: "power3.out",
        },
        0,
      )
      .to(
        items,
        {
          yPercent: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.52,
          ease: "power3.out",
        },
        0.22,
      );

    timeline.eventCallback("onReverseComplete", () => {
      gsap.set(overlay, { pointerEvents: "none" });
    });

    menuTimelineRef.current = timeline;

    return () => {
      timeline.kill();
    };
  }, []);

  useEffect(() => {
    const top = barTopRef.current;
    const mid = barMidRef.current;
    const bottom = barBottomRef.current;

    if (top && mid && bottom) {
      const barsTl = gsap.timeline({ defaults: { duration: 0.28, ease: "power2.out" } });

      if (menuOpen) {
        barsTl
          .to(top, { y: 7, rotate: 45 }, 0)
          .to(mid, { opacity: 0 }, 0)
          .to(bottom, { y: -7, rotate: -45 }, 0);
      } else {
        barsTl
          .to(top, { y: 0, rotate: 0 }, 0)
          .to(mid, { opacity: 1 }, 0)
          .to(bottom, { y: 0, rotate: 0 }, 0);
      }
    }

    const timeline = menuTimelineRef.current;

    if (!timeline) {
      return;
    }

    if (menuOpen) {
      timeline.play();
    } else {
      timeline.reverse();
    }
  }, [menuOpen]);

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const avatarSrc = `${basePath}/sharaj-hero.jpg`;

  return (
    <>
      <header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-[80] bg-transparent px-6 py-3 md:px-10 md:py-4 lg:px-14"
      >
        <div className="mx-auto grid max-w-[120rem] grid-cols-12 items-center gap-4 border border-black/12 bg-[#eae6dd] px-3 py-2 md:px-4">
          <TransitionLink
            href="/"
            className="col-span-4 font-display text-[2.25rem] leading-none uppercase tracking-tight md:col-span-2"
          >
            SP
          </TransitionLink>

          <nav className="col-span-5 hidden items-center justify-center gap-8 md:flex md:col-span-8">
            {navLinks.map((link) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                className={`font-mono text-[10px] uppercase tracking-[0.28em] transition-all ${
                  isActiveRoute(link.href)
                    ? "border-b border-black pb-1 text-black"
                    : "text-black/70 hover:text-black"
                }`}
              >
                {link.label}
              </TransitionLink>
            ))}
          </nav>

          <div className="col-span-8 flex items-center justify-end gap-1.5 md:col-span-2">
            <TransitionLink
              href="/contact"
              className="hidden h-[2rem] items-center gap-2 border border-black bg-black px-3 font-mono text-[10px] uppercase tracking-[0.2em] text-[#f2f0e9] sm:inline-flex"
            >
              <span className="relative h-4 w-4 overflow-hidden rounded-sm bg-white/20">
                <Image
                  src={avatarSrc}
                  alt=""
                  fill
                  sizes="16px"
                  className="object-cover"
                />
              </span>
              Let&apos;s Talk
            </TransitionLink>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen((open) => !open)}
              className="relative inline-flex h-[2rem] w-[2rem] items-center justify-center border border-black bg-black text-[#f2f0e9]"
            >
              <span ref={barTopRef} className="absolute h-[1px] w-5 bg-current" style={{ top: 12 }} />
              <span ref={barMidRef} className="absolute h-[1px] w-5 bg-current" />
              <span ref={barBottomRef} className="absolute h-[1px] w-5 bg-current" style={{ bottom: 12 }} />
            </button>
          </div>
        </div>
      </header>

      <div ref={overlayRef} className="fixed inset-0 z-[70]">
        <div ref={tileRef} className="absolute inset-0 bg-[#f05235]">
          <div
            ref={tileBgRef}
            className="pointer-events-none absolute inset-0 opacity-55"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 12%, rgba(242,240,233,0.35), transparent 42%), radial-gradient(circle at 80% 78%, rgba(0,0,0,0.22), transparent 50%)",
            }}
          />
          <div className="flex min-h-screen flex-col justify-between px-6 py-8 md:px-10 md:py-10 lg:px-14">
            <div className="pt-20 md:pt-24" />
            <ul className="space-y-3 md:space-y-5">
              {[
                { href: "/", label: "Home" },
                ...navLinks,
                { href: "/contact", label: "Contact" },
              ].map((link, index) => (
                <li
                  key={link.href}
                  ref={(node) => {
                    menuItemsRef.current[index] = node;
                  }}
                  className="overflow-hidden"
                >
                  <TransitionLink
                    href={link.href}
                    onNavigate={() => setMenuOpen(false)}
                    className={`font-display text-[clamp(2.5rem,11vw,9rem)] uppercase leading-[0.88] transition-opacity ${
                      isActiveRoute(link.href) ? "text-black" : "text-black/80 hover:text-black"
                    }`}
                  >
                    {link.label}
                  </TransitionLink>
                </li>
              ))}
            </ul>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-black/80">
              Sharaj Singh Padda • Systems Architecture • UI/UX • Full-Stack
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
