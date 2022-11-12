const { expect } = require("chai");
const { ethers } = require("hardhat");

const tokens = (n) => {
  return ethers.utils.parseUnits(n, "ether");
};

describe("Token", () => {
  let token;

  beforeEach(async () => {
    // Fetch token from blockchain
    const Token = await ethers.getContractFactory("Token");
    // Simulate token deployment to blockchain
    token = await Token.deploy("Dapp University", "DAPP", "1000000");
  });

  describe("Deployment", () => {
    const nameTest = "Dapp University";
    const symbolTest = "DAPP";
    const decimalsTest = "18";
    const totalSupplyTest = "1000000";
    // Test go inside here
    it("Has correct name name", async () => {
      const name = await token.name();
      expect(name).to.equal(nameTest);
    });

    it("Has correct symbol", async () => {
      const symbol = await token.symbol();
      expect(symbol).to.equal(symbolTest);
    });

    it("Has correct decimals", async () => {
      const decimals = await token.decimals();
      expect(decimals).to.equal(decimalsTest);
    });

    it("Has correct total supply", async () => {
      const value = tokens(totalSupplyTest);
      const totalSupply = await token.totalSupply();
      expect(totalSupply).to.equal(value);
    });
  });
});
