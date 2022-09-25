import React from "react"
import { useEthers } from "@usedapp/core";
import styles from "./styles";
import { uniswapLogo } from "./assets";
import { Exchange, Loader, WalletButton } from "./components";
import { usePools } from "./hooks";
import bg_1 from './assets/bg_1.jpg'


const App = () => {
  //use the useEthers hook
  const { account } = useEthers()

  //use the usePools hook
  const [loading, pools] = usePools()

  const bgImage = {
    backgroundImage: `url(${bg_1})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className={styles.container} style={bgImage}>
      <div className={styles.innerContainer}>
        <header className={styles.header}>
          <img
            src={uniswapLogo}
            alt="uniswap-logo"
            className="w-16 h-16 object-contain"
          />
          <WalletButton />
        </header>

        <div className={styles.exchangeContainer}>
          <h1 className={styles.headTitle}>Marvel Swap 3.0</h1>
          <p className={styles.subTitle}>The Most Secure Platform to Swap ERC20 Tokens</p>

          <div className={styles.exchangeBoxWrapper}>
            <div className={styles.exchangeBox}>
              <div className="pink_gradient" />
              <div className={styles.exchange}>
              {account ? (
                  loading ? (
                    <Loader title="Token Paris loading..." />
                  ) : (
                    <Exchange pools={pools} />
                  )
                ) : (
                  <Loader title="Please connect your wallet" />
                )}
              </div>
              <div className="blue_gradient" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;