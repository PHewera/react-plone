import React from 'react';
import logo from '../images/logo.svg';
import '../style/header.css';

function Header() {
  return (
    <div id="portal-header">
      <div id="topbar">
        <div id="logo-wrapper">
          <img src={logo} id="portal-logo" alt="logo" />
        </div>
        <div id="title-wrapper">
          <span id="portal-title">Portal Title</span>
        </div>
      </div>
      <div id="navigation">
        <ul id="navigation-wrapper">
          <li className="nav-element"><a href="#">Nav Element 1</a></li>
          <li className="nav-element"><a href="#">Nav Element 2</a></li>
          <li className="nav-element"><a href="#">Nav Element 3</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
