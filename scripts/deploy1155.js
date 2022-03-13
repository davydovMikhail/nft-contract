
async function main() {
    const baseURI = "https://ipfs.io/ipfs/QmRKCmNgjB5szFBKpNV7qdNDLYqcptzLVmFsVV7h82DKn1/"
    const Token = await ethers.getContractFactory("Token1155");
    const token = await Token.deploy(baseURI);
  
    console.log("1155 address:", token.address);
  }
  
  main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });