import Image from "next/image";
import { ethers } from "ethers";
import { useEffect, useState } from "react";

export default function Header() {
  const [isConnected, setIsConnected] = useState(false);

  function connectWallet() {
    alert("connecting");
  }
  return (
    <nav className="bg-sky-400 flex flex-wrap justify-between ">
      <Image src="/vercel.svg" width="100" height="100" alt="text" />
      <button
        onClick={connectWallet}
        className="border border-slate-300 hover:border-slate-400 bg-blue-500 hover:bg-blue-600 my-4 p-2 rounded-sm"
      >
        Connect Wallet
      </button>
    </nav>
  );
}
