import React from 'react'
import {Link} from "react-router-dom";
import "../components/Navbar.css";
import {BiLogIn} from 'react-icons/bi';
const Navbar = () => {
  return (
    <div>
    <nav className="nav-bar">
    <div className="nav-title">Quohog TV</div>
    <button className="nav-icon"><Link to={'/Login'}><BiLogIn/></Link></button>
    </nav>
    </div>
  )
}

export  {Navbar}