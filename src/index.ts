//HashKey를 발급받기위해 crypto-js를 사용
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

  ////블록체인 배열안에 있는 최신 블록을 가져오는 함수
  const getLatestBlock = (): Block => blockchain[blockchain.length - 1];
  
  //새로운 timestamp를 받아오는 함수
  const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);

  const createNewBlock = (data: string): Block => {
    const previosBlock: Block = getLatestBlock();
    const newIndex: number = previosBlock.index + 1;
    const newTimestamp: number = getNewTimeStamp();
    const newHash: string = Block.calculateBlockHash(
      newIndex,
      previosBlock.hash,
      newTimestamp,
      data
    );
    const newBlock: Block = new Block(
      newIndex,
      newHash,
      previosBlock.hash,
      data,
      newTimestamp
    );
    return newBlock;
  };


  //blockchain.push("stuff"); class Block의 구조를 지키지않았기때문에 실행 X

  console.log(createNewBlock("Hi"));
  console.log(createNewBlock("umm"));
  
  export {};