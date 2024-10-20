
# EtherLink License Issuer

The EtherLink License Issuer is a decentralized application (DApp) that allows users to issue and manage licenses for NFTs on EtherLink, a blockchain network compatible with Ethereum Virtual Machine (EVM). This tool is designed to cater to creators and IP holders who wish to issue NFTs as licenses with specified terms such as pricing, royalties, and expiration dates.

## Features

- **Connect Wallet**: Users can connect their MetaMask wallet to interact with the blockchain.
- **Issue License**: This feature allows users to either select an existing NFT by entering the Token ID or issue a new NFT by uploading an image. For both options, users can define the pricing, royalties, and the license period.
- **License NFT**: Upon confirmation, the application mints an NFT on the EtherLink blockchain. This NFT will display a composite image that includes the original or uploaded image along with a template showing the price, date, royalties, and an Artez watermark.
- **Market Integration**: After issuance, the tool provides an option to list the newly created license NFT on the Rarible marketplace for trading.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js and npm (Node Package Manager)
- Truffle Suite (for deploying and testing on local blockchain)
- MetaMask (or any other Web3 wallet) browser extension installed and set up

## Installation

Follow these steps to get your application up and running:

1. **Clone the repository**
   ```bash
   git clone 
   ```
2. **Navigate to the project directory**
   ```bash
   cd etherlink-license-issuer
   ```
3. **Install dependencies**
   ```bash
   npm install
   ```
4. **Deploy the smart contracts**
   ```bash
   truffle migrate --network development
   ```

## Running the Application

To run the application, use the following command:
```bash
npm start
```
This will start the backend server and the React application. Visit `http://localhost:3000` in your web browser to interact with the DApp.

## Usage

1. **Connect your MetaMask wallet** by clicking the 'Connect MetaMask' button on the home page.
2. **Choose to issue a new license** or bind a license to an existing NFT.
3. **Fill in the license details** such as the Token ID (for existing NFTs), pricing, royalties, and expiration date.
4. **Confirm and issue** the license. The NFT will be minted with the specified details and the Artez watermark.
5. **List on Rarible**: Follow the link to list your NFT on Rarible for sale.

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

## License

Distributed under the MIT License. See `LICENSE` for more information.
