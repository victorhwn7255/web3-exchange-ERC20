import React, { useState } from 'react'
import { useEthers } from "@usedapp/core";
// import styles from "./styles";
import logo from "./assets/marvel_logo.png"
import { Exchange, Loader, WalletButton } from "./components";
import { usePools } from "./hooks";
import { bg_1, bg_2, bg_3, bg_4, bg_5, bg_6, bg_7, bg_8, bg_9, bg_10, bg_11, bg_12, bg_13, bg_14, bg_15, bg_16, bg_17, bg_18, bg_19, bg_20 } from './assets';
import side_img from './assets/side_5.png'
import theme_btn from './assets/theme_btn.png'
import { MdSwapVerticalCircle } from 'react-icons/md'
import { FaChartPie } from 'react-icons/fa'
import eye from './assets/eye_2.png'


const App = () => {
  //use the useEthers hook
  const { account } = useEthers()

  //use the usePools hook
  const [loading, pools] = usePools()

  const [swapOpen, setSwapOpen] = useState(true)
  const [poolOpen, setPoolOpen] = useState(false)

  const swapClick = () => {
    setSwapOpen(true)
    setPoolOpen(false)
  }

  const poolClick = () => {
    setSwapOpen(false)
    setPoolOpen(true)
  }

  window.addEventListener('mousemove', (e) => {
    // console.log(e.clientX)
    const mouseX = e.clientX
    const mouseY = e.clientY

    const anchor = document.getElementById('anchor')
    const rekt = anchor.getBoundingClientRect()
    const anchorX = rekt.left + rekt.width / 2
    const anchorY = rekt.top + rekt.height / 2

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY)
    console.log(angleDeg)

    const eyes = document.querySelectorAll('.eye')
      eyes.forEach(eachEye => {
        eachEye.style.transform = `rotate(${90 + angleDeg}deg)`
      })
  })

  function angle(cx, cy, ex, ey) {
    const dy = ey - cy
    const dx = ex - cx
    const rad = Math.atan2(dy, dx)
    const deg = rad * 180 / Math.PI
    return deg
  }
  const bgImage_1 = {
    backgroundImage: `url(${bg_1})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_2 = {
    backgroundImage: `url(${bg_2})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_3 = {
    backgroundImage: `url(${bg_3})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_4 = {
    backgroundImage: `url(${bg_4})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_5 = {
    backgroundImage: `url(${bg_5})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_6 = {
    backgroundImage: `url(${bg_6})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_7 = {
    backgroundImage: `url(${bg_7})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_8 = {
    backgroundImage: `url(${bg_8})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_9 = {
    backgroundImage: `url(${bg_9})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_10 = {
    backgroundImage: `url(${bg_10})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_11 = {
    backgroundImage: `url(${bg_11})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_12 = {
    backgroundImage: `url(${bg_12})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_13 = {
    backgroundImage: `url(${bg_13})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_14 = {
    backgroundImage: `url(${bg_14})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_15 = {
    backgroundImage: `url(${bg_15})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_16 = {
    backgroundImage: `url(${bg_16})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_17 = {
    backgroundImage: `url(${bg_17})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_18 = {
    backgroundImage: `url(${bg_18})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_19 = {
    backgroundImage: `url(${bg_19})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgImage_20 = {
    backgroundImage: `url(${bg_20})`,
    height: '100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'
  }

  const bgArray = [bgImage_1, bgImage_2, bgImage_3, bgImage_4, bgImage_5, bgImage_6, bgImage_7, bgImage_8, bgImage_9, bgImage_10, bgImage_11, bgImage_12, bgImage_13, bgImage_14, bgImage_15, bgImage_16, bgImage_17, bgImage_18, bgImage_19, bgImage_20]


  const [themeNum, setThemeNum] = useState(4)
 

  return (
    <div 
      className="relative flex justify-center min-h-screen sm:px-16 px-6 bg-site-black" 
      style={bgArray[themeNum]} 
    >
      <img src={side_img} alt="side-img" id="anchor" className="fixed hidden lg:block absolute w-[420px] -top-[10px] left-[30px] z-10" />
      <div className='hidden lg:block' id='eyes'>
        <img src={eye} alt="eye" className='eye absolute w-[33px] top-[380px] left-[215px] z-20' />
        <img src={eye} alt="eye" className='eye absolute w-[33px] top-[365px] left-[275px] z-20' />
      </div>
      <div className="relative flex justify-between items-center flex-col max-w-[1580px] w-full">
        {/* NAV BAR */}
        <header className="flex flex-row justify-between items-center w-full py-6">

          {/* LEFT Side */}
          <div className="flex items-center w-full md:w-[25%] z-20">
            <img
              src={logo}
              alt="uniswap-logo"
              className="xl:w-20 xl:h-20 w-16 h-16 object-contain"
            />
            <h1 className="logo-text text-white ml-3 font-poppins font-black text-xl lg:text-3xl xl:text-4xl tracking-tight hidden lg:block">Marvel Swap</h1>
          </div>

          {/* toggle bar */}
          <div className="hidden md:flex justify-center items-center w-[50%]">
            <div className='flex justify-between space-x-1 max-w-[60%] min-w-[400px] p-[7px] rounded-xl bg-site-black shadow
            h-[3.5rem] xl:h-[3.6rem] shadow-xl'>
              <div
                onClick={swapClick} 
                className= {`duration-200 flex items-center group rounded-xl p-2 w-full cursor-pointer flex justify-center items-center space-x-1
                    ${swapOpen ? 'bg-sky-500 w-[50%] text-gray-50' : 'text-gray-100 hover:bg-site-dim2 hover:text-gray-50 w-[50%]'}`}>
                <MdSwapVerticalCircle size={23} className="group-hover:rotate-180 duraing-500 transition-all" />
                <h2 className='text-center font-mono font-bold'>Swap</h2>

              </div>
              <div
                onClick={poolClick} 
                className= {`duration-200 flex items-center group rounded-xl p-2 w-full cursor-pointer flex justify-center items-center space-x-2 
                    ${poolOpen ? 'bg-sky-500 w-[50%] text-gray-50' : 'text-gray-100 hover:bg-site-dim2 hover:text-gray-50 w-[50%]'}`}>
                <FaChartPie size={23} className="group-hover:rotate-180 duraing-500 transition-all" />
                <h2 className='text-center font-mono font-bold'>Pool</h2>

              </div>
            </div>
          </div>

          {/* RIGHT side */}
          <div className='md:w-[25%] w-full flex items-center space-x-3'>
            {/* theme button */}
            <button className='flex justify-end ml-auto rounded-full ring-2 ring-yellow-400 hover:scale-[0.97] hover:ring-4 hover:ring-emerald-500 duration-300'>
              <img 
                className='w-[45px] '
                onClick={() => setThemeNum(Math.floor(Math.random() * 19))}
                src={theme_btn} 
                alt="theme button" 
              />
            </button>
            {/* wallet button */}
            <div className="">
              <WalletButton />
            </div>
          </div>
        </header>

        <div className="flex-1 flex justify-start items-center flex-col w-full mt-0">
          {/* <p className="text-white font-poppins font-mono mt-3 text-3xl">World's First Crypto Exchange for Marvel Fans</p> */}

          {/* EXCHANGE BOX */}
          {swapOpen && <div className="md:mt-16 mt-[8rem] w-full flex justify-center">
            <div className="relative lg:max-w-[520px] xl:max-w-[700px] min-w-[450px] gradient-border p-[2px] rounded-3xl shadow-2xl">
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