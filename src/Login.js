import React from "react";
import "./Login.css";
import iiitulogo from "./iiitulogo.png";
import { Button } from "@material-ui/core";
import { auth, provider } from "./fireabse";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    //sign in..
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        // console.log(result.user);
      })
      .catch((error) => alert(error.message));
  };

  return (
    // <div className="background">
    //   <img
    //     src={"https://wallpaperaccess.com/full/1567666.png"}
    //     alt="background image"
    //   />
    <div className="login">
      <div className="login__logo">
        <img src={iiitulogo} alt="IIIT Una logo" />

        <p>Social Book</p>
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
    // </div>
  );
}

export default Login;
