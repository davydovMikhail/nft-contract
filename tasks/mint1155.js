const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("mint1155", "add a card to the contract")
    .addParam("to", "spender's tokens")
    .setAction(async function (taskArgs, hre) {
        const token = await hre.ethers.getContractAt("Token1155", process.env.ADDR_CONTRACT_1155);
        try {
            await token.mint(taskArgs.to)
            console.log(`you minted new token, owner: ${taskArgs.to}`);
        } catch (e) {
            console.log('error',e)
        }
    });