import React, { useState } from "react";

export default function AmmendForm() {
  return (
    <form>
      <h1 className="logintitle">DASHBOARD</h1>
      <h2 className="companyname">THIS IS MY WALLET - USERNAME</h2>
      <p>AMMEND YOUR CRYPTO WALLET BELOW</p>

      <label htmlFor="ADD">
        <b>ADD (NAME YOUR COIN)</b>
      </label>
      <input
        // value={newUser.userName}
        type="text"
        placeholder="Enter UserName"
        name="UserName"
        id="UserName"
        required
        // onChange={handleChange}
      />

      <label htmlFor="psw">
        <b>QUANTITY</b>
      </label>
      <input
        // value={newUser.email}
        type="email"
        placeholder="Enter Email"
        name="email"
        id="email"
        required
        // onChange={handleChange}
      />
    </form>
  );
}
