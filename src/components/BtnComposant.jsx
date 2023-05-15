import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/Navbar.jsx'
import Footer from './footer/Footer.jsx'
import CompoNav from './composants_navbar/CompoNav.jsx'

import '../css-style/composants.css'
import '../css-style/composants-style.css'
import '../workitium-css/Workitium.css'
import icon_composant from '../0-ressources/icon logo composants.png'

function BtnComposant() {
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
          <title>Workitium Composants Bouton</title>
        </Helmet>
        <Navbar />
        <CompoNav/>
        <div class="all_composants">
            <div>
            <div class="the_composants">
            {/*-- Composant Btn --*/}
            <h2 class="title_composant" id="btn"> <b></b> #BTN </h2>
            <span class="txt_composant">
                <p>
                    Simple bouton, permettant de donner un style classique.
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn">Bouton</button>
            </div>
            <div class="code_composants">
                {/*--Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea1"
                cols="48"
                rows="2"
                readOnly
                value={`<button type="button" class="btn">Bouton</button>
                      `}
                />
                {/*---------------*/}

                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea1')} class="copy">Copy</button>
                </div>

            </div>
            {/*---------------*/}

            {/*-- Composant BtnBlack --*/}
            <h2 class="title_composant" id="btn-black"> #BTN-<b style={{color: 'black'}}>BLACK</b>  </h2>
            <span class="txt_composant">
                <p>
                    Bouton de couleur noir.
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn-black">Black</button>
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea2"
                cols="54"
                rows="2"
                readOnly
                value={`<button type="button" class="btn-black">Black</button>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea2')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant BtnRed --*/}
            <h2 class="title_composant" id="btn-red"> #BTN-<b style={{color: 'red'}}>RED</b> </h2>
            <span class="txt_composant">
                <p>
                    Bouton de couleur rouge.
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn-red">Red</button>
            </div>
            <div class="code_composants">
                {/*--Textarea code composant --*/}
                <textarea
                name="code"
                id="textarea3"
                cols="48"
                rows="2"
                readOnly
                value={`<button type="button" class="btn-red">Red</button>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea3')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant BtnBlue --*/}
            <h2 class="title_composant" id="btn-blue"> #BTN-<b style={{color: 'blue'}}>BLUE</b> </h2>
            <span class="txt_composant">
                <p>
                    Bouton de couleur bleu.
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn-blue">Blue</button>
            </div>
            <div class="code_composants">
                {/*Textarea code composant*/}
                <textarea
                name="code"
                id="textarea4"
                cols="50"
                rows="2"
                readOnly
                value={`<button type="button" class="btn-blue">Blue</button>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea4')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant BtnGreen --*/}
            <h2 class="title_composant" id="btn-green"> #BTN-<b style={{color: 'green'}}>GREEN</b>  </h2>
            <span class="txt_composant">
                <p>
                    Bouton de couleur vert.
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn-green">Green</button>
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea5"
                cols="52"
                rows="2"
                readOnly
                value={`<button type="button" class="btn-green">Green</button>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea5')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant BtnSideUp --*/}
            <h2 class="title_composant" id="btn-side-up"> #BTN-SIDE-UP </h2>
            <span class="txt_composant">
                <p>
                    Bouton avec une transition vers le haut (vous pouvez changer la couleur en allant dans la classe css)
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn-slide-up" >Click</button>      
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea6"
                cols="56"
                rows="2"
                readOnly
                value={`<button type="button" class="btn-slide-up" >Click</button>    
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea6')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant BtnSideDown --*/}
            <h2 class="title_composant" id="btn-side-down"> #BTN-SIDE-DOWN </h2>
            <span class="txt_composant">
                <p>
                    Bouton avec une transition vers le bas (vous pouvez changer la couleur en allant dans la classe css)
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn-slide-down" >Click</button>      
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea7"
                cols="58"
                rows="2"
                readOnly
                value={`<button type="button" class="btn-slide-down" >Click</button>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea7')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant BtnSideLeft --*/}
            <h2 class="title_composant" id="btn-side-left"> #BTN-SIDE-LEFT </h2>
            <span class="txt_composant">
                <p>
                    Bouton avec une transition vers la gauche (vous pouvez changer la couleur en allant dans la classe css)
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn-slide-left" >Click</button>      
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea8"
                cols="58"
                rows="2"
                readOnly
                value={`<button type="button" class="btn-slide-left" >Click</button>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea8')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant BtnSideRight --*/}
            <h2 class="title_composant" id="btn-side-right"> #BTN-SIDE-RIGHT </h2>
            <span class="txt_composant">
                <p>
                    Bouton avec une transition vers la droite (vous pouvez changer la couleur en allant dans la classe css)
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn-slide-right" >Click</button>      
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea9"
                cols="59"
                rows="2"
                readOnly
                value={`<button type="button" class="btn-slide-right" >Click</button>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea9')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant BtnHover --*/}
            <h2 class="title_composant" id="btn-hover"> #BTN-HOVER </h2>
            <span class="txt_composant">
                <p>
                    Bouton avec une transition quand vous passer la souris dessus 
                    (vous pouvez changer la couleur en allant dans la classe css)
                </p> 
            </span>
            <div class="extrait_composants">
                <button type="button" class="btn-hover">Click</button>      
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea10"
                cols="53"
                rows="2"
                readOnly
                value={`<button type="button" class="btn-hover">Click</button>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea10')} class="copy">Copy</button>
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

export default BtnComposant