import Head from "next/head";
import ImageCard from "../components/ImageCard";
import { useState } from "react";
import ConnectInfo from "../components/ConnectInfo";
import Form from "../components/Form";
import SignupHeader from "../components/SignupHeader";

export default function Home() {
  const [isConnected, setIsConnected] = useState(false);
  const [address, setAddress] = useState("");

  if (isConnected) {
    return (
      <div className="bg-form-bg min-h-screen p-8">
        <SignupHeader />
        <Form address={address} />
      </div>
    );
  } else
    return (
      <div className="px-4 bg-white min-h-screen">
        <Head>
          <title>Checkr</title>
          <meta name="description" content="A Polygon Web3 dapp" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="flex flex-wrap md:flex-nowrap p-6">
          <ImageCard />
          <ConnectInfo
            setAddress={setAddress}
            isConnected={isConnected}
            setIsConnected={setIsConnected}
          />
        </div>
      </div>
    );
}
