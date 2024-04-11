import React from 'react';
import { RiMenuLine, RiCloseLine, RiUserLine, RiShoppingCart2Line, RiSearchLine } from 'react-icons/ri';
 import './Navbar.css'; 

function Navbar(){
  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <img
            src="C:\Users\soman\OneDrive\Desktop\OfficialLogoedited.jpg"
            alt="PixelQuest Logo"
            className="as"
            width="70px"
            height="50px"
          />
        </a>

        <div className="nav__menu" id="nav__menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#" className="nav__link">Home</a>
            </li>

            <li className="nav__item">
              <a href="#about" className="nav__link">About</a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">Explore</a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">Creators</a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">Collections</a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link">Blog</a>
            </li>

            <li className="nav__item">
              <a href="#" className="nav__link" id="uscontact">Contact</a>
            </li>
          </ul>
          <div className="nav__close" id="nav__close">
            <RiCloseLine />
          </div>
        </div>

        <div className="nav__actions">
          <RiSearchLine className="nav__search" id="search-btn" />
          <RiUserLine className="nav__login" id="login-btn" />
          <RiShoppingCart2Line className="nav__cart" id="shopping_cart" />
          <div className="nav__toggle" id="nav__toggle">
            <RiMenuLine />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
