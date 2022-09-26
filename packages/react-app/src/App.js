import React from "react"
import { useEthers } from "@usedapp/core";
import styles from "./styles";
import logo from "./assets/marvel_logo.png"
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
    <div className="flex justify-center min-h-screen sm:px-16 px-6 bg-site-black" style={bgImage}>
      <div className="relative flex justify-between items-center flex-col max-w-[1480px] w-full">
        <header className="flex flex-row justify-between items-center w-full py-6">
          <div className="flex items-center ">
          <img
            src={logo}
            alt="uniswap-logo"
            className="xl:w-20 xl:h-20 w-16 h-16 object-contain"
          />
          <h1 className="text-white ml-3 font-poppins font-black text-xl lg:text-2xl xl:text-3xl tracking-tight hidden sm:block">Marvel Swap 3.0</h1>
          </div>
          <WalletButton />
        </header>

        <div className="flex-1 flex justify-start items-center flex-col w-full mt-0">
          {/* <p className="text-white font-poppins font-mono mt-3 text-3xl">World's First Crypto Exchange for Marvel Fans</p> */}
          <div className="mt-10 w-full flex justify-center">
            <div className="relative lg:max-w-[520px] xl:max-w-[700px] min-w-[450px] gradient-border p-[2px] rounded-3xl">
              <div className="pink_gradient" />
              <div className="w-full min-h-[400px] bg-site-black backdrop-blur-[4px] rounded-3xl shadow-card flex px-6 py-10">
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
        <div className="absolute bottom-10 left-3 flex items-center space-x-2">
          <div className="relative h-4 w-4 md:h-4 md:w-4 my-auto ml-1">
            <div className='h-full w-full absolute top-0 left-0 bg-[#2dbf00] rounded-full animate-ping'></div>
            <div className='h-full w-full absolute top-0 left-0 bg-[#2dbf00] rounded-full'></div>
          </div>
          <div className="font-mono text-green-400 text-sm">LIVE <span className="text-gray-200">| 6 gwei</span></div>
      </div>
      </div>
    </div>
  )
}

export default App;