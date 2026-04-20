"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type NoteScrollerProps = {
  accent: string;
  message: string;
};

export function NoteScroller({ accent, message }: NoteScrollerProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const noteRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const wrapper = wrapperRef.current;
    const note = noteRef.current;

    if (!wrapper || !note) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(note, { opacity: 0.2, y: 84, scale: 0.9 });

      gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      })
      .to(note, { opacity: 1, y: 0, scale: 1, ease: "none", duration: 0.5 })
      .to(note, { opacity: 0.28, y: -56, ease: "none", duration: 0.5 });
    }, wrapper);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div ref={wrapperRef} className="relative h-[300vh] bg-[#e9e4d9]">
      <section className="sticky top-0 flex min-h-screen items-center justify-center border-y border-black/20 px-6 md:px-10 lg:px-14">
        <div ref={noteRef} className="mx-auto max-w-[70vw] text-center">
          <h2 className="font-display text-[clamp(3rem,9.6vw,7.5rem)] leading-[0.84] uppercase tracking-[-0.02em] text-black">
            <span className="text-[#f05235]">{accent}</span> {message}
          </h2>
        </div>
      </section>
    </div>
  );
}
