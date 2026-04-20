"use client";

import gsap from "gsap";
import Image from "next/image";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type ProcessStickyHeroProps = {
  sticky?: boolean;
  title?: string;
};

export function ProcessStickyHero({ sticky = true, title = "Sharaj Singh Padda" }: ProcessStickyHeroProps) {
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const isProcessPageTitle = title.trim().toLowerCase() === "my process";
  const sectionRef = useRef<HTMLElement | null>(null);
  const processTitleRef = useRef<HTMLHeadingElement | null>(null);
  const accentRef = useRef<HTMLSpanElement | null>(null);
  const portraitRef = useRef<HTMLDivElement | null>(null);
  const gradientRef = useRef<HTMLDivElement | null>(null);
  const copyRef = useRef<HTMLParagraphElement | null>(null);
  const hintRef = useRef<HTMLParagraphElement | null>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const processTitle = processTitleRef.current;
    const accent = accentRef.current;
    const portrait = portraitRef.current;
    const gradient = gradientRef.current;
    const copy = copyRef.current;
    const hint = hintRef.current;

    if (!section || !processTitle || !accent || !portrait || !gradient || !copy || !hint) {
      return;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=140%",
          scrub: true,
        },
      });

      timeline
        .to(processTitle, { yPercent: -12, scale: 0.92, ease: "none" }, 0)
        .to(accent, { yPercent: -8, xPercent: 3, rotation: -1.5, ease: "none" }, 0)
        .to(portrait, { yPercent: 6, scale: 1.04, ease: "none" }, 0)
        .to(gradient, { opacity: 0.96, yPercent: 10, ease: "none" }, 0)
        .to(copy, { yPercent: -8, opacity: 1, ease: "none" }, 0)
        .to(hint, { yPercent: -10, opacity: 1, ease: "none" }, 0);
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const image = new window.Image();
    image.src = "/sharaj-hero.jpg";

    image.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      const context = canvas.getContext("2d");

      if (!context) {
        return;
      }

      context.drawImage(image, 0, 0);
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      const { data } = imageData;

      // Remove near-neutral light background tones (checkerboard whites/grays) while preserving subject edges.
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];

        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const saturation = max - min;
        const brightness = (r + g + b) / 3;
        const nearNeutral = saturation < 24;

        if (nearNeutral && brightness > 188) {
          data[i + 3] = 0;
        } else if (nearNeutral && brightness > 162) {
          data[i + 3] = Math.max(0, Math.min(255, (188 - brightness) * 10));
        }
      }

      context.putImageData(imageData, 0, 0);
      setProcessedSrc(canvas.toDataURL("image/png"));
    };

    image.onerror = () => {
      setImageFailed(true);
    };
  }, []);

  return (
    <section ref={sectionRef} className={`relative bg-[#eae6dd] ${sticky ? "min-h-[170vh]" : "min-h-screen"}`}>
      <div className={sticky ? "sticky top-0 h-screen overflow-hidden" : "relative h-screen overflow-hidden"}>
        <div className="process-spacer-nav" />

        <section className="process-padding-global relative h-[calc(100svh-var(--wf-navbar-height))]">
          <div className="process-container-large process-hero-content">
            <div className="relative w-full">
              <h1
                ref={processTitleRef}
                className="process-title text-black"
              >
                {isProcessPageTitle ? (
                  <>
                    <span className="process-title-main">Process</span>
                    <span
                      ref={accentRef}
                      className="process-title-accent is-process-page"
                    >
                      My
                    </span>
                  </>
                ) : (
                  <>
                    <span className="sr-only">{title}</span>
                    <span
                      ref={accentRef}
                      className="process-title-accent is-signature"
                    >
                      {title}
                    </span>
                  </>
                )}
              </h1>
            </div>

            <div className="process-grid-12 process-description-grid wf-text-main">
              <p
                ref={copyRef}
                className="process-description text-black"
              >
                {isProcessPageTitle
                  ? "Your website either communicates your expertise or it does not. I build digital systems that make your value obvious and decisions easier."
                  : "Technologist and IT Director focused on systems architecture, UI/UX design, and full-stack SaaS products across agriculture and renewable bio-energy."}
              </p>
              <p
                ref={hintRef}
                className="process-scroll-instruction text-black"
              >
                {isProcessPageTitle ? "(Scroll to my system)" : "(Scroll to my timeline)"}
              </p>
            </div>

            <div
              ref={portraitRef}
              className="process-hero-image pointer-events-none"
            >
              {!imageFailed ? (
                <Image
                  src={processedSrc ?? "/sharaj-hero.jpg"}
                  alt="Sharaj Singh Padda portrait"
                  fill
                  sizes="100vw"
                  className="process-portrait-media"
                  unoptimized={Boolean(processedSrc)}
                  style={{
                    filter: "grayscale(100%) contrast(180%) brightness(0.45)",
                  }}
                  onError={() => {
                    setImageFailed(true);
                  }}
                />
              ) : (
                <div
                  className="mx-auto h-full w-[min(44vw,42rem)]"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(35,35,35,0.94) 0%, rgba(8,8,8,1) 75%, rgba(5,5,5,1) 100%)",
                    borderRadius: "46% 46% 0 0 / 34% 34% 0 0",
                  }}
                />
              )}
            </div>

            <div
              ref={gradientRef}
              className="process-hero-gradient pointer-events-none"
            />
          </div>
        </section>
      </div>
    </section>
  );
}
