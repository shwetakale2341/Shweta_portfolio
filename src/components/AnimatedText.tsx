import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function Character({
  char,
  index,
  total,
  progress,
}: {
  char: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = start + 1 / total;
  const opacity = useTransform(progress, [start, end], [0.2, 1]);

  return (
    <span style={{ position: "relative", display: "inline" }}>
      <span style={{ visibility: "hidden" }}>{char}</span>
      <motion.span
        style={{ position: "absolute", left: 0, top: 0, opacity }}
      >
        {char}
      </motion.span>
    </span>
  );
}

function AnimatedText({
  text,
  className = "",
  style,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");
  let globalIndex = 0;
  const total = text.length;

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((word, wi) => {
        const wordSpan = (
          <span key={`w-${wi}`} style={{ display: "inline-block" }}>
            {word.split("").map((char, ci) => {
              const el = (
                <Character
                  key={ci}
                  char={char}
                  index={globalIndex}
                  total={total}
                  progress={scrollYProgress}
                />
              );
              globalIndex += 1;
              return el;
            })}
          </span>
        );
        const isLast = wi === words.length - 1;
        if (!isLast) {
          globalIndex += 1;
        }
        return (
          <React.Fragment key={`f-${wi}`}>
            {wordSpan}
            {!isLast ? " " : null}
          </React.Fragment>
        );
      })}
    </p>
  );
}

export default AnimatedText;
