import Head from "next/head";
import Header from "../components/Header";
import Info from "../components/Info";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="px-4 bg-sky-400">
      <Head>
        <title>Checkr</title>
        <meta name="description" content="A Polygon Web3 dapp" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Info />
      <Form />
    </div>
  );
}
