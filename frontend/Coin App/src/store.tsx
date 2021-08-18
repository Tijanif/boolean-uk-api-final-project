import React from "react";
import create from "zustand";

export type UserType = {
 id: Number;
 userName: string;
 email: string;
 password: string;
 wallet: [];
}

export type WalletType = {
 id: Number;
 userId: Number;
 user: UserType;
 coinInWallet: [];
}

export type CoinType = {
 id: Number;
 name: string;
 value: Number;
 coinInWallet: [];
}

let basicUrl = 'http://localhost:4000'


const useStore = create((set, get) => ({
  usersList: [],
  getUsers: () => {
    fetch(`${basicUrl}/user`)
      .then((resp) => resp.json())
      .then((users) => {
        console.log("users from server:", users);
        
        set({ usersList: users })
      
      });
  },
}));

export default useStore;
