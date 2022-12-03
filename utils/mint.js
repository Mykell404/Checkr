// import * as dotenv from "dotenv";
import { pinJSONToIPFS } from "./pinata";
import { Alchemy, Network } from "alchemy-sdk";
import { ethers } from "ethers";
const Contract = require("web3-eth-contract");

Contract.setProvider(
  "wss://polygon-mumbai.g.alchemy.com/v2/j6DOjD_ksY1WS3FePtFEj1Dhz3hE0HjO"
);

// Optional config object, but defaults to the API key 'demo' and Network 'eth-mainnet'.
// const settings = {
//   apiKey: "j6DOjD_ksY1WS3FePtFEj1Dhz3hE0HjO", // Replace with your Alchemy API key.
//   network: Network.MATIC_MUMBAI, // Replace with your network.
// };

// const alchemy = new Alchemy(settings);
// // dotenv.config();
// const provider = new ethers.providers.AlchemyProvider(
//   "maticmum",
//   "j6DOjD_ksY1WS3FePtFEj1Dhz3hE0HjO"
// );

// TODO: fix bug where the page crashes on reload

// process.env.REACT_APP_ALCHEMY_KEY;

// const web3 = createAlchemyWeb3(alchemyKey);

const contractABI = require("../src/contract-abi.json");
const contractAddress = "0x46c2C473dFCcbb67538DE43c0824e894FBAa79a6";

export const mintNFT = async (
  firstname,
  surname,
  gender,
  maritalStatus,
  dob,
  zipCode
) => {
  if (
    firstname.trim() == "" ||
    surname.trim() == "" ||
    gender.trim() == "" ||
    maritalStatus.trim() == "" ||
    dob.trim() == "" ||
    zipCode.trim() == ""
  ) {
    alert("Please make sure all fields are completed before minting");
  }

  // Create Metadata
  const metadata = new Object();
  metadata.firstname = firstname;
  metadata.surname = surname;
  metadata.gender = gender;
  metadata.maritalStatus = maritalStatus;
  metadata.dob = dob;
  metadata.zipCode = zipCode;
  metadata.image = "ipfs://QmVKDXRrtiMbi4cdfeekf3FJVJ8hPo43b9tQykqJL1G8wK";

  // make pinata call
  const pinataResponse = await pinJSONToIPFS(metadata);
  if (!pinataResponse.success) {
    alert("something went wrong while uploading");
  }

  const tokenURI = pinataResponse.pinataUrl;

  const contract = Contract(contractABI.abi, contractAddress);

  // window.contract = await new web3.eth.Contract(
  //   contractABI.abi,
  //   contractAddress
  // ); // load Contract
  // await provider.send("eth_requestAccounts", []);

  // window.contract = await new ethers.Contract(
  //   contractAddress,
  //   contractABI.abi,
  //   provider.getSigner()
  // );
  console.log(contract);

  const transactionParameter = {
    to: contractAddress,
    from: ethereum.selectedAddress,
    data: contract.methods
      .mintNFT(ethereum.selectedAddress, tokenURI)
      .encodeABI(),
  };

  try {
    const txHash = await ethereum.request({
      method: "eth_sendTransaction",
      params: [transactionParameter],
    });
    return {
      success: true,
      status:
        "✅ Check out your transaction on Etherscan: https://ropsten.etherscan.io/tx/" +
        txHash,
    };
    console.log(
      "Check out your transaction on Polygonscan : https://mumbai.polygonscan.com/tx/" +
        txHash
    );
  } catch (error) {
    console.log(error);
  }
};
