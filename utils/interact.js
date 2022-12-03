import { ethers } from "ethers";
const alchemyWeb3 = require("@alch/alchemy-web3");
const alchemy = "";

export async function connectWallet() {
  if (typeof window.ethereum !== "undefined") {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      let walletAddress = addressArray[0];
      let first = walletAddress.slice(0, 5);
      let last = walletAddress.slice(38, 42);
      let res = `${first}...`;
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const obj = {
        status: true,
        address: addressArray[0],
        shortenedAddress: res,
        provider: provider,
      };
      return obj;
    } catch (err) {
      return {
        address: "",
        shortenedAddress: "Connect Wallet",
      };
    }
  } else {
    setIsConnected(false);
  }
}

export async function mintNft() {}
