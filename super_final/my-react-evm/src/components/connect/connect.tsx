import {
  WalletConnectReact,
  useReactWalletStore,
  WalletStore
} from 'btc-connect/dist/react';
import 'btc-connect/dist/style/index.css';
import styles from '../../styles/Nav.module.css'
import * as React from "react"


export default function Connect() {
  // const { address, publicKey, network, setModalVisible, connected } =
  //   useReactWalletStore((state: WalletStore) => state);

  const onConnectSuccess = async (wallet: any) => {
    console.log(wallet);
    console.log('btc-connect connect success');
  };
  const onConnectError = async (error: any) => {
    console.log('btc-connect connect error' + error);
  };
  const onDisconnectSuccess = async () => {
    console.log('disconnect success');
  };
  return <>
    <div className={styles.connect}>
      <WalletConnectReact
        config={{
          network: 'livenet',
          defaultConnectorId: 'okx',
        }}
        theme="light"
        onConnectSuccess={onConnectSuccess}
        onConnectError={onConnectError}
        onDisconnectSuccess={onDisconnectSuccess}
      />

    </div>
  </>;
}
