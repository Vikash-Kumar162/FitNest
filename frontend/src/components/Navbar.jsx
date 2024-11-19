import React from "react";

const Navbar = () => {
  return (
    <header>
      <div id="logo">
      <p>FITNEST</p>
      </div>
      
      <div class="nav-items">
        <div><a href="#Gym">Gym</a></div>
        <div><a href="#Yoga">Yoga</a></div>
        <div><a href="#Care">Care</a></div>
        <div><a href="#Sports">Sports</a></div>

      </div>
    </header>
    
  );
};

export default Navbar;