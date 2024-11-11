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
