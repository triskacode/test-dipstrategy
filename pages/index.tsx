import { GetServerSideProps, NextPage } from "next";
import { Home } from "src/modules/home";

const Page: NextPage = () => {
  return <Home />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Page;
