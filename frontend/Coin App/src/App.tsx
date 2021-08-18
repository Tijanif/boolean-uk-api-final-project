import React, { useEffect, useState } from 'react'
import { Switch, Route } from "react-router-dom";
import Dashboard from "./components/pages/Dashboard"
import LogInPage from "./components/pages/LoginPage";
import Wallet from "./components/pages/Wallet";


import './App.css'
import useStore from './store';


function App() {
  const [user, setUser] = useState(null)

    const getUsers = useStore((store) => store.getUsers);
  const usersList = useStore((store) => store.usersList);

  useEffect(() => {
    getUsers();
    
    
  }, []);

  // useEffect(() => {
  //   fetch("http://localhost:4000/user")
  //   .then(response => response.json())
  //   .then(data => setUser(data))
  // console.log('getting data', user);
  
    
  // },[])

//   function getUsers() {
//     return fetch("http://http://localhost:4000/users").then((response) =>
//       response.json()
//     );
//   }

// useEffect(() => {
//     getUsers().then(setUser);
//     console.log("from use effect", user);
//   }, []);

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





     