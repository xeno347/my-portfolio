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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.025,
      ease: "easeOut",
    },
  },
};

const itemVariants = {
  hidden: { y: "0.65em", opacity: 0 },
  visible: {
    y: "0em",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
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
      <motion.span
        ref={rootRef}
        className="inline-block overflow-hidden align-bottom"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ delay }}
      >
        {tokens.map((token, index) => (
          <motion.span
            key={`${token}-${index}`}
            variants={itemVariants}
            className="inline-block"
            aria-hidden="true"
          >
            {token === " " ? "\u00A0" : token}
            {mode === "words" && index !== tokens.length - 1 ? "\u00A0" : ""}
          </motion.span>
        ))}
      </motion.span>
    </Tag>
  );
}
