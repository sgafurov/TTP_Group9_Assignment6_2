import React from 'react'
import ReactDOM, { render } from 'react-dom'
import searchbarCss from "../searchbar.css"
import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Searchbar() {

    const [name, setName] = useState("")

    const [item, setItem] = useState(null)

    let apiURL = (`http://ctp-zip-api.herokuapp.com/city/${name.toUpperCase()}`)

    const fetchData = async () => {
        try {
            const response = await axios.get(apiURL)
            setItem(response.data)
        } catch (e) {
            alert("Please enter a valid city name")
            console.log(e)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (name) => {
        const enteredCityName = name.target.value
        setName(enteredCityName)
    }

    console.log({ name })

    return (
        <div className="search-bar">
            <h1 className="city-name">City Name:</h1>

            <form onSubmit={handleSubmit}>
                <input className="city-name-input" value={name} onChange={handleChange} type="text" placeholder=""
                    required="" name="city-name-input">
                </input>

                {/* Fetch data from API */}
                <input className="city-name-submit-btn" type="submit" value="Submit" onClick={fetchData} />
            </form>

            {/* Display data from API */}
            <div className="zipcodes">
                {item && item.map((item, i) => {
                    return (
                        <p key={i} id="zipcode">{item}</p>
                    )
                }
                )}
            </div>
        </div>
    )
}