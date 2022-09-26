import React, { useState, useEffect, useRef } from "react";
import { chevronDown } from "../assets";
import { useOnClickOutside } from "../utils";
import styles from "../styles";


export default function AmountIn({ value, onChange, currencyValue, onSelect, currencies, isSwapping }) {
  const [showList, setShowList] = useState(false)
  const [activeCurrency, setActiveCurrency] = useState("Select");
  const ref = useRef()

  useOnClickOutside(ref, () => setShowList(false))

  useEffect(() => {
    if (Object.keys(currencies).includes(currencyValue))
      setActiveCurrency(currencies[currencyValue]);
    else setActiveCurrency("Select");
  }, [currencies, currencyValue]);


  return (
    <div className={styles.amountContainer}>
      <input 
        placeholder="0.0"
        type="number"
        value={value}
        disabled={isSwapping}
        onChange={(e) => typeof onChange === "function" && onChange(e.target.value)}
        className={styles.amountInput}
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
                className={`${styles.currencyListItem} ${
                  activeCurrency === tokenName ? "bg-site-dim2" : ""
                } cursor-pointer`}
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
