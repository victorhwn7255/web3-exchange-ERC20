import React, { useEffect, useState } from "react";
import { Contract } from "@ethersproject/contracts";
import { abis } from "@my-app/contracts";
import {
  ERC20,
  useContractFunction,
  useEthers,
  useTokenAllowance,
  useTokenBalance,
} from "@usedapp/core";
import { ethers } from "ethers";
import { parseUnits } from "ethers/lib/utils";
import { ROUTER_ADDRESS } from "../config";
import styles from "../styles";
import AmountIn from "./AmountIn";
import AmountOut from "./AmountOut";
import Balance from "./Balance";
import {
  getAvailableTokens,
  getCounterpartTokens,
  findPoolByTokens,
  isOperationPending,
  getFailureMessage,
  getSuccessMessage,
} from "../utils";
import { BsFillArrowDownSquareFill } from 'react-icons/bs'

export default function Exchange({ pools }) {
  const { account } = useEthers();
  const [fromValue, setFromValue] = useState("0");
  const [fromToken, setFromToken] = useState(pools[0].token0Address); // initialFromToken
  const [toToken, setToToken] = useState("");
  const [resetState, setResetState] = useState(false);

  const fromValueBigNumber = parseUnits(fromValue || ""); // converse the string to bigNumber
  const availableTokens = getAvailableTokens(pools);
  const counterpartTokens = getCounterpartTokens(pools, fromToken);
  const pairAddress = findPoolByTokens(pools, fromToken, toToken)?.address ?? "";

  const routerContract = new Contract(ROUTER_ADDRESS, abis.router02);
  const fromTokenContract = new Contract(fromToken, ERC20.abi);
  const fromTokenBalance = useTokenBalance(fromToken, account);
  const toTokenBalance = useTokenBalance(toToken, account);
  const tokenAllowance = useTokenAllowance(fromToken, account, ROUTER_ADDRESS) || parseUnits("0");
  const approvedNeeded = fromValueBigNumber.gt(tokenAllowance);
  const formValueIsGreaterThan0 = fromValueBigNumber.gt(parseUnits("0"));
  const hasEnoughBalance = fromValueBigNumber.lte(
    fromTokenBalance ?? parseUnits("0")
  );

  // approve initiating a contract call (similar to use state) -> gives the state and the sender...
  const { state: swapApproveState, send: swapApproveSend } =
    useContractFunction(fromTokenContract, "approve", {
      transactionName: "onApproveRequested",
      gasLimitBufferPercentage: 10,
    });

  // swap initiating a contract call (similar to use state) -> gives the state and the sender...
  const { state: swapExecuteState, send: swapExecuteSend } =
    useContractFunction(routerContract, "swapExactTokensForTokens", {
      transactionName: "swapExactTokensForTokens",
      gasLimitBufferPercentage: 10,
    });

  const isApproving = isOperationPending("approve");
  const isSwapping = isOperationPending("swap");
  const canApprove = !isApproving && approvedNeeded;
  const canSwap = !approvedNeeded && !isSwapping && formValueIsGreaterThan0 && hasEnoughBalance;

  const successMessage = getSuccessMessage(swapApproveState, swapExecuteState);
  const failureMessage = getFailureMessage(swapApproveState, swapExecuteState);

  const onApproveRequested = () => {
    swapApproveSend(ROUTER_ADDRESS, ethers.constants.MaxUint256);
  };

  // https://docs.uniswap.org/protocol/V2/reference/smart-contracts/router-02#swapexacttokensfortokens
  const onSwapRequested = () => {
    swapExecuteSend(
      fromValueBigNumber,
      0,
      [fromToken, toToken],
      account,
      Math.floor(Date.now() / 1000) + 60 * 20
    ).then((_) => {
      setFromValue("0");
    });
  };

  const onFromValueChange = (value) => {
    const trimmedValue = value.trim();
    try {
      if(trimmedValue) {
        parseUnits(value)
        setFromValue(value)
      }
    } catch (err) {
        console.log(err)
    }
  };

  const onFromTokenChange = (value) => {
    setFromToken(value);
  };

  const onToTokenChange = (value) => {
    setToToken(value);
  };

  useEffect(() => {
    if(failureMessage || successMessage) {
      setTimeout(() => {
        setResetState(true)
        setFromValue("0")
        setToToken("")
      }, 5000)
    }
  }, [failureMessage, successMessage])


  return (
    <div className="flex flex-col w-full items-center relative">
      <div className="flex items-center font-mono fixed top-6 left-6">
        <Balance tokenBalance={fromTokenBalance} /> 
      </div>
      <div className="mt-3">
        <AmountIn 
          value={fromValue.slice(0,1) === "0" ? "" : fromValue}
          onChange={onFromValueChange}
          currencyValue={fromToken}
          onSelect={onFromTokenChange}
          currencies={availableTokens}
          isSwapping={isSwapping && hasEnoughBalance}
        />
      </div>
      <div className="h-[45px] w-[45px] z-10 -mt-4 text-[#CCF4FE] flex justify-center items-center rounded-lg bg-site-black">
        <BsFillArrowDownSquareFill size={28} />
      </div>
      <div className="-mt-5 mb-14 w-[100%]">
        <AmountOut 
          fromToken={fromToken}
          toToken={toToken}
          amountIn={fromValueBigNumber}
          pairContract={pairAddress}
          currencyValue={toToken}
          onSelect={onToTokenChange}
          currencies={counterpartTokens}
        />
        <div className="ml-1 mt-2">
        <Balance tokenBalance={toTokenBalance} />
        </div>
      </div>

      {approvedNeeded && !isSwapping ? (
        <button
          disabled={!canApprove}
          onClick={onApproveRequested}
          className={`${
            canApprove
              ? "bg-sky-500 text-white hover:bg-sky-700 duration-200"
              : "bg-site-dim2 text-site-dim2"
          } ${styles.actionButton}`}
        >
          {isApproving ? "Approving" : "Approve"}
        </button>
      ) : (
        <button
          disabled={!canSwap}
          onClick={onSwapRequested}
          className={`${
            canSwap
              ? "bg-sky-500 text-white hover:bg-sky-700 duration-200"
              : "bg-site-dim2 text-site-dim2"
          } ${styles.actionButton}`}
        >
          {isSwapping
            ? "Swapping..."
            : "hasEnoughBalance"
            ? "Swap"
            : "Insufficient balance"}
        </button>
      )}

      {failureMessage && !resetState ? (
        <p className={styles.message}>{failureMessage}</p>
      ) : successMessage ? (
        <p className={styles.message}>{successMessage}</p>
      ) : (
        ""
      )}
    </div>
  );
}
