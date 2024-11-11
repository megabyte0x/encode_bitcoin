// SPDX-Content-Identifier: MIT
pragma solidity 0.8.25;

interface IRegistry {
    function register(address user, bytes32 namehash, string memory _uri) external;
}
