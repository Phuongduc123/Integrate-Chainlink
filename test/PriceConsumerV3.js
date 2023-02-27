const {ethers, upgrades} = require('hardhat');
const { expect } = require("chai");
const { BigNumber } = require("ethers");



describe("PriceConsumerV3", ()=>{

    before('function', async ()=>{
        [deployer, signer, receiver, user1, user2, user3] = await ethers.getSigners();
        this.PriceConsumerV3 = await ethers.getContractFactory("PriceConsumerV3");
        this.priceConsumerV3 = await this.PriceConsumerV3.deploy(); 
        console.log(`AviumNFT: ${this.priceConsumerV3.address}`);
    })

    it('get latest price', async () => {
        console.log(await this.priceConsumerV3.getLatestPrice());
    })

    
})