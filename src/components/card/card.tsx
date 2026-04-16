"use client";

import { motion, useReducedMotion } from "framer-motion";
import React from "react";
import { cn } from "@/lib/utils";

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(
        "rounded-2xl glass-panel text-neutral-950 dark:text-white",
        className
      )}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -5,
              scale: 1.02,
              transition: { type: "spring", stiffness: 420, damping: 26 },
            }
      }
      whileTap={reduceMotion ? undefined : { scale: 0.99 }}
    >
      {children}
    </motion.div>
  );
};

export const CardContent = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <div className={cn("p-4", className)}>{children}</div>;
};
