const express = require('express');
const router = express.Router();
const { stakeNFT, getStakedNFTs } = require('../blockchain/tezosInteraction');

// 抵押 NFT 的 API
router.post('/stake-nft', async (req, res) => {
    const { tezosAddress, nftId } = req.body;
    const result = await stakeNFT(tezosAddress, nftId);
    res.json(result);
});

// 查询已抵押 NFT 的 API
router.get('/staked-nfts', async (req, res) => {
    const { tezosAddress } = req.query;
    const nfts = await getStakedNFTs(tezosAddress);
    res.json({ stakedNFTs: nfts });
});

module.exports = router;

