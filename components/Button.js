import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function Button(props) {
  const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);
  const [address, setAddress] = useState(props.name);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  function mint() {
    alert("minted");
  }

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
    <button
      onClick={connectWallet}
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline my-4"
    >
      {address}
    </button>
  );
}
