"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

type PageLoaderProps = {
  name?: string;
};

export function PageLoader({ name = "SHARAJ SINGH PADDA" }: PageLoaderProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const nameRef = useRef<HTMLHeadingElement | null>(null);
  const [isVisible, setIsVisible] = useState<boolean>(true);

  useEffect(() => {
    if (!isVisible || !containerRef.current || !nameRef.current) {
      return;
    }

    const root = document.documentElement;
    const body = document.body;
    const previousRootOverflow = root.style.overflow;
    const previousBodyOverflow = body.style.overflow;

    root.style.overflow = "hidden";
    body.style.overflow = "hidden";

    gsap.set(nameRef.current, { "--liquid-fill": "0%" });

    const timeline = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        root.style.overflow = previousRootOverflow;
        body.style.overflow = previousBodyOverflow;
        setIsVisible(false);
      },
    });

    timeline.fromTo(
      nameRef.current,
      {
        "--liquid-fill": "0%",
      },
      {
        "--liquid-fill": "100%",
        duration: 2.1,
        ease: "power2.inOut",
      },
    );

    timeline.to(
      containerRef.current,
      {
        autoAlpha: 0,
        yPercent: -100,
        duration: 0.65,
        ease: "power4.inOut",
      },
      "+=0.02",
    );

    return () => {
      root.style.overflow = previousRootOverflow;
      body.style.overflow = previousBodyOverflow;
      timeline.kill();
    };
  }, [isVisible]);

  if (!isVisible) {
    return null;
  }

  return (
    <div ref={containerRef} className="loader-liquid-shell" aria-hidden="true">
      <div className="loader-liquid-backdrop" />
      <div className="loader-liquid-content">
        <p className="loader-liquid-kicker">Loading Home</p>
        <h1
          ref={nameRef}
          className="loader-liquid-name"
          style={{ ["--liquid-fill" as string]: "0%" }}
        >
          <span className="loader-liquid-name-outline">{name}</span>
          <span className="loader-liquid-name-fill-wrap" aria-hidden="true">
            <span className="loader-liquid-name-fill">{name}</span>
          </span>
        </h1>
      </div>
    </div>
  );
}
