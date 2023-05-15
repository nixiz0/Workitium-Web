import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar/Navbar.jsx'

import './css-style/index.css'

import video_logo from'./0-ressources/logo_move.mp4'
import icon from './0-ressources/icon logo.png'

function App() {
  return (
    <>
        <Helmet>
          <link rel="icon" type="image/png" href={icon} />
          <meta name="description" content="Le Framework CSS Workitium, stylez vos pages web en un rien de temps ! Ultra-rapide et facile à utiliser !"/>
          <meta name="keywords" content="Workitium-Framework-FrameworkCSS" />
          <title>Workitium</title>
        </Helmet>
        <Navbar />
        <div class="presentation">
          <div>
              <video class="main_logo" muted autoPlay loop>
                <source src={video_logo} type="video/mp4"/>
              </video>
          </div>
          <h1>
              Créer rapidement vos sites web avec Workitium
              <br/>
              En étant complètement Responsive !
          </h1>
          <p class="sous_p">
              Puissant framework rapide et facile à utiliser pour styliser vos sites web
          </p>

          <div class="main_download">
              <h4> Le Framework CSS </h4>
              <a href="https://raw.githubusercontent.com/nixiz0/Workitium/main/Workitium.css" target="_blank" download="Workitium.css" rel="noreferrer">
                  <button class="btn-blue-custom btn_download"> Download </button>
              </a>
          </div>
        </div>
    </>
  )
}

export default App