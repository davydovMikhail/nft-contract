
async function main() {

    const token = await hre.ethers.getContractAt("Token721V2", process.env.ADDR_CONTRACT);
  
    const newOwner = '0x300E5986013b20C5167933A4023F4044DA90e823'
    await token.ownerRoleTransferedTo(newOwner);
  
    console.log('Owner transfered');
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });