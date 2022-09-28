import React, { useEffect, useState } from "react";
import { shortenAddress, useEthers, useLookupAddress } from "@usedapp/core";
// import styles from "../styles";
import mmLogo from '../assets/metamask.png'

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
      className="bg-indigo-500 border-none outline-none pl-3 pr-4 sm:pl-7 sm:pr-9 py-2 sm:py-2 font-poppins font-bold text-sm sm:text-base xl:text-lg text-white rounded-3xl leading-[24px] hover:bg-indigo-700 transition-all duration-300"
    >
      { accountAddress ?  accountAddress : <div className="flex items-center justify-center space-x-2">
     <img src={mmLogo} alt='Meta Logo' className="h-8 w-8 sm:h-8 sm:w-8"  />
     <p>Connect Wallet</p>
      </div> }
    </button>
  )
}
