import React from "react"
import LogInButton from "../loginPage/LoginButton"
import LoginForm from "../loginPage/LoginForm"

export default function LogInPage (){
  

    return(
       <div className="logInPageStyles">

            <h1>login goes here</h1>

            <LoginForm />
            <LogInButton />

        </div>  
    )
    
   

}