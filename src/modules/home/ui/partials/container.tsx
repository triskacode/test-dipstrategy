import React from "react";
import { Layout } from "src/common/ui/layout";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <Layout>{children}</Layout>;
};
