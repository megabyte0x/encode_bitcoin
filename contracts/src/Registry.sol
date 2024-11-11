// SPDX-Content-Identifier: MIT
pragma solidity 0.8.25;

import {IRegistry} from "./interface/IRegistry.sol";

contract Registry is IRegistry {
    error Registry__NameAlreadyRegistered();
    error Registry__UnauthorisedAccess();

    event Registry__NameRegsitered(address user, bytes32 namehash);

    mapping(address user => bytes32[] namehash) private s_userToNamehash;
    mapping(bytes32 namehash => address user) private s_namehashToUser;
    address private s_paymentHandler;
    address owner;

    constructor(address _paymentHandler) {
        s_paymentHandler = _paymentHandler;
        owner = msg.sender;
    }

    modifier checkStatus(bytes32 namehash) {
        if (getAddress(namehash) != address(0)) {
            revert Registry__NameAlreadyRegistered();
        }

        _;
    }

    modifier checkAuthorisation() {
        if (msg.sender != s_paymentHandler || msg.sender == owner) revert Registry__UnauthorisedAccess();

        _;
    }

    function setPaymentHandler(address _newPaymentHandler) external {
        s_paymentHandler = _newPaymentHandler;
    }

    function getPaymentHandler() public view returns (address) {
        return s_paymentHandler;
    }

    function getNamehash(address user) public view returns (bytes32[] memory) {
        return s_userToNamehash[user];
    }

    function getAddress(bytes32 namehash) public view returns (address) {
        return s_namehashToUser[namehash];
    }

    function register(address user, bytes32 namehash) external checkStatus(namehash) checkAuthorisation {
        s_userToNamehash[user].push(namehash);
        s_namehashToUser[namehash] = user;

        emit Registry__NameRegsitered(user, namehash);
    }
}
