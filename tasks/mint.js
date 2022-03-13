const { task } = require("hardhat/config");
require("@nomiclabs/hardhat-waffle");
require('dotenv').config();

task("mint721", "add a card to the contract")
    .addParam("to", "spender's tokens")
    .addParam("uri", "link to metadata")
    .setAction(async function (taskArgs, hre) {
        const token = await hre.ethers.getContractAt("Token721", process.env.ADDR_CONTRACT);
        try {
            await token.mint(taskArgs.to, taskArgs.uri)
            console.log(`you minted new token, owner: ${taskArgs.to}, link: ${taskArgs.uri}`);
        } catch (e) {
            console.log('error',e)
        }
    });