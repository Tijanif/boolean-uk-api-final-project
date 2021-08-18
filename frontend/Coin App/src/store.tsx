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

const useStore = create(set => ({
    users: [],
    fetchUser: () => {
        fetch(`${basicUrl}/user`)
            .then(resp => resp.json())
            .then(usersFromServer => {
                set({ users: usersFromServer })
                console.log('users:', usersFromServer)
            })
    },
}))

export default useStore