import React, { useState } from 'react'
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard"
import LogInPage from "./components/pages/LoginPage";
import Wallet from "./components/pages/Wallet";


import './App.css'

function App() {
  return (
    <div className="App">
      

        <Switch>

          <Route path="/login" exact>
            <LogInPage />
          </Route>

          <Route path="/dashboard" exact>
            <Dashboard/>
          </Route>

          <Route path="/wallet" exact>
         <Wallet />
          </Route>

          <Route>
            <h3>Error 404</h3>
          </Route>

        </Switch>

    </div>
  )
}

export default App



     