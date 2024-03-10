import React from 'react';
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  return (
    <div className="login-page">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="logo" className="logo" />
        <a href={loginEndpoint}><div className="btn-login">LOG IN</div></a>
    </div>
  );
}
