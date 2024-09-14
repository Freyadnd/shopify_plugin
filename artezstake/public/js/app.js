document.addEventListener('DOMContentLoaded', function() {
    const stakeButton = document.getElementById('stakeButton');

    stakeButton.addEventListener('click', async function() {
        const response = await fetch('/api/stake-nft', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nftId: document.getElementById('nftId').value,
                tezosAddress: document.getElementById('tezosAddress').value
            })
        });

        const result = await response.json();
        if (result.success) {
            alert('NFT Staked Successfully');
        } else {
            alert('Error Staking NFT');
        }
    });
});
