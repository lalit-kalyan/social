import "./login.css";
import { useContext, useState } from "react";
import {loginCall} from "../../apiCalls"
import { AuthContext } from "../../context/AuthContext";
import {CircularProgress} from "@material-ui/core"



export default function Login() {
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const {isFetching , error , dispatch , user} = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault();
   loginCall({email, password} , dispatch)
  };

  console.log(user)
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Lamasocial</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              type="email"
              placeholder="email"
              className="loginInput"
              onChange={(e) => setemail(e.target.value)}
            />

            <input
              type="text"
              placeholder="Password"
              className="loginInput"
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="loginButton" onClick={handleClick}>
              {isFetching ? <CircularProgress color="white" size="15px" />  : "Log-In"}
            </button>

            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              Create a New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
