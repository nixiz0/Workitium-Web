import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/Navbar.jsx'
import Footer from './footer/Footer.jsx'
import CompoNav from './composants_navbar/CompoNav.jsx'

import '../css-style/composants.css'
import '../css-style/composants-style.css'
import '../workitium-css/Workitium.css'
import icon_composant from '../0-ressources/icon logo composants.png'

function PositionComposant() {
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
          <title>Workitium Composants Position</title>
        </Helmet>
        <Navbar />
        <CompoNav/>
        <div class="all_composants">
            <div>
            <div class="the_composants">
            {/*-- Composant TxtImgSide --*/}
            <h2 class="title_composant" id="txt_img_side"> #TXT_IMG_SIDE </h2>
            <span class="txt_composant">
                <p>
                    Classe permettant de placer une image à côté d'un texte et de s'adapter en Responsive, ce 
                    qui va permettre au texte de passer en dessous de l'image
                </p> 
            </span>
            <div class="extrait_composants">
                <div class="txt_img_side" style={{fontSize: '2.5rem'}}>
                    <div class="txt_img_side-item">
                        <img src="" alt="image exemple"/>
                    </div>
                    <div class="txt_img_side-item">
                        <span> lorem ipsum </span>
                    </div>
                </div>
            </div>
            <div class="code_composants">
                {/*--Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea1"
                cols="51"
                rows="9"
                readOnly
                value={`<div class="txt_img_side">
  <div class="txt_img_side-item">
      <img src="" alt="image">
  </div>
  <div class="txt_img_side-item">
      <span> lorem ipsum </span>
  </div>
</div>
                      `}
                />
                {/*---------------*/}

                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea1')} class="copy">Copy</button>
                </div>

            </div>
            {/*---------------*/}

            {/*-- Composant ThreeDiv --*/}
            <h2 class="title_composant" id="three-div"> #THREE-DIV</h2>
            <span class="txt_composant">
                <p>
                    Classe permettant de placer 3 div une à côté de l'autre et qui devient Responsive en se plaçant
                    l'une en dessous de l'autre quand on passe en format mobile.
                </p> 
            </span>
            <div class="extrait_composants">
                <div class="three-div" style={{fontSize: '1.5rem'}}>
                    <div class="three-div-item">
                        <img src="" alt="image exemple1"/>
                        <p> Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="three-div-item">
                        <img src="" alt="image exemple2"/>
                        <p> Lorem ipsum dolor sit amet.</p>
                    </div>
                    <div class="three-div-item">
                        <img src="" alt="image exemple3"/>
                        <p> Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div> 
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea2"
                cols="51"
                rows="15"
                readOnly
                value={`<div class="three-div">
  <div class="three-div-item">
      <img src="" alt="image">
      <p> Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="three-div-item">
      <img src="" alt="image">
      <p> Lorem ipsum dolor sit amet.</p>
  </div>
  <div class="three-div-item">
      <img src="" alt="image">
      <p> Lorem ipsum dolor sit amet.</p>
  </div>
</div>  
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea2')} class="copy">Copy</button>
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

export default PositionComposant