// SPDX-Content-Identifier: MIT
pragma solidity 0.8.25;

import {IRegistry} from "./interface/IRegistry.sol";

contract Payment {
    error Payment__LowBalance();
    error Payment__ErrorOccured();
    error Payment__UnauthorisedAccess();

    event Payment__FeeChanged(uint256 oldFee, uint256 newFee);
    event Payment__RegistryChanged(address oldRegistry, address newRegistry);

    uint256 s_feeAmt = 1e15;
    address s_registry;
    address s_ccConfirmation;

    constructor(address _registry) {
        s_registry = _registry;
    }

    modifier checkBalance() {
        if (msg.sender.balance <= s_feeAmt) {
            revert Payment__LowBalance();
        }
        _;
    }

    modifier checkAuthorisation() {
        if (msg.sender != s_ccConfirmation) {
            revert Payment__UnauthorisedAccess();
        }
        _;
    }

    function setFee(uint256 newFeeAmt) private {
        emit Payment__FeeChanged(s_feeAmt, newFeeAmt);
        s_feeAmt = newFeeAmt;
    }

    function setRegistry(address _newRegistry) external {
        emit Payment__RegistryChanged(s_registry, _newRegistry);

        s_registry = _newRegistry;
    }

    function registerWithFee(address user, bytes32 namehash, string memory _uri) external payable checkBalance {
        (bool success,) = address(this).call{value: s_feeAmt}("");
        if (success) {
            IRegistry(s_registry).register(user, namehash, _uri);
        } else {
            revert Payment__ErrorOccured();
        }
    }

    function resgisterWithoutFee(address user, bytes32 namehash, string memory _uri) external {
        IRegistry(s_registry).register(user, namehash, _uri);
    }

    function withdraw() public payable {
        if (address(this).balance > 0) {
            (bool success,) = msg.sender.call{value: address(this).balance}("");
            if (!success) {
                revert Payment__ErrorOccured();
            }
        }
    }

    receive() external payable {}
    fallback() external payable {}
}
