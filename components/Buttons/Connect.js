import { useState, useEffect } from "react";
import { connectWallet } from "../../utils/interact";
import { ethers } from "ethers";

export default function ConnectButton({
  src,
  isConnected,
  setIsConnected,
  setAddress,
}) {
  // const [isConnected, setIsConnected] = useState(false);
  const [hasMetamask, setHasMetamask] = useState(false);
  const [signer, setSigner] = useState(undefined);

  useEffect(() => {
    if (typeof window.ethereum !== "undefined") {
      setHasMetamask(true);
    }
  });

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    if (walletResponse.status == true) {
      setIsConnected(true);
      setAddress(walletResponse.shortenedAddress);
      setSigner(walletResponse.provider.getSigner());
    } else {
      setIsConnected(false);
    }
    // setStatus(walletResponse.status);
    // setWallet(walletResponse.address);
  };

  return (
    <div
      onClick={connectWalletPressed}
      className="w-full h-20 mt-8 border-2 border-connect-blue p-2 flex justify-around"
    >
      <img src={src} />
    </div>
  );
}
