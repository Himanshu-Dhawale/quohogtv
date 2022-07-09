import React from 'react'
import "../components/Navbar.css";
const Navbar = () => {
  return (
    <div>
    <nav class="nav-bar">
    <div class="nav-title">Title</div>
    <button class="nav-icon"><i class='bx bxs-user'></i></button>
    <button class="nav-icon"><i class='bx bxs-heart'></i></button>
    <button class="nav-icon"><i class='bx bxs-cart'></i></button>
    </nav>
    </div>
  )
}

export  {Navbar}