import React from 'react';
// import './Header.css'; // Ensure global styles are imported

const Header = () => {
    return (
        <header className="header">
  <div className="header-container">
    <h1 className="header-title">
      MEHVERSE
    </h1>
    <nav className="nav-menu">
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </div>
</header>

    );
};

export default Header;
