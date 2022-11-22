import React from "react";
import { Container } from "./partials/container";

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <Container>
      <div className="flex-auto h-full bg-slate-400">Home</div>
    </Container>
  );
};
