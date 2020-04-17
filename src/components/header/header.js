import React from 'react';
import './header.css';
import logo from './left-round-32.png';

export default function Header(props) {

  function getStyle() {
    if (props.location === 'home'){
      return {
        display : 'none'
      }
    } else {
      return { position: "absolute", left: "10px", top: "8px" }
    }
}

  return (
    <div className="header">
      <a href="/"><img src={logo} className="home-arrow" style={getStyle()} alt="back" /></a>
      News Headlines  { " | " + props.id }
    </div>
  );
}
