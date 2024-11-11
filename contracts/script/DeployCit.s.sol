// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {Script} from "forge-std/Script.sol";

import {Cit} from "../src/Cit.sol";

contract DeployCit is Script {
    function deployCit() private returns (address) {
        vm.startBroadcast();
        Cit cit = new Cit();
        vm.stopBroadcast();
        return address(cit);
    }

    function run() public {
        deployCit();
    }
}
