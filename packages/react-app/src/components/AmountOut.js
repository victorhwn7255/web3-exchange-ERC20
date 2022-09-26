import React, { useState, useEffect, useRef } from "react";
import { chevronDown } from "../assets";
import { useOnClickOutside, useAmountsOut } from "../utils";
import styles from "../styles";
import { formatUnits } from "ethers/lib/utils";


export default function AmountOut({ fromToken, toToken, amountIn, pairContract, currencyValue, onSelect, currencies }) {
  const [showList, setShowList] = useState(false)
  const [activeCurrency, setActiveCurrency] = useState("Select");
  const ref = useRef()

  useOnClickOutside(ref, () => setShowList(false))

  const amountOut = useAmountsOut(pairContract, amountIn, fromToken, toToken) ?? 0;

  const showAmountOut = formatUnits(amountOut)

  useEffect(() => {
    if (Object.keys(currencies).includes(currencyValue)) {
      setActiveCurrency(currencies[currencyValue]);
    } else {
      setActiveCurrency("Select")
    }
  }, [currencyValue, currencies]);

  return (
    <div className={styles.amountContainer}>
      <input 
        placeholder="0.0"
        type="number"
        value={showAmountOut.substring(0,12)}
        className={styles.amountInput}
        disabled
      />

      <div className="relative" ref={ref} onClick={() => {setShowList(!showList)}}>
        <button className={styles.currencyButton}>
          {activeCurrency}
          <img 
            src={chevronDown}
            alt="cheveron-down"
            className={`w-4 h-4 object-contain ml-2 transition-all duration-300 ${
              showList ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {showList && (
          <ul className={styles.currencyList}>
            {Object.entries(currencies).map(([token, tokenName], index) => (
              <li
                key={index}
                className={styles.currencyListItem}
                onClick={() => {
                  if (typeof onSelect === "function") onSelect(token);
                  setActiveCurrency(tokenName);
                  setShowList(false);
                }}
              >
                {tokenName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
