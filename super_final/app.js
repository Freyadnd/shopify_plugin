async function connectWallet() {
    if (window.ethereum) {
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        console.error("Non-Ethereum browser detected. You should consider trying MetaMask!");
    }
}

async function bridgeNFT() {
    const contract = new web3.eth.Contract(TezosBridgeABI, TezosBridgeAddress);
    const accounts = await web3.eth.getAccounts();
    contract.methods.mint(accounts[0]).send({ from: accounts[0] })
        .on('receipt', function(receipt){
            console.log('NFT Bridged:', receipt);
        });
}

async function createLicense() {
    const tokenId = document.getElementById('tokenId').value;
    const quantity = document.getElementById('quantity').value;
    const price = document.getElementById('price').value;
    const royalty = document.getElementById('royalty').value;
    const contract = new web3.eth.Contract(LicenseContractABI, LicenseContractAddress);
    const accounts = await web3.eth.getAccounts();
    contract.methods.createLicense(tokenId, quantity, price, royalty).send({ from: accounts[0] })
        .on('receipt', function(receipt){
            console.log('License Created:', receipt);
        });
}
