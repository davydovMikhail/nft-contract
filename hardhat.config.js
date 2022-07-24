require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();
require("./tasks");

const { PRIVATE_KEY } = process.env;

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161',
      accounts: [`0x${PRIVATE_KEY}`],
      allowUnlimitedContractSize: true
    }
  },
  // etherscan: {
  //   apiKey: ETHERSCAN_API_KEY
  // }
};
