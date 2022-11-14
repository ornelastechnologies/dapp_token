const { ethers } = require("hardhat");
// const hre = require("hardhat");

async function main() {
  // Fetch contract to deploy
  const Token = await ethers.getContractFactory("Token");

  // Deploy contract (deploy function from ethers)
  const token = await Token.deploy("Dapp University", "DAPP", "1000000");
  // Get information that was deployed
  await token.deployed();
  console.log(`Token Deployed to: ${token.address}`);
  // Log transaction
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
