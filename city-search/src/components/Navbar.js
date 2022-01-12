import React from 'react'
import ReactDOM from 'react-dom'
import logo from '../city-skyline-logo.png'
import zipNavbarCss from "../zipNavbar.css"

export default function Navbar() {
    return (
        <div className="app--navbar">
            <img className="app--logo" src={logo} alt="city skyline logo"></img>
            <h1 className="app--name">City Search</h1>
            <h3 className="team--names">Shakhram, Rashad, Awais</h3>
        </div>
    )
}