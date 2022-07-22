const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("ERC721", function () {
  beforeEach(async () => {
    [owner, user1, user2, user3] = await ethers.getSigners()
    let Token721F = await ethers.getContractFactory("Token721V2")  
    token721 = await Token721F.connect(owner).deploy()
    URI1 = 'link1'
    URI2 = 'link2'
    URI3 = 'link3'
    URI4 = 'link4'
    await token721.connect(owner).mint(owner.address, URI1)
    await token721.connect(owner).mint(owner.address, URI2)
    await token721.connect(owner).mint(owner.address, URI3)
    await token721.connect(owner).mint(owner.address, URI4)
  });

  it("some view function", async function () {
    expect(await token721.name()).to.equal("First NFT Collection");
    expect(await token721.symbol()).to.equal("FNC");
    expect(await token721.tokenURI(1)).to.equal(URI1);
    expect(await token721.tokenURI(2)).to.equal(URI2);
    expect(await token721.tokenURI(3)).to.equal(URI3);
    expect(await token721.tokenURI(4)).to.equal(URI4);
    expect(await token721.balanceOf(owner.address)).to.equal(4);
    expect(await token721.balanceOf(user1.address)).to.equal(0);
  });

  it("basic paid features", async function () {
    const id1 = 1;
    const id2 = 2;
    expect(await token721.isApprovedForAll(owner.address, user1.address)).to.equal(false);
    await token721.setApprovalForAll(user1.address, true);
    expect(await token721.isApprovedForAll(owner.address, user1.address)).to.equal(true);
    expect(await token721.ownerOf(id1)).to.equal(owner.address);
    await token721.connect(user1).transferFrom(owner.address, user2.address, id1); 
    expect(await token721.ownerOf(id1)).to.equal(user2.address);
    await token721.connect(user1).approve(user2.address, id2)
    expect(await token721.getApproved(id2)).to.equal(user2.address);
    expect(await token721.ownerOf(id2)).to.equal(owner.address);
    await token721.connect(user2).transferFrom(owner.address, user3.address, id2); 
    expect(await token721.ownerOf(id2)).to.equal(user3.address);
    expect(await token721.balanceOf(owner.address)).to.equal(2);
  });
});