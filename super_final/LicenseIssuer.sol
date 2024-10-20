// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LicenseIssuer is ERC721URIStorage, Ownable {
    struct LicenseInfo {
        uint256 price;
        uint256 royalty;
        uint256 expiryDate;
    }

    mapping(uint256 => LicenseInfo) public licenses;

    constructor() ERC721("LicenseIssuer", "LIC") {}

    function issueLicense(
        uint256 tokenId,
        uint256 price,
        uint256 royalty,
        uint256 expiryDate,
        string memory tokenURI
    ) public onlyOwner {
        _mint(msg.sender, tokenId);
        _setTokenURI(tokenId, tokenURI);
        licenses[tokenId] = LicenseInfo(price, royalty, expiryDate);
    }
}
