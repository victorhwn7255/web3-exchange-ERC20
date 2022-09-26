import React, { useState } from 'react'
import { useEthers } from "@usedapp/core";
import styles from "./styles";
import logo from "./assets/marvel_logo.png"
import { Exchange, Loader, ToggleBar, WalletButton } from "./components";
import { usePools } from "./hooks";
import bg_1 from './assets/bg_1.jpg'


const App = () => {
  //use the useEthers hook
  const { account } = useEthers()

  //use the usePools hook
  const [loading, pools] = usePools()

  const [swapOpen, setSwapOpen] = useState(true)
  const [poolOpen, setPoolOpen] = useState(false)

  const emailClick = () => {
    setSwapOpen(true)
    setPoolOpen(false)
  }

  const passwordClick = () => {
    setSwapOpen(false)
    setPoolOpen(true)
  }

  const bgImage = {
    backgroundImage: `url(${bg_1})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  return (
    <div className="flex justify-center min-h-screen sm:px-16 px-6 bg-site-black" style={bgImage}>
      <div className="relative flex justify-between items-center flex-col max-w-[1480px] w-full">
        {/* NAV BAR */}
        <header className="flex flex-row justify-between items-center w-full py-6">
          {/* logo + name */}
          <div className="flex items-center w-[20%] ">
            <img
              src={logo}
              alt="uniswap-logo"
              className="xl:w-20 xl:h-20 w-16 h-16 object-contain"
            />
            <h1 className="text-white ml-3 font-poppins font-black text-xl lg:text-2xl xl:text-3xl tracking-tight hidden sm:block">Marvel Swap 3.0</h1>
          </div>
          {/* toggle bar */}
          <div className="hidden md:flex border justify-center items-center w-[50%]">
            <div className='flex justify-between space-x-1 max-w-[60%] min-w-[400px] p-1 rounded-lg bg-site-black shadow
            h-[3rem] xl:h-[4rem]'>
              <div
                onClick={emailClick} 
                className= {`duration-200 rounded-lg p-2 w-full cursor-pointer flex justify-center items-center space-x-2
                    ${swapOpen ? 'bg-site-purple w-[50%] text-gray-50' : 'hover:bg-site-dim2 hover:text-gray-50 w-[50%]'}`}>
                <h2 className='text-center font-mono font-bold'>Swap</h2>

              </div>
              <div
                onClick={passwordClick} 
                className= {`duration-200 rounded-lg p-2 w-full cursor-pointer flex justify-center items-center space-x-2 
                    ${poolOpen ? 'bg-site-purple w-[50%] text-gray-50' : 'hover:bg-site-dim2 hover:text-gray-50 w-[50%]'}`}>
                <h2 className='text-center font-mono font-bold'>Pool</h2>

              </div>
            </div>
          </div>
          {/* wallet button */}
          <div className="w-[20%] flex justify-end">
            <WalletButton />
          </div>
        </header>

        <div className="flex-1 flex justify-start items-center flex-col w-full mt-0">
          {/* <p className="text-white font-poppins font-mono mt-3 text-3xl">World's First Crypto Exchange for Marvel Fans</p> */}
          {/* EXCHANGE BOX */}
          {swapOpen && <div className="mt-10 w-full flex justify-center">
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
          </div>}
          {poolOpen && <div className="mt-10 w-full flex justify-center">
          <div className="relative lg:max-w-[520px] xl:max-w-[700px] min-w-[450px] gradient-border p-[2px] rounded-3xl">
              <div className="pink_gradient" />
              <div className="w-full min-h-[400px] bg-site-black backdrop-blur-[4px] rounded-3xl shadow-card flex justify-center items-center px-6 py-10">
                <h2 className='font-mono'>LP Farming coming soon...</h2>
              </div>
              <div className="blue_gradient" />
            </div>
          </div>}
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