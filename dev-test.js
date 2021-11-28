const Block = require('./block');

const gooBlock = Block.mineBlock(Block.genesis(), 'goo');
console.log(gooBlock.toString());