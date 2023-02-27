require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-etherscan');
require('@nomiclabs/hardhat-web3');
const fs = require('fs');
require('dotenv').config();

// read the private key of your wallet address from .secret file
// const PRIVATE_KEY = fs.readFileSync(".secret").toString().trim();

module.exports = {
  solidity: '0.8.7',
  networks: {
    bscTestnet: {
      url: process.env.BSC_TESTNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    mumbai: {
      url: process.env.MUMBAI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 2000000000,
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      accounts: [process.env.PRIVATE_KEY],
    },
    ether: {
      url: process.env.MAINNET_RPC,
      accounts: [process.env.PRIVATE_KEY],
      gasPrice: 15000000000,
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC,
      accounts: [process.env.PRIVATE_KEY],
    }
  },
  etherscan: {
    apiKey: 'I8CEBRWKYG2RCIHPT6I8NGID4QHWSXRJBE',
  },
};
