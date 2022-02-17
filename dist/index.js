"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//HashKey를 발급받기위해 crypto-js를 사용
const CryptoJS = require("crypto-js");
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
//Hash키를 생성하기 위한 메소드 (static으로 선언함으로서 class를 선언하지 않아도 사용 가능)
Block.calculateBlockHash = (index, previousHash, timestamp, data) => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();
const genesisBlock = new Block(0, "20220217", "", "ZoMD", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
////블록체인 배열안에 있는 최신 블록을 가져오는 함수
const getLatestBlock = () => blockchain[blockchain.length - 1];
//새로운 timestamp를 받아오는 함수
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
const createNewBlock = (data) => {
    const previosBlock = getLatestBlock();
    const newIndex = previosBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previosBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previosBlock.hash, data, newTimestamp);
    return newBlock;
};
//blockchain.push("stuff"); class Block의 구조를 지키지않았기때문에 실행 X
console.log(createNewBlock("Hi"));
console.log(createNewBlock("umm"));
//# sourceMappingURL=index.js.map