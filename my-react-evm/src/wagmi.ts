
import {
    RainbowKitProvider,
    getDefaultConfig,
    Chain,
} from '@rainbow-me/rainbowkit';

const avalanche = {
    id: 42793,
    name: 'Etherlink Mainnet',
    iconUrl: 'https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png',
    iconBackground: '#fff',
    nativeCurrency: { name: 'Etherlink', symbol: 'XTZ', decimals: 18 },
    rpcUrls: {
        default: { http: ['https://node.mainnet.etherlink.com'] },
    },
    blockExplorers: {
        default: { name: 'SnowTrace', url: 'https://explorer.etherlink.com/' },
    },
    contracts: {
        multicall3: {
            address: '0xsr1Ghq66tYK9y3r8CC1Tf8i8m5nxh8nTvZEf',
            blockCreated: 11_907_934,
        },
    },
} as const satisfies Chain;
export const config = getDefaultConfig({
    appName: 'My RainbowKit App',
    projectId: 'YOUR_PROJECT_ID',
    chains: [avalanche],
});


