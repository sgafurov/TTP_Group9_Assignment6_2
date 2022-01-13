import React from 'react'
import ReactDOM from 'react-dom'
import searchbarCss from "../searchbar.css"

export default function Searchbar() {
    return (
        <div className="search-bar">
        <h1 className="city-name">City Name:</h1>
        <input className="city-name-input" type="text" name="city-name-input" equired></input>
        <input className="city-name-submit-btn" type="submit" value="Submit" />
        </div>
    )
}