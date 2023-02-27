const hre = require("hardhat");

async function main() {
  const VRFv2Consumer = await hre.ethers.getContractFactory("VRFv2Consumer");
  const vRFv2Consumer = await VRFv2Consumer.deploy(101);

  await vRFv2Consumer.deployed();

  console.log(
    `deployed to ${vRFv2Consumer.address}`
  );
}

main()
  .then(() => process.exit(0))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });
