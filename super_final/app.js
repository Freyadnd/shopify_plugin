let web3;

window.onload = function() {
    if (typeof window.ethereum !== 'undefined' || (typeof window.web3 !== 'undefined')) {
        web3 = new Web3(window.ethereum || window.web3.currentProvider);

        window.ethereum.on('accountsChanged', function (accounts) {
            console.log('Accounts changed to:', accounts[0]);
        });

        window.ethereum.on('chainChanged', (chainId) => {
            window.location.reload();
        });
    } else {
        console.log('Please install MetaMask!');
        alert('Please install MetaMask!');
    }
};


async function connectWallet() {
    if (window.ethereum) {
        try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected account:", accounts[0]);
            document.querySelector('h1').textContent = 'Wallet connected: ' + accounts[0];
        } catch (error) {
            console.error("Wallet connection failed:", error);
            alert('Wallet connection failed: ' + error.message);
        }
    } else {
        alert("MetaMask is not enabled. Please enable MetaMask to connect.");
        console.log("MetaMask is not enabled.");
    }
}

