import React from "react";

export default function TabButton({ active, selectTab, children }: any) {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-gray-400 ";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}
