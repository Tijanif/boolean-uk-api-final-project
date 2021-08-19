import React from "react";
import CoinTable from "../components/CoinTable";
import WalletButton from "../components/WalletButton";

export default function Wallet() {
  return (
    <div>
      <h1 className="logintitle">wallet</h1>
      <h2>Wallet belongs to User goes here</h2>
      <CoinTable />
      <WalletButton />
    </div>
  );
}
