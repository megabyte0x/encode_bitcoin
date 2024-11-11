// SPDX-Content-Identifier: MIT
pragma solidity 0.8.25;

import {ERC721} from "lib/solmate/src/tokens/ERC721.sol";

contract Cit is ERC721 {
    mapping(uint256 tokenId => string tokenUri) private s_tokenUris;
    uint256 public s_totalSupply;

    constructor() ERC721("CIT", "CIT") {
        s_totalSupply = 0;
    }

    function tokenURI(uint256 id) public view virtual override returns (string memory) {
        return s_tokenUris[id];
    }

    function mint(address _user, string memory _uri) external {
        s_totalSupply++;
        s_tokenUris[s_totalSupply] = _uri;

        _mint(_user, s_totalSupply);
    }
}
