// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LicenseContract is ERC721URIStorage, ERC721Burnable, Ownable {
    struct License {
        uint256 quantity;
        uint256 price;
        uint8 royaltyPercentage;
    }

    mapping(uint256 => License) public licenses;

    constructor() ERC721('LicensedNFT', 'LNFT') {}

    function createLicense(uint256 tokenId, uint256 quantity, uint256 price, uint8 royaltyPercentage) public onlyOwner {
        licenses[tokenId] = License(quantity, price, royaltyPercentage);
    }

    function burnLicense(uint256 tokenId) public {
        require(ownerOf(tokenId) == msg.sender, "Only owner can burn the license");
        _burn(tokenId);
    }
}
