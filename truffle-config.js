const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const INFURAKEY = "YOUR-PROJECT-ID" || process.env.INFURAKEY;
const PRIVATEKEY = "0x1234567890abcdef" || process.env.PRIVATEKEY;

module.exports = {
  networks: {
    dev: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      websockets: true,
    },
    goerli: {
      provider: () => {
        return new HDWalletProvider(
          PRIVATEKEY,
          `https://goerli.infura.io/v3/${INFURAKEY}`,
        );
      },
      network_id: 5,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    mumbai: {
      provider: () => {
        return new HDWalletProvider(
          PRIVATEKEY,
          `https://mumbai.infura.io/v3/${INFURAKEY}`,
        );
      },
      network_id: 80001,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
    sepolia: {
      provider: () => {
        return new HDWalletProvider(
          PRIVATEKEY,
          `https://sepolia.infura.io/v3/${INFURAKEY}`,
        );
      },
      network_id: 11155111,
      confirmations: 5,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  mocha: {
    timeout: 100000,
  },

  compilers: {
    solc: {
      version: "pragma",
      // docker: true,
      settings: {
        optimizer: {
          enabled: true,
          runs: 9999999,
        }, // evmVersion: "byzantium"
      },
    },
  },
};
