import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function ConnectButton({ src, isConnected, setIsConnected }) {
  // const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);

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
    <div
      onClick={connectWallet}
      className="w-full h-20 mt-8 border-2 border-connect-blue p-2 flex justify-around"
    >
      <img src={src} />
    </div>
  );
}
