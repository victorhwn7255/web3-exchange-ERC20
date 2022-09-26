const styles = {
  // App.js
  container: "flex justify-center min-h-screen sm:px-16 px-6 bg-site-black",

  innerContainer: "flex justify-between items-center flex-col max-w-[1480px] w-full border border-dotted",

  header: "flex flex-row justify-between items-center w-full py-6 border border-dotted",

  exchangeContainer: "flex-1 flex justify-start items-center flex-col w-full mt-0 border border-dotted",
  headTitle: "text-white font-poppins font-black text-5xl tracking-wide",
  subTitle: "text-dim-white font-poppins font-medium mt-3 text-base",

  exchangeBoxWrapper: "mt-2 w-full flex justify-center",
  exchangeBox: "relative lg:max-w-[600px] xl:max-w-[700px] min-w-[400px] gradient-border p-[2px] rounded-3xl",
  exchange:
    "w-full min-h-[400px] bg-site-black backdrop-blur-[4px] rounded-3xl shadow-card flex p-10",

  // AmountIn & AmountOut
  amountContainer:
    "flex justify-between items-center flex-row w-full min-w-full bg-site-dim border-[1px] border-transparent hover:border-site-dim2 min-h-[96px] sm:px-6 sm:py-8 p-4 rounded-[20px]",
  amountInput:
    "w-full flex-1 bg-transparent outline-none font-poppins font-black text-2xl text-white",
  currencyButton:
    "flex flex-row items-center bg-site-dim2 py-2 px-4 rounded-xl font-mono font-bold text-white",
  currencyList:
    "absolute z-20 right-0 bg-site-black border-[1px] border-site-dim2 w-full mt-2 rounded-lg min-w-[170px] overflow-hidden",
  currencyListItem:
    "font-mono text-base text-white hover:text-dim-white px-5 py-3 hover:bg-site-dim2 cursor-pointer",

  // Exchange
  actionButton:
    "border-none outline-none px-10 py-2 font-poppins font-bold text-lg rounded-2xl leading-[24px] transition-all min-h-[56px]",
  message: "font-poppins font-lg text-white font-bold mt-7",

  // WalletButton
  walletButton:
    "bg-site-pink border-none outline-none px-6 py-2 font-poppins font-bold text-lg text-white rounded-3xl leading-[24px] hover:bg-pink-600 transition-all",

  // loader
  loader: "flex justify-center items-center flex-col w-full min-h-full",
  loaderImg: "w-56 h-56 object-contain",
  loaderText:
    "font-poppins font-normal text-dim-white text-lg text-center mt-10",

  // balance
  balance: "w-full text-left font-mono ml-3 text-sm",
  balanceText: "font-mono font-thin text-gray-400",
  balanceBold: " text-gray-400",
};

export default styles;
