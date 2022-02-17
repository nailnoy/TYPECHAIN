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
//블록의 구조를 인증하기 위한 메소드
Block.validateStructure = (aBlock) => typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";
const genesisBlock = new Block(0, "20220217", "", "ZoMD", 123456);
let blockchain = [genesisBlock];
const getBlockchain = () => blockchain;
////블록체인 배열안에 있는 최신 블록을 가져오는 함수
const getLatestBlock = () => blockchain[blockchain.length - 1];
//새로운 timestamp를 받아오는 함수
const getNewTimeStamp = () => Math.round(new Date().getTime() / 1000);
//새로운 블록을 만드는 함수
const createNewBlock = (data) => {
    const previousBlock = getLatestBlock();
    const newIndex = previousBlock.index + 1;
    const newTimestamp = getNewTimeStamp();
    const newHash = Block.calculateBlockHash(newIndex, previousBlock.hash, newTimestamp, data);
    const newBlock = new Block(newIndex, newHash, previousBlock.hash, data, newTimestamp);
    addBlock(newBlock);
    return newBlock;
};
const getHashforBlock = (aBlock) => Block.calculateBlockHash(aBlock.index, aBlock.previousHash, aBlock.timestamp, aBlock.data);
// 블록이 유효한지 체크하는 함수
const isBlockValid = (candidateBlock, previousBlock) => {
    //블록이 유효한지 체크
    if (!Block.validateStructure(candidateBlock)) {
        return false;
    } //이전 블록의 인덱스 + 1과 현재 블록의 인덱스가 같은지 체크
    else if (previousBlock.index + 1 !== candidateBlock.index) {
        return false;
    } //이전 블록의 해쉬와 현재 블록의 이전해쉬가 같은지 체크
    else if (previousBlock.hash !== candidateBlock.previousHash) {
        return false;
        //현재 블록의 해쉬키와 현재블록이 가지고 있는 해쉬키가 같은지 체크
    }
    else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
        return false;
        //검증을 통과하면 true
    }
    else {
        return true;
    }
};
// 블록을 추가하는 함수(그 값이 true라면 블록체인 배열에 push로 넣는다.)
const addBlock = (candidateBlock) => {
    if (isBlockValid(candidateBlock, getLatestBlock())) {
        blockchain.push(candidateBlock);
    }
};
createNewBlock("second block");
createNewBlock("third block");
createNewBlock("fourth block");
console.log(blockchain);
//# sourceMappingURL=index.js.map