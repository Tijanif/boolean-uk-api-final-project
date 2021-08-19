import React from "react";

import { Link } from "react-router-dom";
import "../pages/WalletPageStyles.css";

export default function WalletButton() {
  return (
    <button className="WalletButton">
      <Link className="walletBttnText" to="/dashboard">
        Ammend Coins In My Wallet
      </Link>
    </button>
  );

}
