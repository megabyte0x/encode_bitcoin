// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {Script} from "forge-std/Script.sol";
import {HelperConfig} from "../HelperConfig.s.sol";
import {Payment} from "../../src/Payment.sol";

contract SetRegistry is Script {
    function setRegistry(address _registry, address _payment) public {
        vm.startBroadcast();
        Payment payment = Payment(payable(_payment));
        payment.setRegistry(_registry);
        vm.stopBroadcast();
    }

    function setRegistryUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address paymentHandler = helperConfig.getPayment(block.chainid);
        address registry = helperConfig.getRegistry(block.chainid);

        setRegistry(registry, paymentHandler);
    }

    function run() public {
        setRegistryUsingConfigs();
    }
}

contract RegisterWithoutFee is Script {
    function resgisterWithoutFee(address _payment, address _user, bytes32 _namehash, string memory _uri) public {
        vm.startBroadcast();
        Payment payment = Payment(payable(_payment));
        payment.resgisterWithoutFee(_user, _namehash, _uri);
        vm.stopBroadcast();
    }

    function resgisterWithoutFeeUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address payment = helperConfig.getPayment(block.chainid);
        address user = 0xdDCc06f98A7C71Ab602b8247d540dA5BD8f5D2A2;
        bytes32 namehash = 0x95d23ae9f8ae2d62890bbd9514717f5752f83db3a2fec15b9174ce89e02680b3; //megabyte0x.eth
        string memory _uri = "";
        resgisterWithoutFee(payment, user, namehash, _uri);
    }

    function run() public {
        resgisterWithoutFeeUsingConfigs();
    }
}

contract RegisterWithFee is Script {
    function resgisterWithFee(address _payment, address _user, bytes32 _namehash, string memory _uri) public {
        vm.startBroadcast();
        Payment payment = Payment(payable(_payment));
        payment.registerWithFee(_user, _namehash, _uri);
        vm.stopBroadcast();
    }

    function resgisterWithFeeUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address payment = helperConfig.getPayment(block.chainid);
        address user = 0xdDCc06f98A7C71Ab602b8247d540dA5BD8f5D2A2;
        bytes32 namehash = 0x95d23ae9f8ae2d62890bbd9514717f5752f83db3a2fec15b9174ce89e02680b3; //megabyte0x.eth
        string memory _uri = "";
        resgisterWithFee(payment, user, namehash, _uri);
    }

    function run() public {
        resgisterWithFeeUsingConfigs();
    }
}
