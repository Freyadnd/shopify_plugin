

import Header from "./components/ui/header";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from "@/components/ui/theme-provider"
import * as React from "react"
import { useState } from 'react';
import "./App.css";
import { Toaster } from "@/components/ui/toaster"
import { useToast } from "@/hooks/use-toast"

function App() {
  const [tokenId, setTokenId] = useState<number | string>('');
  const [quantity, setQuantity] = useState<number | string>('');
  const [price, setPrice] = useState<number | string>('');
  const [royalty, setRoyalty] = useState<number | string>('');
  const { toast } = useToast()

  // 处理钱包连接
  const connectWallet = () => {
    console.log("Connecting wallet...");
    // 在这里处理钱包连接的逻辑
  };

  // 处理 NFT 跨链
  const bridgeNFT = () => {
    console.log("Bridging NFT...");
    // 在这里处理 NFT 跨链的逻辑
  };

  // 创建许可
  const createLicense = () => {
    toast({
      title: "Mint success!",
    })
    // 在这里处理创建许可的逻辑
  };

  return (
    <>
      <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
        <BrowserRouter>
          <Header></Header>
          <Toaster />
          <div className="container">
            <div style={{ padding: '20px', backgroundColor: '#f4f4f9' }}>
              <h1 style={{ color: '#5a5a8d' }}>NFT Licensing Platform</h1>
              <div style={divStyle}>
                <h2>Bridge NFT</h2>
                <button
                  style={buttonStyle}
                  onClick={bridgeNFT}
                >
                  Bridge NFT
                </button>
              </div>

              <div style={divStyle}>
                <h2>Create License</h2>
                <input
                  type="number"
                  value={tokenId}
                  onChange={(e) => setTokenId(e.target.value)}
                  placeholder="Token ID"
                  style={inputStyle}
                />
                <input
                  type="number"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  placeholder="Quantity"
                  style={inputStyle}
                />
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Price (in wei)"
                  style={inputStyle}
                />
                <input
                  type="number"
                  value={royalty}
                  onChange={(e) => setRoyalty(e.target.value)}
                  placeholder="Royalty Percentage"
                  style={inputStyle}
                />
                <button
                  style={buttonStyle}
                  onClick={createLicense}
                >
                  Create License
                </button>
              </div>
            </div>
          </div>

        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

const buttonStyle: React.CSSProperties = {
  backgroundColor: '#8a2be2', // BlueViolet
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  margin: '10px 0',
  borderRadius: '5px',
  cursor: 'pointer',
};

const divStyle: React.CSSProperties = {
  backgroundColor: '#e0e0ff', // Light blue background
  padding: '20px',
  borderRadius: '8px',
  marginBottom: '20px',
};

const inputStyle: React.CSSProperties = {
  padding: '8px',
  margin: '10px 0',
  border: '2px solid #8a2be2',
  borderRadius: '4px',
  width: 'calc(100% - 22px)', // Full-width minus padding and border
};

export default App;
