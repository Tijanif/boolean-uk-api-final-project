import React from "react";
import { Link } from "react-router-dom";

export default function AmendButton() {
  return (
    <button className="AmendButton">
      <Link className="amendBttnText" to="/wallet">
        Click to Amend your Wallet
      </Link>
    </button>
  );
}
