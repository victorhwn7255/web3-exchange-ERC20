import React from "react";
import { formatUnits, parseUnits } from "ethers/lib/utils";
import styles from "../styles";


export default function Balance({ tokenBalance }) {

  return (
    <div className={styles.balance}>
      <p className={styles.balanceText}>
        {tokenBalance && (
          <>
            <p className={styles.balanceBold}>Balance: {formatUnits(tokenBalance || parseUnits("0"))}</p>
          </>
        )}
      </p>
    </div>
  )
}
