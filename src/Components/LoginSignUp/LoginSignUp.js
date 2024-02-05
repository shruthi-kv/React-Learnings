import React from "react";
import "./LoginSignUp.css";
import { useState } from "react";

export default function LoginSignUp() {

  const[action,setAction] = useState("Login")

  return (
    <div className="container">
      <div className="header">
        <div>
          <h3>{action}</h3>
          <hr></hr>
        </div>
      </div>

      <div className="inputs">
        {action ==="Login" ? <div></div> :<div className="Email">
          <input type="text" placeholder="Email"/>
        </div>}
        

        <div className="UserName">
          <input type="text" placeholder="UserName"/>
        </div>

        <div className="Password">
          <input type="text" placeholder="Password"/>
        </div>

        {action ==="Login" && <div className="forgotPAssword">
          <p>Forgot Password?</p>
        </div>}
       

      </div>
      <div className="submit">
      <button className={action ==="Login" ? "greyButton": "activeButton" } onClick={()=> setAction("SignUp")}>SignUp</button>
      <button className={action ==="Login" ? "activeButton":"greyButton"} onClick={()=> setAction("Login")}>Login</button>
      </div>
    </div>
  );
}
