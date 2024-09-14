// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./NFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ClaimManager is Ownable {
    NFT public nftContract;

    constructor(address _nftAddress) {
        nftContract = NFT(_nftAddress);
    }

    function claimNFT(uint256 tokenId) external {
        // Logic for claiming NFT
    }
}
