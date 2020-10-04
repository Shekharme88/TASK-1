const SHA256 = require('crypto-js/sha256');
class Block{
constructor(index, timestamp, data, previousHash=''){
	this.index=index;
	this.timestamp=timestamp;
	this.data=data;
	this.previousHash=previousHash;
	this.hash=this.calculateHash() ;
}

calculateHash(){
	return SHA256(this.index+this.previousHash+this.timestamp+JSON.stringify(this.data)).toString();
}
}

class Blockchain{
	constructor(){
		this.chain=[this.createGenesisBlock()];
		
	}
	createGenesisBlock(){
		return new Block(0, "03/10/2020", "Genesis Block", "0");
	}
	getLatestBlock(){
		return this.chain[this.chain.length-1];
	}
	
	addBlock(newBlock){
		newBlock.previousHash=this.getLatestBlock().hash; 
		newBlock.hash=newBlock.calculateHash();
		this.chain.push(newBlock);
	}
	
	isChainValid(){
		for(i=1; i<tis.chain.length;i++)
		{
			const currentBlock=this.chain[i];
			const previousBlock=this.chain[i-1];
			
			if(currentBlock.hash != currentBlock.calculateHash()){
				return false;
			}
			
			if(currentBlock.previousHash != previousBlock.hash)
			{
				return false;
			}
		}
		return true;
	}
	
}

let shekharBlock=new Blockchain();
shekharBlock.addBlock(newBlock(1, "3/10/2020", {amount: 4}));
shekharBlock.addBlock(newBlock(2, "3/10/2020", {amount: 10}));

//console.log("Is the blockchain valid "shekharBlock.isChainValid());
console.log(JSON.stringify(shekharBlock,null,4));