
# EtherLink License Issuer - ArTez

To provide a clearer understanding of how your application functions and to outline the process users will follow, you can include a detailed description and a flowchart in your README. Below, I'll draft a README section that explains how the application works, focusing on the wallet connection and licensing options. I'll also describe what happens behind the scenes when a user wants to issue a license using an existing NFT.

### How the Application Works

**Overview:**

Our application offers a seamless platform for NFT licensing on various blockchains. Users can connect their wallets and choose from three main options to create or manage NFT licenses. The process ensures that the user owns the NFT or has appropriate bridging history before a license is issued. Once a license is created, the user can opt to list their license NFT on Rarible for trading.

**Process Flow:**

1. **Connect Wallet:**
   Users start by connecting their digital wallets through a user-friendly interface powered by RainbowKit, which supports multiple blockchain networks.

2. **Choose Licensing Option:**
   Once connected, users have three options depending on their needs:
   - **Create New License:** Users can create a brand-new NFT license by entering the image URL, specifying the quantity, and setting the royalty percentage.
   - **Create License from Tezos NFT:** Users can create a license based on an existing Tezos NFT by entering the contract ID and token ID.
   - **Create License from Other EVM Chains:** Users can create a license based on an NFT from another EVM-compatible chain by providing the chain ID, contract ID, and token ID.

3. **Verification Process:**
   - **For existing NFTs (Tezos and other EVM chains):**
     - The application verifies that the connected wallet owns the NFT on the specified chain.
     - For Tezos NFTs, it also checks if the NFT's address has a bridging history with the current wallet.

4. **Issue License:**
   - If all verifications are successful, the application allows the user to issue the NFT license. This license then becomes a new NFT, which can include specified metadata such as the original NFT's image combined with licensing terms.

5. **Listing on Rarible:**
   - After creating a license NFT, users are directed to Rarible where they can choose to list their newly created license NFT for sale or trading.



