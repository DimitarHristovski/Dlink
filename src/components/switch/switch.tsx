import React from "react";

export const Switch = ({
  checked,
  onCheckedChange,
  "aria-label": ariaLabel,
}: {
  checked: boolean;
  onCheckedChange: (val: boolean) => void;
  "aria-label"?: string;
}) => {
  return (
    <label className="relative inline-block h-7 w-12 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="peer sr-only"
        aria-label={ariaLabel}
      />
      <div className="absolute inset-0 rounded-full bg-neutral-300/80 transition peer-checked:bg-neutral-800 dark:bg-neutral-600/80 dark:peer-checked:bg-neutral-200" />
      <div className="absolute left-0.5 top-0.5 h-6 w-6 rounded-full bg-white shadow-md transition-transform peer-checked:translate-x-5 dark:bg-neutral-100" />
    </label>
  );
};
