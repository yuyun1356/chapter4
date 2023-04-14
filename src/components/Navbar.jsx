import React, { useState } from "react";
import "./navbar.scss";
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const navigate = useNavigate()

  const [isScrolled, setIsScrolled] = useState(false);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className="navbar__container">
        <h1>MovieList</h1>
        <div className="navbar__button">
          <button type="submit" id="button_search" onClick={() => navigate('/searchmovie')}>
            Search
          </button>
          <button type="submit" id="button_login">
            Login
          </button>
          <button type="submit" id="button_register">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
