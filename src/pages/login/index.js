import React from 'react';
import { loginEndpoint } from "../../spotify";
import "./login.css";

export default function Login() {
  const client_id = "e639b192b1324f44a643c77254c8de15";
  const redirect_uri = "http://localhost:5000";
  const auth_EndPoint = "https://accounts.spotify.com/authorize";
  const response_type = "token";


  return (
    <div className="login-page">
        <img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_CMYK_Green.png" alt="logo" className="logo" />
        <a href={auth_EndPoint + '?client_id=' + client_id + "&redirect_uri=" + redirect_uri + "&response_type=" + response_type + '&show_dialog=true'}><div className="btn-login">LOG IN</div></a>
    </div>
  );
}
