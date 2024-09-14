import smartpy as sp

class ArtezstakeNFTContract(sp.Contract):
    def __init__(self):
        self.init(
            stakedNFTs = sp.big_map(tkey=sp.TAddress, tvalue=sp.TList(sp.TRecord(token_id=sp.TNat, collection=sp.TAddress))),
            owner=sp.none
        )

    @sp.entry_point
    def stakeNFT(self, params):
        sp.verify(sp.sender == params.owner, "Only owner can stake the NFT.")
        
        # Update the list of NFTs staked by this address
        if self.data.stakedNFTs.contains(params.owner):
            self.data.stakedNFTs[params.owner].push(sp.record(token_id=params.token_id, collection=params.collection))
        else:
            self.data.stakedNFTs[params.owner] = [sp.record(token_id=params.token_id, collection=params.collection)]
        
    @sp.entry_point
    def unstakeNFT(self, params):
        sp.verify(sp.sender == params.owner, "Only owner can unstake the NFT.")
        
        # Check if the owner has NFTs staked
        sp.verify(self.data.stakedNFTs.contains(params.owner), "No NFTs staked by this address.")
        
        # Remove the NFT from the staked list
        self.data.stakedNFTs[params.owner] = [nft for nft in self.data.stakedNFTs[params.owner] if nft.token_id != params.token_id]

        # If no NFTs left, remove the owner from the map
        if len(self.data.stakedNFTs[params.owner]) == 0:
            del self.data.stakedNFTs[params.owner]

    @sp.entry_point
    def getStakedNFTs(self, params):
        sp.verify(sp.sender == params.requester, "Unauthorized access.")
        
        # Return the list of staked NFTs for the requested owner
        sp.result(self.data.stakedNFTs.get(params.owner, []))

@sp.add_test(name="ArtezstakeNFTContractTest")
def test():
    scenario = sp.test_scenario()

    # Sample addresses
    alice = sp.test_account("Alice")
    bob = sp.test_account("Bob")
    
    # Deploy contract
    contract = ArtezstakeNFTContract()
    scenario += contract

    # Alice stakes an NFT
    scenario += contract.stakeNFT(owner=alice.address, token_id=1, collection=sp.address("KT1...")).run(sender=alice)
    
    # Bob stakes an NFT
    scenario += contract.stakeNFT(owner=bob.address, token_id=2, collection=sp.address("KT1...")).run(sender=bob)

    # Alice unstakes her NFT
    scenario += contract.unstakeNFT(owner=alice.address, token_id=1).run(sender=alice)

    # Retrieve staked NFTs
    scenario += contract.getStakedNFTs(requester=alice.address, owner=alice.address).run(sender=alice)

