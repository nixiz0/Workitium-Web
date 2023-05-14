import React from 'react'
import './navbar.css'
import logo_workitium from './design logo Workitium color inverse.png'

function Navbar() {
  return (
    <nav class="nav-logo_custom">
        <a href="/" class="logo_custom"> 
            <img src={logo_workitium} alt="LOGO"/>
            <h2> Workitium </h2>
        </a>
        <ul>
          <li><a to="/documentation">Documentation</a></li>
          <li><a href="/composants">Composants</a></li>
        </ul>
    </nav>
  )
}

export default Navbar