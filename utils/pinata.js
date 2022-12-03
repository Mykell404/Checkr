// require("dotenv").config();
// process.env.REACT_APP_PINATA_KEY;
// process.env.REACT_APP_PINATA_SECRET;
const key = "7d7771246ee84527598e";
const secret =
  "8f5079465f10ec72b1b8214308ea9bb5096e8708b98cf28dd0548b3a035136e1";

const axios = require("axios");

export const pinJSONToIPFS = async (JSONBody) => {
  const url = `https://api.pinata.cloud/pinning/pinJSONToIPFS`;
  return axios
    .post(url, JSONBody, {
      headers: {
        pinata_api_key: key,
        pinata_secret_api_key: secret,
      },
    })
    .then(function (response) {
      return {
        success: true,
        pinataUrl:
          "https://gateway.pinata.cloud/ipfs/" + response.data.IpfsHash,
      };
    })
    .catch(function (error) {
      console.log(error);
      return {
        success: false,
        message: error.message,
      };
    });
};
