const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("addMinter", "add a card to the contract")
    .addParam("address", "new minter")
    .setAction(async function (taskArgs, hre) {
        const token = await hre.ethers.getContractAt("Token721V2", process.env.ADDR_CONTRACT);
        try {
            await token.addMinter(taskArgs.address)
            console.log(`You added new minter: ${taskArgs.address}`);
        } catch (e) {
            console.log('error',e)
        }
    });