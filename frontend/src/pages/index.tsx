import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { GetServerSideProps, NextPage } from "next";
import { getServerSession } from "next-auth";
import { getAuthOptions } from "./api/auth/[...nextauth]";
import Hero from "../components/Hero";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  return {
    props: {
      session: await getServerSession(req, res, getAuthOptions(req)),
    },
  };
};

const Home: NextPage = () => {
  return (
    <div className="h-screen">
      <Hero />
      <ConnectButton
        accountStatus={"address"}
        showBalance={false}
        label="Connect"
        chainStatus={"icon"}
      />
    </div>
  );
};

export default Home;
