import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/Navbar.jsx'
import Footer from './footer/Footer.jsx'
import CompoNav from './composants_navbar/CompoNav.jsx'

import '../css-style/composants.css'
import '../css-style/composants-style.css'
import '../workitium-css/Workitium.css'
import icon_composant from '../0-ressources/icon logo composants.png'
import nav_basic from '../0-ressources/composants-ressources/navbar-basic.png'
import nav_logo from '../0-ressources/composants-ressources/navbar-logo.png'
import nav_searchbar from '../0-ressources/composants-ressources/navbar-searchbar.png'
import nav_soustxt from '../0-ressources/composants-ressources/navbar-soustxt.png'

function NavComposant() {
  function copyTextarea(id) {
    var textarea = document.getElementById(id);
    textarea.select();
    document.execCommand("copy");
  }
  return (
    <>
        <Helmet>
          <meta name="description" content="Voici les composants de navbar offert par le framework Workitium" />
          <meta name="keywords" content="Workitium-ComposantsCSS-FrameworkCSS" />
          <link rel="icon" type="image/png" href={icon_composant} />
          <title>Workitium Composants NavBar</title>
        </Helmet>
        <Navbar />
        <CompoNav/>
        <div class="all_composants">
            <div>
            <div class="the_composants">
            {/*-- Composant NavBasic --*/}
            <h2 class="title_composant" id="nav-basic"> <b style={{color: '#00BBE5'}}>#NAV</b>-BASIC</h2>
            <span class="txt_composant">
                <p>
                    NavBar classique avec un texte au <b style={{color: '#00d0ff'}}>centre horizontale</b> qui va passer à la
                    <b style={{color: '#00d0ff'}}>verticale en format téléphone</b>.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={nav_basic} alt="Basic navbar" />
            </div>
            <div class="code_composants">
                {/*--Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea1"
                cols="51"
                rows="11"
                readOnly
                value={`<nav class="nav-basic">
  <div class="sous_nav">
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">À propos</a></li>
      <li><a href="#">Produits</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
</nav>
                      `}
                />
                {/*---------------*/}

                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea1')} class="copy">Copy</button>
                </div>

            </div>
            {/*---------------*/}

            {/*-- Composant NavLogo --*/}
            <h2 class="title_composant" id="nav-logo"><b style={{color: '#00BBE5'}}>#NAV</b>-LOGO </h2>
            <span class="txt_composant">
                <p>
                    Voici une NavBar qui possède un <b style={{color: '#00d0ff'}}>logo</b> sous format d'une image que vous avez
                    juste <b style={{color: '#00d0ff'}}>à rajouter</b>.
                    <br/>
                    Le logo sera <b style={{color: '#00d0ff'}}>au dessus</b> et le texte <b style={{color: '#00d0ff'}}>en dessous </b> 
                    à la verticale <b style={{color: '#00d0ff'}}>en format mobile</b>.
                </p> 
            </span>
            <div class="extrait_composants extrait_nav-logo">
                <img src={nav_logo} alt="Logo navbar" />
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea2"
                cols="51"
                rows="11"
                readOnly
                value={`<nav class="nav-logo">
  <a href="#" class="logo"><img src="" alt="LOGO"/></a>
  <ul>
    <li><a href="#">Accueil</a></li>
    <li><a href="#">À propos</a></li>
    <li><a href="#">Produits</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea2')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant NavSearchbar --*/}
            <h2 class="title_composant" id="nav_searchbar"><b style={{color: '#00BBE5'}}>#NAV</b>-SEARCHBAR </h2>
            <span class="txt_composant">
                <p>
                    Ici vous avez une NavBar qui possède une <b style={{color: '#00BBE5'}}>barre de recherche</b> pour
                    pouvoir faire des recherches dynamiques au seins de votre site.
                    <br/>
                    Elle disparaît quand on passe en <b style={{color: '#00BBE5'}}>format téléphone et tablette</b>.
                </p> 
            </span>
            <div class="extrait_composants extrait_nav-logo">
                <img src={nav_searchbar} alt="Searchbar navbar" />
            </div>
            <div class="code_composants">
                {/*--Textarea code composant --*/}
                <textarea
                name="code"
                id="textarea3"
                cols="51"
                rows="15"
                readOnly
                value={`<nav class="nav_searchbar">
  <a href="#" class="searchbar_logo"><img src="" alt="LOGO"/></a>
  <ul>
    <li><a href="#">Accueil</a></li>
    <li><a href="#">À propos</a></li>
    <li><a href="#">Produits</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
  <div class="search-container">
    <form>
      <input type="text" placeholder="Rechercher..."/>
      <button type="submit"> Envoie </button>
    </form>
  </div>
</nav>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea3')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant NavSousTxt --*/}
            <h2 class="title_composant" id="nav_soustxt"><b style={{color: '#00BBE5'}}>#NAV</b>-SOUS-TXT </h2>
            <span class="txt_composant">
                <p>
                    La NavBar sous txt permet d'avoir une NavBar qui possède un <b style={{color: '#00BBE5'}}>sous menu </b> 
                    qui, dès lors que l'on passe notre souris dessus <b style={{color: '#00BBE5'}}>nous donne d'autres liens</b>.
                    <br/>
                    Cela fonctionne dans <b style={{color: '#00BBE5'}}>tous les formats d'écrans</b>.
                </p> 
            </span>
            <div class="extrait_composants extrait_nav-logo">
                <img src={nav_soustxt} alt="SousTxt navbar" />
            </div>
            <div class="code_composants">
                {/*Textarea code composant*/}
                <textarea
                name="code"
                id="textarea4"
                cols="51"
                rows="15"
                readOnly
                value={`<nav class="nav_soustxt">
  <a href="#" class="soustxt_logo"><img src="" alt="LOGO"/></a>
  <ul id="ul_fixe" class="list-reset">
    <li><a href="#">Accueil</a></li>
    <li><a href="#">À propos</a></li>
    <li><a href="#">Produits</a>
      <ul class="submenu list-reset">
        <li><a href="#">Catégorie 1</a></li>
        <li><a href="#">Catégorie 2</a></li>
        <li><a href="#">Catégorie 3</a></li>
      </ul>
    </li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea4')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- New Composant Place Here : --*/}

            {/*---------------*/}

            </div>
          </div>
        </div>
        <Footer />
    </>
  )
  
}

export default NavComposant