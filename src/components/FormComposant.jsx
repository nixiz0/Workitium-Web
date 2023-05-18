import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/Navbar.jsx'
import Footer from './footer/Footer.jsx'
import CompoNav from './composants_navbar/CompoNav.jsx'

import '../css-style/composants.css'
import '../css-style/composants-style.css'
import '../workitium-css/Workitium.css'
import icon_composant from '../0-ressources/icon logo composants.png'
import form_basic from '../0-ressources/composants-ressources/form_basic.png'
import form_password from '../0-ressources/composants-ressources/form_password.png'
import form_connexion from '../0-ressources/composants-ressources/form_connexion.png'
import form_contact from '../0-ressources/composants-ressources/form_contact.png'

function FormComposant() {
  function copyTextarea(id) {
    var textarea = document.getElementById(id);
    textarea.select();
    document.execCommand("copy");
  }
  return (
    <>
        <Helmet>
          <meta name="description" content="Voici les composants de formulaire offert par le framework Workitium" />
          <meta name="keywords" content="Workitium-ComposantsCSS-FrameworkCSS" />
          <link rel="icon" type="image/png" href={icon_composant} />
          <title>Workitium Composants Form</title>
        </Helmet>
        <Navbar />
        <CompoNav/>
        <div class="all_composants">
            <div>
            <div class="the_composants">
            {/*-- Composant FormBasic --*/}
            <h2 class="title_composant"><b style={{color: 'rgba(0, 255, 136, 0.65)'}}>#FORM</b>-BASIC </h2>
            <span class="txt_composant">
                <p>
                    Classe permettant de créer un formulaire basique, qui va 
                    <b style={{color: 'rgba(0, 255, 136, 0.65)'}}> s'adapter pour tout type d'écrans</b>.
                    <br/>
                    Vous pouvez bien évidemment rajouter des champs,
                    <br/>
                    il suffit juste d'inclure la <b style={{color: 'rgba(0, 255, 136, 0.65)'}}>même classe que dans les autres div</b>.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={form_basic} alt="Form basic" />
            </div>
            <div class="code_composants">
                {/*--Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea1"
                cols="51"
                rows="15"
                readOnly
                value={`<form class="form-basic">
  <div class="basic_form-group">
    <label for="name">Nom</label>
    <input type="text" class="form-control" id="name" placeholder="Entrez votre nom">
  </div>
  <div class="basic_form-group">
    <label for="email">Email</label>
    <input type="email" class="form-control" id="email" placeholder="Entrez votre email">
  </div>
  <div class="basic_form-group">
    <label for="message">Message</label>
    <input type="textarea" class="form-control" id="message" placeholder="Entrez votre message">
  </div>
  <button type="submit">Envoyer</button>
</form>
                      `}
                />
                {/*---------------*/}

                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea1')} class="copy">Copy</button>
                </div>

            </div>
            {/*---------------*/}

            {/*-- Composant FormPassword --*/}
            <h2 class="title_composant"><b style={{color: 'rgba(0, 255, 136, 0.65)'}}>#FORM</b>-PASSWORD </h2>
            <span class="txt_composant">
                <p>
                    Classe formulaire qui inclut un <b style={{color: 'rgba(0, 255, 136, 0.65)'}}>input de mot de passe</b>.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={form_password} alt="Form password" />
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea2"
                cols="51"
                rows="15"
                readOnly
                value={`<form class="form-password">
  <div class="form-password-group">
    <label for="inputName">Nom</label>
    <input type="text" id="inputName" placeholder="Entrez votre nom">
  </div>
  <div class="form-password-group">
    <label for="inputFirstName">Prénom</label>
    <input type="text" id="inputFirstName" placeholder="Entrez votre prénom">
  </div>
  <div class="form-password-group">
    <label for="inputEmail">Email</label>
    <input type="email" id="inputEmail" placeholder="Entrez votre email">
  </div>
  <div class="form-password-group">
    <label for="inputPassword">Mot de passe</label>
    <input type="password" id="inputPassword" placeholder="Entrez votre mot de passe">
  </div>
  <div class="form-password-check">
    <input class="form-password-check-input" type="checkbox" id="conditions">
    <label class="form-password-check-label" for="conditions">
      J'accepte les conditions d'utilisation
    </label>
  </div>
  <button type="submit" class="form-password-btn">Envoyer</button>
</form>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea2')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant FormConnexion --*/}
            <h2 class="title_composant"><b style={{color: 'rgba(0, 255, 136, 0.65)'}}>#FORM</b>-CONNEXION </h2>
            <span class="txt_composant">
                <p>
                    Formulaire de <b style={{color: 'rgba(0, 255, 136, 0.65)'}}>connexion </b> 
                    avec les champs classiques requis pour 
                    se <b style={{color: 'rgba(0, 255, 136, 0.65)'}}>connecter à son site</b>.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={form_connexion} alt="Form connexion" />
            </div>
            <div class="code_composants">
                {/*--Textarea code composant --*/}
                <textarea
                name="code"
                id="textarea3"
                cols="51"
                rows="15"
                readOnly
                value={`<form class="form-connexion">
  <div class="form-connexion-group">
    <label for="email">Email:</label>
    <input type="email" class="form-connexion-control" id="email" placeholder="Entrez votre email">
  </div>
  <div class="form-connexion-group">
    <label for="password">Mot de passe:</label>
    <input type="password" class="form-connexion-control" id="password" placeholder="Entrez votre mot de passe">
  </div>
  <button type="submit" class="form-connexion-btn">Connexion</button>
</form>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea3')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant FormContact --*/}
            <h2 class="title_composant"><b style={{color: 'rgba(0, 255, 136, 0.65)'}}>#FORM</b>-CONTACT </h2>
            <span class="txt_composant">
                <p>
                    Un formulaire de contact avec un <b style={{color: 'rgba(0, 255, 136, 0.65)'}}>style moderne</b>.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={form_contact} alt="Form contact" />
            </div>
            <div class="code_composants">
                {/*Textarea code composant*/}
                <textarea
                name="code"
                id="textarea4"
                cols="51"
                rows="15"
                readOnly
                value={`<form class="form-contact">
  <div class="form-contact-group txt-c">
    <h2>Nous contacter</h2>
  </div>
  <div class="form-contact-group">
    <label for="name">Nom</label>
    <input type="text" class="form-contact-control" id="name" placeholder="Entrez votre nom">
  </div>
  <div class="form-contact-group">
    <label for="email">Email</label>
    <input type="email" class="form-contact-control" id="email" placeholder="Entrez votre email">
  </div>
  <div class="form-contact-group">
    <label for="password">Message</label>
    <input type="message" class="form-contact-control" id="message" placeholder="Entrez votre message">
  </div>
  <div class="form-contact-group txt-c">
    <button type="submit">Envoyer</button>
  </div>
</form>
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

export default FormComposant