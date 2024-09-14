const { TezosToolkit } = require('@taquito/taquito');
const { InMemorySigner } = require('@taquito/signer');

const Tezos = new TezosToolkit('https://mainnet-tezos.giganode.io');

const contractAddress = 'KT1...'; // 智能合约地址

Tezos.setProvider({
    signer: new InMemorySigner('your-private-key')
});

// 抵押 NFT
async function stakeNFT(tezosAddress, tokenId) {
    try {
        const contract = await Tezos.contract.at(contractAddress);
        const operation = await contract.methods.stakeNFT({
            owner: tezosAddress,
            token_id: tokenId,
            collection: 'KT1...'
        }).send();

        await operation.confirmation();
        return { success: true, operationHash: operation.hash };
    } catch (error) {
        console.error('Error staking NFT:', error);
        return { success: false, error: error.message };
    }
}

// 查询抵押的 NFT
async function getStakedNFTs(tezosAddress) {
    try {
        const contract = await Tezos.contract.at(contractAddress);
        const storage = await contract.storage();
        return storage.stakedNFTs.get(tezosAddress) || [];
    } catch (error) {
        console.error('Error getting staked NFTs:', error);
        return [];
    }
}

module.exports = {
    stakeNFT,
    getStakedNFTs
};
