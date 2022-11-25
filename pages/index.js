import Head from "next/head";
import Header from "../components/Header";
import Info from "../components/Info";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="px-4 bg-sky-400 min-h-screen">
      <Head>
        <title>Checkr</title>
        <meta name="description" content="A Polygon Web3 dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="m-6 md:flex md:justify-between">
        <Info />
        <Form />
      </div>
    </div>
  );
}
