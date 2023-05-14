import React from 'react'
import './navbar.css'
import logo_workitium from './design logo Workitium color inverse.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav class="nav-logo_custom">
        <Link to="/" class="logo_custom"> 
            <img src={logo_workitium} alt="LOGO"/>
            <h2> Workitium </h2>
        </Link>
        <ul>
          <li><Link to="/documentation">Documentation</Link></li>
          <li><Link to="/composants">Composants</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar