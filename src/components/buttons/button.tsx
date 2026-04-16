import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "rounded-xl px-4 py-2 text-sm font-medium text-neutral-950 transition dark:text-white",
        "glass-panel hover:bg-white/55 dark:hover:bg-white/25",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export const ArrowButton = ({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={cn(
        "rounded-lg px-2 py-1.5 text-sm font-semibold text-neutral-950 transition dark:text-white",
        "glass-panel hover:bg-white/55 dark:hover:bg-white/25",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900 dark:focus-visible:outline-neutral-100",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
