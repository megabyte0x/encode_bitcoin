// SPDX-License-Identifier: MIT
pragma solidity 0.8.25;

import {Script} from "forge-std/Script.sol";
import {DevOpsTools} from "foundry-devops/src/DevOpsTools.sol";

contract HelperConfig is Script {
    struct CrossChainDetails {
        address _dab;
        address _usdc;
    }

    uint256 public constant FLOW_CHAIN_ID = 545;
    uint256 public constant MORPH_CHAIN_ID = 2810;
    uint256 public constant BASE_CHAIN_ID = 84532;
    uint256 public constant USDC_DENOMINATION = 1e6;
    uint256 public constant FEE_AMOUNT = 1e5;
    uint256 public constant NO_OF_PROJECTS = 20;
    address public constant OWNER = 0xdDCc06f98A7C71Ab602b8247d540dA5BD8f5D2A2;

    mapping(uint256 _chainId => CrossChainDetails) public chainIdToCrossChainDetails;

    function getChainDetails(uint256 _chainId) public view returns (address, address) {
        address usdc = chainIdToCrossChainDetails[_chainId]._usdc;
        address dab = chainIdToCrossChainDetails[_chainId]._dab;

        return (usdc, dab);
    }

    function getCit(uint256 _chainId) public view returns (address) {
        address cit = DevOpsTools.get_most_recent_deployment("Cit", _chainId);
        return cit;
    }

    function getRegistry(uint256 _chainId) public view returns (address) {
        address registry = DevOpsTools.get_most_recent_deployment("Registry", _chainId);
        return registry;
    }

    function getPayment(uint256 _chainId) public view returns (address) {
        address payment = DevOpsTools.get_most_recent_deployment("Payment", _chainId);
        return payment;
    }

    function getFlowDAB() public view returns (address) {
        address dab = DevOpsTools.get_most_recent_deployment("Flow_DAB", FLOW_CHAIN_ID);
        return dab;
    }

    function getBaseDAB() public view returns (address) {
        address dab = DevOpsTools.get_most_recent_deployment("Base_DAB", BASE_CHAIN_ID);
        return dab;
    }
}
