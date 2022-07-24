
async function main() {
  const name = 'latest collection';
  const symbol = 'LC';
  const Token = await ethers.getContractFactory("Token721V2");
  const token = await Token.deploy(name, symbol);

  console.log("721 address:", token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });