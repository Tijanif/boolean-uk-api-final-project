import React from "react";

import "../pages/WalletPageStyles.css";

export default function CoinTable() {
  return (
    <table className="coinTable">
      <tr>
        <th className="heldCoins">COINS I HOLD</th>
        <th className="noOfCoins">QUANTITY OF COINS</th>

      </tr>
      <tr>
        <td>BITCOIN</td>
        <td>5000</td>
      </tr>
      <tr>
        <td>ETHERIUM</td>
        <td>20000</td>
      </tr>
      <tr>
        <td>CARDANO</td>
        <td>7000000</td>
      </tr>
      <tr>
        <td>SOLANO</td>
        <td>3000</td>
      </tr>
    </table>
  );
}
