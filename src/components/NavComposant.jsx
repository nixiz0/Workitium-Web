import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/Navbar.jsx'
import Footer from './footer/Footer.jsx'
import CompoNav from './composants_navbar/CompoNav.jsx'

import '../css-style/composants.css'
import '../css-style/composants-style.css'
import '../workitium-css/Workitium.css'
import icon_composant from '../0-ressources/icon logo composants.png'

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
            <h2 class="title_composant" id="nav-basic"> #NAV-BASIC </h2>
            <span class="txt_composant">
                <p>
                    NavBar classique avec un texte au centre horizontale qui va passer à la
                    verticale en format téléphone.
                </p> 
            </span>
            <div class="extrait_composants">
                <nav class="nav-basic">
                    <div class="sous_nav">
                        <ul>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">Accueil</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">À propos</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">Produits</a></li>
                            {/* eslint-disable-next-line */}
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                </nav>
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
            <h2 class="title_composant" id="nav-logo"> #NAV-LOGO </h2>
            <span class="txt_composant">
                <p>
                    Voici une NavBar qui possède un logo sous format d'une image que vous avez
                    juste à rajouter.
                    Le logo sera au dessus et le texte en dessous à la verticale en format mobile.
                </p> 
            </span>
            <div class="extrait_composants extrait_nav-logo">
                <nav class="nav-logo nav-logo-custom">
                    {/* eslint-disable-next-line */}
                    <a href="#" class="logo"><img src="" alt="LOGO"/></a>
                    <ul>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">Accueil</a></li>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">À propos</a></li>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">Produits</a></li>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
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
            <h2 class="title_composant" id="nav_searchbar"> #NAV-SEARCHBAR </h2>
            <span class="txt_composant">
                <p>
                    Ici vous avez une NavBar qui possède une barre de recherche pour
                    pouvoir faire des recherches dynamiques au seins de votre site.
                    Elle disparaît quand on passe en format téléphone et tablette.
                </p> 
            </span>
            <div class="extrait_composants extrait_nav-logo">
                {/* eslint-disable-next-line */}
                <nav class="nav_searchbar">
                    {/* eslint-disable-next-line */}
                    <a href="#" class="searchbar_logo"><img src="" alt="LOGO"/></a>
                    <ul>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">Accueil</a></li>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">À propos</a></li>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">Produits</a></li>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">Contact</a></li>
                    </ul>
                    <div class="search-container">
                      <form>
                        <input type="text" placeholder="Rechercher..."/>
                        <button type="submit"> Envoie </button>
                      </form>
                    </div>
                </nav>
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
            <h2 class="title_composant" id="nav_soustxt"> #NAV-SOUS-TXT </h2>
            <span class="txt_composant">
                <p>
                    La NavBar sous txt (pour texte) permet d'avoir une NavBar qui possède un sous menu
                    qui, dès lors que l'on passe notre souris dessus nous donne d'autres liens.
                    Cela fonctionne dans tous les formats d'écrans.
                </p> 
            </span>
            <div class="extrait_composants extrait_nav-logo">
                {/* eslint-disable-next-line */}
                <nav class="nav_soustxt nav-soustxt-custom">
                    {/* eslint-disable-next-line */}
                    <a href="#" class="soustxt_logo"><img src="" alt="LOGO"/></a>
                    <ul id="ul_fixe" class="list-reset">
                      {/* eslint-disable-next-line */}
                      <li><a href="#">Accueil</a></li>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">À propos</a></li>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">Produits</a>
                        <ul class="submenu list-reset">
                          {/* eslint-disable-next-line */}
                          <li><a href="#">Catégorie 1</a></li>
                          {/* eslint-disable-next-line */}
                          <li><a href="#">Catégorie 2</a></li>
                          {/* eslint-disable-next-line */}
                          <li><a href="#">Catégorie 3</a></li>
                        </ul>
                      </li>
                      {/* eslint-disable-next-line */}
                      <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
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