import React, { useEffect, useState } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
import styles from "../styles";

export default function WalletButton() {
  const [accountAddress, setAccountAddress] = useState("");
  const { ens } = useLookupAddress(); //ens = ethereum name service
  const { account, activateBrowserWallet, deactivate } = useEthers();

  useEffect(() => {
    if (ens) {
      setAccountAddress(ens);
    } else if (account) {
      setAccountAddress(shortenAddress(account));
    } else {
      setAccountAddress("");
    }
  }, [account, ens, setAccountAddress]);

  return (
    <button
      onClick={() => {
        if (!account) {
          activateBrowserWallet();
        } else {
          deactivate();
        }
      }}
      className={styles.walletButton}
    >
      { accountAddress ?  accountAddress : "Connect Wallet" }
    </button>
  )
}
