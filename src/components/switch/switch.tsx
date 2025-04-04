import React from "react";

export const Switch = ({
  checked,
  onCheckedChange,
}: {
  checked: boolean;
  onCheckedChange: (val: boolean) => void;
}) => {
  return (
    <label className="relative inline-block w-12 h-6">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onCheckedChange(e.target.checked)}
        className="sr-only peer"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full peer-checked:bg-purple-600 transition-colors"></div>
      <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transform peer-checked:translate-x-6 transition-transform"></div>
    </label>
  );
};
