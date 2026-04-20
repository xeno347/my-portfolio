"use client";

import { motion, useInView } from "framer-motion";
import { useMemo, useRef } from "react";

type SplitMode = "words" | "chars";
type HeadingTag = "h1" | "h2";

type SplitTextRevealProps = {
  text: string;
  as?: HeadingTag;
  mode?: SplitMode;
  className?: string;
  once?: boolean;
  delay?: number;
};

export function SplitTextReveal({
  text,
  as = "h2",
  mode = "chars",
  className,
  once = true,
  delay = 0,
}: SplitTextRevealProps) {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(rootRef, {
    once,
    amount: 0.35,
    margin: "0px 0px -8% 0px",
  });

  const tokens = useMemo(() => {
    if (mode === "words") {
      return text.split(" ");
    }

    return Array.from(text);
  }, [mode, text]);

  const Tag = as;

  return (
    <Tag className={className}>
      <span
        ref={rootRef}
        className="inline-block overflow-hidden align-bottom"
      >
        {tokens.map((token, index) => (
          <motion.span
            key={`${token}-${index}`}
            className="inline-block"
            aria-hidden="true"
            initial={{ y: "0.65em", opacity: 0 }}
            animate={isInView ? { y: "0em", opacity: 1 } : { y: "0.65em", opacity: 0 }}
            transition={{ duration: 0.6, delay: delay + index * 0.025 }}
          >
            {token === " " ? "\u00A0" : token}
            {mode === "words" && index !== tokens.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </span>
    </Tag>
  );
}
