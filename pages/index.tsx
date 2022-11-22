import { GetServerSideProps, NextPage } from "next";

const Page: NextPage = () => {
  return <div>hello world</div>;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Page;
