// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// import "node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "node_modules/@openzeppelin/contracts/access/Ownable.sol";
// import "node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

// import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
// import "@openzeppelin/contracts/access/Ownable.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Token721 is ERC721, Ownable, ERC721URIStorage {
    uint256 private _counter = 1;

    constructor() ERC721("First NFT Collection", "FNC") {}

    function mint(address _to, string calldata _uri) public onlyOwner {
        _safeMint(_to, _counter);
        _setTokenURI(_counter, _uri);
        _counter += 1;
    }

    function _burn(uint256 _tokenId)
        internal
        override(ERC721, ERC721URIStorage)
    {
        super._burn(_tokenId);
    }

    function tokenURI(uint256 _tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(_tokenId);
    }
}
