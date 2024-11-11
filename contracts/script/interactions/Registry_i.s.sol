// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {Script} from "forge-std/Script.sol";
import {HelperConfig} from "../HelperConfig.s.sol";
import {Registry} from "../../src/Registry.sol";

contract SetPaymentHandler is Script {
    function setPaymentHandler(address _registry, address _payment) public {
        vm.startBroadcast();
        Registry register = Registry(_registry);
        register.setPaymentHandler(_payment);
        vm.stopBroadcast();
    }

    function setPaymentHandlerUsingConfigs() public {
        HelperConfig helperConfig = new HelperConfig();
        address paymentHandler = helperConfig.getPayment(block.chainid);
        address registry = helperConfig.getRegistry(block.chainid);

        setPaymentHandler(registry, paymentHandler);
    }

    function run() public {
        setPaymentHandlerUsingConfigs();
    }
}
