import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import CompoNav from './components/composants_navbar/CompoNav.jsx'

import './css-style/composants.css'
import icon_composant from './0-ressources/icon logo composants.png'
import illu_composant from './0-ressources/ex_illu_composants.png'
import responsive_compo from './0-ressources/ex_responsive_composants.png'

function Composants() {
  return (
    <>
        <Helmet>
          <meta name="description" content="Voici tous les composants offert par le framework Workitium" />
          <meta name="keywords" content="Workitium-ComposantsCSS-FrameworkCSS" />
          <link rel="icon" type="image/png" href={icon_composant} />
          <title>Workitium Composants</title>
        </Helmet>
        <Navbar />
        <div class="separation_mobil">  </div>
        <CompoNav />
        <div class="all_composants">
            <div class="welcome_composants">
                <h2> Bienvenue dans les composants Workitium </h2>
                <p>
                    Vous pouvez retrouver tous les <b style={{color: '#00d0ff'}}>composants officiels</b>  du framework,
                    <b style={{color: '#00d0ff'}}> entièrement Responsive</b> qui sont à votre disposition !
                </p>
                <br/>

                <div class="illu_composants">
                    <img src={illu_composant} alt="Composants exemple utilisation"/>
                </div>

                <p>
                    Voici un exemple d'utilisation des composants, ici on a une <b style={{color: '#00d0ff'}}>navbar </b>
                    pré-fabriqué avec un <b style={{color: '#00d0ff'}}>formulaire</b> et un <b style={{color: '#00d0ff'}}> footer </b>
                    déjà construit et complètement responsive.
                </p>

                <br/><br/><br/>
                <h3 class="txt_h3"> Illustration du côté responsive de nos composants </h3>
                <div class="illu_composants">
                    <img src={responsive_compo} alt="Composants responsive illustration"/>
                </div>

                <p> 
                    Cela permet de ne plus avoir besoin de gérer soit même ses <i>media queries</i>, tous les composants importés 
                    seront déjà construit pour être adapté à <b>toutes les plateformes</b>.
                </p>

            </div>
        </div>
        <Footer />
    </>
  )
}

export default Composants