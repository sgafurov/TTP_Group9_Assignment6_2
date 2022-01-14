import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Searchbar from './components/Searchbar';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Searchbar/>
    </div>
  )
}