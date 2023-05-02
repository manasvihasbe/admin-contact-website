import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleCloseMenu = () => {
    setIsChecked(false);
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src="https://brandradiator.com/images/BR-logo1.png" height="40" />
        </div>
        <input type="checkbox" id="menu-toggle" checked={isChecked} onChange={handleToggle} />
        <label htmlFor="menu-toggle" className="menu-icon">
          &#9776;
        </label>
        <ul className="menu">
          <li>
            <Link to="/" onClick={handleCloseMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" onClick={handleCloseMenu}>
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleCloseMenu}>
              Contact Us
            </Link>
          </li>
          <li>
            <Link to="/admin" onClick={handleCloseMenu}>
              Admin
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
