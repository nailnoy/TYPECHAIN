class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(
      index: number,
      hash: string,
      previousHash: string,
      data: string,
      timestamp: number
    ) {
      this.index = index;
      this.hash = hash;
      this.previousHash = previousHash;
      this.data = data;
      this.timestamp = timestamp;
    }
  }
  
  const genesisBlock: Block = new Block(0, "20220217", "", "ZoMD", 123456);
  
  let blockchain: [Block] = [genesisBlock];

  //blockchain.push("stuff"); class Block의 구조를 지키지않았기때문에 실행 X
  console.log(blockchain);
  
  export {};