// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {Script} from "forge-std/Script.sol";
import {HelperConfig} from "./HelperConfig.s.sol";
import {Registry} from "../src/Registry.sol";

contract DeployRegistry is Script {
    uint256 noOfProjects;

    function deployRegistry(address cit, address owner) private returns (address) {
        vm.startBroadcast();
        Registry registry = new Registry(cit, owner);
        vm.stopBroadcast();
        return address(registry);
    }

    function deployRegistryUsingConfigs() private {
        HelperConfig helperConfig = new HelperConfig();
        address cit = helperConfig.getCit(block.chainid);
        address owner = helperConfig.OWNER();

        deployRegistry(cit, owner);
    }

    function run() public {
        deployRegistryUsingConfigs();
    }
}
