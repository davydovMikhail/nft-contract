// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract Token1155 is ERC1155, Ownable {
    uint256 private _counter = 1;

    constructor(string memory _baseURI) public ERC1155(_baseURI) {}

    function mint(address _to) public onlyOwner {
        _mint(_to, _counter, 100, "");
        _counter += 1;
    }

    function setNewBaseURI(string calldata _baseURI) public onlyOwner {
        _setURI(_baseURI);
    }

    function uri(uint256 _tokenId)
        public
        view
        override
        returns (string memory)
    {
        return
            string(
                abi.encodePacked(
                    super.uri(_tokenId),
                    Strings.toString(_tokenId),
                    ".json"
                )
            );
    }
}
