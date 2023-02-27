// scripts/deploy-full.js
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");

async function main() {
  const PriceConsumerV3 = await ethers.getContractAt("PriceConsumerV3", "0x038e83d57920859Cd2c2b18330784495d8FD6AF8");
  const latestPrice = await PriceConsumerV3.getLatestPrice();
  console.log("latestPrice: ", latestPrice)
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
