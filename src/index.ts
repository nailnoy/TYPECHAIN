import * as CryptoJS from "crypto-js";

class Block {
    public index: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;

     //Hash키를 생성하기 위한 메소드 (static으로 선언함으로서 class를 선언하지 않아도 사용 가능)
    static calculateBlockHash = (
        index:number, 
        previousHash:string, 
        timestamp:number, 
        data:string) : string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

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
  
  let blockchain: Block[] = [genesisBlock];

  const getBlockchain = (): Block[] => blockchain;

  const getLatestBlock = (): Block => blockchain[blockchain.length - 1];

  const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);


  //blockchain.push("stuff"); class Block의 구조를 지키지않았기때문에 실행 X
  console.log(blockchain);
  
  export {};