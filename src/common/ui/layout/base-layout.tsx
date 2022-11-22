import React from "react";
import { twMerge } from "tailwind-merge";

interface BaseLayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const BaseLayout: React.FC<BaseLayoutProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={twMerge(
        "w-full min-h-screen bg-slate-50 overflow-x-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};
