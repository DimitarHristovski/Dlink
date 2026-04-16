"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const SNIPPETS = [
  "const fn = async () => {",
  "return <motion.div />;",
  "export default App;",
  "useEffect(() => {}, []);",
  'className={cn("flex")}',
  "await fetch('/api');",
  "type Props = { id: string };",
  "{ data?.map((x) =>",
  'import { useState } from "react";',
  "<Fragment key={i}>",
  "if (!mounted) return null;",
  "dark:from-neutral-950",
  "npm run build",
  'git commit -m "feat"',
  "pointer-events-none",
  "transition={{ type: 'spring' }}",
  "Array.from({ length: n })",
  "structuredClone(data)",
  "crypto.randomUUID()",
  "document.documentElement",
  "<Suspense fallback={null}>",
  "revalidatePath('/')",
  "params: Promise<{ id: string }>",
];

type Piece = {
  id: number;
  text: string;
  left: number;
  top: number;
  rotate: number;
  size: number;
  delay: number;
  duration: number;
};

export function ScatteredCodeBackground() {
  const reduceMotion = useReducedMotion();
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    const count = 32;
    const next: Piece[] = [];
    for (let i = 0; i < count; i++) {
      next.push({
        id: i,
        text: SNIPPETS[Math.floor(Math.random() * SNIPPETS.length)] ?? "",
        left: Math.random() * 94 + 3,
        top: Math.random() * 94 + 3,
        rotate: Math.random() * 36 - 18,
        size: 9 + Math.random() * 9,
        delay: Math.random() * 5,
        duration: 16 + Math.random() * 16,
      });
    }
    setPieces(next);
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[1] select-none overflow-hidden"
      aria-hidden
    >
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          className="absolute max-w-[min(100vw,28rem)] truncate whitespace-nowrap font-mono text-neutral-900/[0.09] dark:text-white/[0.1]"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}px`,
          }}
          initial={{ opacity: 0.25, rotate: p.rotate }}
          animate={
            reduceMotion
              ? { opacity: 0.22, rotate: p.rotate }
              : {
                  x: [0, 14, -10, 6, 0],
                  y: [0, -12, 8, -4, 0],
                  rotate: [p.rotate, p.rotate + 4, p.rotate - 3, p.rotate + 2, p.rotate],
                  opacity: [0.2, 0.38, 0.28, 0.34, 0.22],
                }
          }
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut" as const,
          }}
        >
          {p.text}
        </motion.span>
      ))}
    </div>
  );
}
