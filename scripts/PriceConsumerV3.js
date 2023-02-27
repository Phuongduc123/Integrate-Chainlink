const hre = require("hardhat");

async function main() {
  const PriceConsumerV3 = await hre.ethers.getContractFactory("PriceConsumerV3");
  const priceConsumerV3 = await PriceConsumerV3.deploy();

  await priceConsumerV3.deployed();

  console.log(
    `deployed to ${priceConsumerV3.address}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
