import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../city-skyline-logo.png'
import navbarCss from "../navbar.css"

export default function Navbar() {
    return (
        <div className="navbar">
            <img className="navbar-logo" src={logo} alt="city skyline logo"></img>
            <h1 className="navbar-name">City Search</h1>
            <h3 className="navbar-team-names">Shakhram, Rashad, Awais</h3>
        </div>
    )
}