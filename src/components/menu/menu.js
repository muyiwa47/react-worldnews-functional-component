import React from 'react';
import './menu.css';

export default function Menu(props) {
  return (
    <div className="menu">
        <input type="checkbox" id="menu-toggle"/>
        <label id="trigger" for="menu-toggle"></label>
        <label id="burger" for="menu-toggle"></label>
        <ul id="menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Info</a></li>
        </ul>
    </div>
  );
}


