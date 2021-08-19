import React from "react";
import LogInButton from "../loginPage/LoginButton";
import LoginForm from "../loginPage/LoginForm";

export default function LogInPage() {
  return (
    <div className="logInPageStyles">
      <LoginForm />
      <LogInButton />
    </div>
  );
}
