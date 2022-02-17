"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Block {
    constructor(index, hash, previousHash, data, timestamp) {
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}
const genesisBlock = new Block(0, "20220217", "", "ZoMD", 123456);
let blockchain = [genesisBlock];
//blockchain.push("stuff"); class Block의 구조를 지키지않았기때문에 실행 X
console.log(blockchain);
//# sourceMappingURL=index.js.map