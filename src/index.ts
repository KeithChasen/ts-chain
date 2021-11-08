class Block {
    public id: number;
    public hash: string;
    public previousHash: string;
    public data: string;
    public timestamp: number;
    constructor(id: number, hash: string, previousHash: string, data: string, timestamp: number) {
        this.id = id;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock: Block = new Block(0, 'adfasf', '', 'Hello', 123456);

let blockchain: [Block] = [genesisBlock];

console.log(blockchain);
