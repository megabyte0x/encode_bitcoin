// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {Script} from "forge-std/Script.sol";
import {HelperConfig} from "./HelperConfig.s.sol";
import {Payment} from "../src/Payment.sol";

contract DeployPayment is Script {
    uint256 noOfProjects;

    function deployPayment(address _resgistry) private returns (address) {
        vm.startBroadcast();
        Payment payment = new Payment(_resgistry);
        vm.stopBroadcast();
        return address(payment);
    }

    function deployPaymentUsingConfigs() private {
        HelperConfig helperConfig = new HelperConfig();
        address registry = helperConfig.getRegistry(block.chainid);

        deployPayment(registry);
    }

    function run() public {
        deployPaymentUsingConfigs();
    }
}
