import React, { useEffect, useRef } from "react";
import { twMerge } from "tailwind-merge";
import { BaseLayout } from "./base-layout";
import { Footer } from "./partials/footer";
import { Header } from "./partials/header";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  const footerRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window) {
      const updateMarginBottom = () => {
        const height = footerRef.current?.clientHeight ?? 0;

        if (mainRef.current) {
          mainRef.current.style.marginBottom = height + "px";
        }
      };

      updateMarginBottom();
      window.addEventListener("resize", updateMarginBottom);

      return () => {
        window.removeEventListener("resize", updateMarginBottom);
      };
    }
  }, []);

  return (
    <BaseLayout>
      <Header />
      <div
        className={twMerge(
          "relative h-full min-h-screen flex flex-col",
          className
        )}
      >
        <main ref={mainRef} className="flex-auto h-full flex flex-col">
          {children}
        </main>
        <Footer ref={footerRef} />
      </div>
    </BaseLayout>
  );
};
