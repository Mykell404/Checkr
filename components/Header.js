import Image from "next/image";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function Header() {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [address, setAddress] = useState("Connect Wallet");

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  async function connectWallet() {
    if (typeof window.ethereum !== "undefined") {
      try {
        await ethereum
          .request({ method: "eth_requestAccounts" })
          .then((result) => {
            let walletAddress = result[0];
            let first = walletAddress.slice(0, 5);
            let last = walletAddress.slice(38, 42);
            let res = `${first}...${last}`;
            console.log(walletAddress);
            setAddress(res);
          });
        setIsConnected(true);
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        setSigner(provider.getSigner());
      } catch (e) {
        console.log(e);
      }
    } else {
      setIsConnected(false);
    }
  }
  return (
    <nav className="bg-sky-400 flex flex-wrap justify-between ">
      <Image src="/vercel.svg" width="100" height="100" alt="text" />
      <button
        onClick={connectWallet}
        className="border border-slate-300 hover:border-slate-400 bg-blue-500 hover:bg-blue-600 my-4 p-2 rounded-sm"
      >
        {address}
      </button>
    </nav>
  );
}
