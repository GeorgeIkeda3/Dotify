import React, {useState, useEffect} from 'react';
import SidebarButton from "./sidebarButton";
import "./sidebar.css";
import { SiApplemusic } from "react-icons/si";
import { FaPlayCircle } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { PiSignOutBold } from "react-icons/pi";
import apiClient from "../../spotify";

export default function Sidebar() {
  const [image, setImage] = useState("https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png");
  useEffect(() => {
    apiClient.get("me").then(response => {
      setImage(response.data.images[0].url);})
  },[])

  const logout = () => {
    window.localStorage.removeItem("token");
    window.location.reload();
  }

  return (
    <div className="container-sidebar">
      <img src={image} className="image-profile" alt="Profile"></img>
      <div>
        <SidebarButton title="Feed" to="/feed" icon={<SiApplemusic />} />
        <SidebarButton title="Player" to="/player" icon={<FaPlayCircle />} />
        <SidebarButton title="Favorites" to="/favorites" icon={<FaHeart />} />
        <SidebarButton title="Library" to="/library" icon={<IoLibrary />} />
      </div>
      <p onClick={logout}><SidebarButton title="Sign Out" to="" icon={<PiSignOutBold />} /></p>
    </div>
  )
  }
