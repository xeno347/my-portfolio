"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef } from "react";
import {
  ROUTE_TRANSITION_START_EVENT,
  type RouteTransitionStartDetail,
} from "@/src/components/animations/route-transition-events";

export function RouteTransitionLayer() {
  const pathname = usePathname();
  const layerRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const firstRenderRef = useRef(true);
  const pendingTransitionRef = useRef(false);

  useLayoutEffect(() => {
    const layer = layerRef.current;
    const label = labelRef.current;

    if (!layer || !label) {
      return;
    }

    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      gsap.set(layer, { yPercent: -100, autoAlpha: 0 });
      gsap.set(label, { autoAlpha: 0, scale: 0.85 });
      return;
    }

    const timeline = gsap.timeline();

    if (pendingTransitionRef.current) {
      timeline
        .to(label, { autoAlpha: 0, duration: 0.15, ease: "power1.in" })
        .to(layer, {
          yPercent: -100,
          duration: 0.42,
          ease: "power4.inOut",
        })
        .set(layer, { autoAlpha: 0 });

      pendingTransitionRef.current = false;
    } else {
      timeline
        .set(layer, { yPercent: 100, autoAlpha: 1 })
        .set(label, { autoAlpha: 0, scale: 0.85 })
        .to(layer, {
          yPercent: 0,
          duration: 0.3,
          ease: "power3.inOut",
        })
        .to(
          label,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.2,
            ease: "power2.out",
          },
          "<",
        )
        .to(label, { autoAlpha: 0, duration: 0.12, ease: "power1.in" }, ">-0.03")
        .to(layer, {
          yPercent: -100,
          duration: 0.36,
          ease: "power4.inOut",
        })
        .set(layer, { autoAlpha: 0 });
    }

    return () => {
      timeline.kill();
    };
  }, [pathname]);

  useEffect(() => {
    const layer = layerRef.current;
    const label = labelRef.current;

    if (!layer || !label) {
      return;
    }

    const onStart = (_event: Event) => {
      const event = _event as CustomEvent<RouteTransitionStartDetail>;

      if (!event.detail?.href) {
        return;
      }

      pendingTransitionRef.current = true;

      gsap.killTweensOf([layer, label]);

      gsap.timeline()
        .set(layer, { yPercent: 100, autoAlpha: 1 })
        .set(label, { autoAlpha: 0, scale: 0.85 })
        .to(layer, {
          yPercent: 0,
          duration: 0.3,
          ease: "power3.inOut",
        })
        .to(
          label,
          {
            autoAlpha: 1,
            scale: 1,
            duration: 0.18,
            ease: "power2.out",
          },
          "<",
        );
    };

    window.addEventListener(ROUTE_TRANSITION_START_EVENT, onStart);

    return () => {
      window.removeEventListener(ROUTE_TRANSITION_START_EVENT, onStart);
    };
  }, []);

  return (
    <div ref={layerRef} className="pointer-events-none fixed inset-0 z-[90] bg-black">
      <div className="flex min-h-screen items-center justify-center">
        <div
          ref={labelRef}
          className="font-display text-[clamp(3rem,13vw,11rem)] uppercase tracking-wide text-[#dbf86f]"
        >
          Sharaj
        </div>
      </div>
    </div>
  );
}
