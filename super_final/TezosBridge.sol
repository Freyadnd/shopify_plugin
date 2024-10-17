// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract TezosBridge is ERC721, Ownable {
    uint256 public nextTokenId;
    address public admin;

    constructor() ERC721('TezosBridgeNFT', 'TBZ') {
        admin = msg.sender;
    }

    function mint(address to) external onlyOwner {
        _safeMint(to, nextTokenId);
        nextTokenId++;
    }

    function setAdmin(address _admin) external onlyOwner {
        admin = _admin;
    }
}
