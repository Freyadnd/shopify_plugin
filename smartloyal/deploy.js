const hre = require("hardhat");

async function main() {
    const LoyaltyToken = await hre.ethers.getContractFactory("LoyaltyToken");
    const loyaltyToken = await LoyaltyToken.deploy();
    await loyaltyToken.deployed();
    console.log("LoyaltyToken deployed to:", loyaltyToken.address);

    const NFT = await hre.ethers.getContractFactory("NFT");
    const nft = await NFT.deploy();
    await nft.deployed();
    console.log("NFT deployed to:", nft.address);

    const ClaimManager = await hre.ethers.getContractFactory("ClaimManager");
    const claimManager = await ClaimManager.deploy(nft.address);
    await claimManager.deployed();
    console.log("ClaimManager deployed to:", claimManager.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});

