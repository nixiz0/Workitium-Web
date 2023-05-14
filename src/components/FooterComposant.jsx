import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/Navbar.jsx'
import Footer from './footer/Footer.jsx'
import CompoNav from './composants_navbar/CompoNav.jsx'

import '../css-style/composants.css'
import '../css-style/composants-style.css'
import '../workitium-css/Workitium.css'
import icon_composant from '../0-ressources/icon logo composants.png'

function FooterComposant() {
  function copyTextarea(id) {
    var textarea = document.getElementById(id);
    textarea.select();
    document.execCommand("copy");
  }
  return (
    <>
        <Helmet>
          <meta name="description" content="Voici les composants de footer offert par le framework Workitium" />
          <meta name="keywords" content="Workitium-ComposantsCSS-FrameworkCSS" />
          <link rel="icon" type="image/png" href={icon_composant} />
          <title>Workitium Composants Footer</title>
        </Helmet>
        <Navbar />
        <CompoNav/>
        <div class="all_composants">
            <div>
            <div class="the_composants">
            {/*-- Composant FooterBasic --*/}
            <h2 class="title_composant" id="footer-basic"> #FOOTER-BASIC </h2>
            <span class="txt_composant">
                <p>
                    Un Footer classique mais suffisant pour n'importe quels projets web.
                </p> 
            </span>
            <div class="extrait_composants">
                <footer class="footer-basic" style={{padding:'1rem'}}>
                    <div class="basic_container">
                      <div class="basic_row">
                        <div class="basic_col">
                          <h3>A propos</h3>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at elit lectus. Aliquam at blandit dui. 
                            Sed iaculis quam nisi, in egestas leo tempus a.
                          </p>
                        </div>
                        <div class="basic_col">
                          <h3>Liens utiles</h3>
                          <ul>
                            <li><a href="#">Accueil</a></li>
                            <li><a href="#">À propos</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                          </ul>
                        </div>
                        <div class="basic_col">
                          <h3>Suivez-nous</h3>
                          <ul class="basic_social-icons list-reset">
                            <li><a href="#" target="_blank" rel="noreferrer"><img src="" alt="img logo réseaux"/></a></li>
                            <li><a href="#" target="_blank" rel="noreferrer"><img src="" alt="img logo réseaux"/></a></li>
                            <li><a href="#" target="_blank" rel="noreferrer"><img src="" alt="img logo réseaux"/></a></li>
                            <li><a href="#" target="_blank" rel="noreferrer"><img src="" alt="img logo réseaux"/></a></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="basic_copyright">
                        <p>Copyright &copy; 2023. Tous droits réservés.</p>
                    </div>
                </footer>
            </div>
            <div class="code_composants">
                {/*--Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea1"
                cols="51"
                rows="15"
                readOnly
                value={`<footer class="footer-basic">
  <div class="basic_container">
    <div class="basic_row">
      <div class="basic_col">
        <h3>A propos</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at elit lectus. Aliquam at blandit dui. 
          Sed iaculis quam nisi, in egestas leo tempus a.
        </p>
      </div>
      <div class="basic_col">
        <h3>Liens utiles</h3>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="basic_col">
        <h3>Suivez-nous</h3>
        <ul class="basic_social-icons list-reset">
          <li><a href="#" target="_blank"><img src="" alt="img logo réseaux"></a></li>
          <li><a href="#" target="_blank"><img src="" alt="img logo réseaux"></a></li>
          <li><a href="#" target="_blank"><img src="" alt="img logo réseaux"></a></li>
          <li><a href="#" target="_blank"><img src="" alt="img logo réseaux"></a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="basic_copyright">
      <p>Copyright &copy; 2023. Tous droits réservés.</p>
  </div>
</footer>
                      `}
                />
                {/*---------------*/}

                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea1')} class="copy">Copy</button>
                </div>

            </div>
            {/*---------------*/}

            {/*-- Composant FooterMinimum --*/}
            <h2 class="title_composant" id="footer-minimum"> #FOOTER-MINIMUM </h2>
            <span class="txt_composant">
                <p>
                    Le Footer minimum si vous nous souhaitez pas mettre d'informations ou autres dans votre
                    Footer mais qu'il vous en faut quand même un alors ce Footer sera parfait pour vous.
                </p> 
            </span>
            <div class="extrait_composants">
                <footer class="footer-minimum" style={{padding: '1.2rem'}}>
                    <div>
                      <p>Copyright © 2023 MonSite. Tous droits réservés.</p>
                    </div>
                </footer>
            </div>
            <div class="code_composants">
                {/*-- Textarea code composant--*/}
                <textarea
                name="code"
                id="textarea2"
                cols="44"
                rows="6"
                readOnly
                value={`<footer class="footer-minimum">
  <div>
    <p>Copyright © 2023 MonSite. Tous droits réservés.</p>
  </div>
</footer>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea2')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant FooterVertical --*/}
            <h2 class="title_composant" id="footer-vertical"> #FOOTER-VERTICAL </h2>
            <span class="txt_composant">
                <p>
                    Un Footer vertical qui permet de mettre beaucoup d'informations, des liens pour vos réseaux sociaux
                    mais aussi des autres liens pour les RGPD et autres informations.
                </p> 
            </span>
            <div class="extrait_composants">
                <footer class="footer-vertical">
                    <div class="vertical_nav">
                      <ul>
                        <li><a href="#">Accueil</a></li>
                        <li><a href="#">À propos</a></li>
                        <li><a href="#">Produits</a></li>
                        <li><a href="#">Contact</a></li>
                      </ul>
                    </div>
                    <div class="vertical_social">
                      <a href="#" target="_blank" rel="noreferrer"><img src="" alt="logo réseaux"/></a>
                      <a href="#" target="_blank" rel="noreferrer"><img src="" alt="logo réseaux"/></a>
                      <a href="#" target="_blank" rel="noreferrer"><img src="" alt="logo réseaux"/></a>
                      <a href="#" target="_blank" rel="noreferrer"><img src="" alt="logo réseaux"/></a>
                    </div>
                    <div class="vertical_copyright">
                      <p>Copyright © 2020 MonSite. Tous droits réservés.</p>
                    </div>
                </footer>
            </div>
            <div class="code_composants">
                {/*--Textarea code composant --*/}
                <textarea
                name="code"
                id="textarea3"
                cols="51"
                rows="15"
                readOnly
                value={`<footer class="footer-vertical">
  <div class="vertical_nav">
    <ul>
      <li><a href="#">Accueil</a></li>
      <li><a href="#">À propos</a></li>
      <li><a href="#">Produits</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
  <div class="vertical_social">
    <a href="#" target="_blank"><img src="" alt="logo réseaux"></a>
    <a href="#" target="_blank"><img src="" alt="logo réseaux"></a>
    <a href="#" target="_blank"><img src="" alt="logo réseaux"></a>
    <a href="#" target="_blank"><img src="" alt="logo réseaux"></a>
  </div>
  <div class="vertical_copyright">
    <p>Copyright © 2020 MonSite. Tous droits réservés.</p>
  </div>
</footer>
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea3')} class="copy">Copy</button>
                </div>
            </div>
            {/*---------------*/}

            {/*-- Composant FooterRgpd --*/}
            <h2 class="title_composant" id="footer-rgpd"> #FOOTER-RGPD </h2>
            <span class="txt_composant">
                <p>
                    Un Footer spécialement pour mettre le RGPD en avant, la sécurité et la protection des données
                    des utilisateurs. 
                    <br/>
                    Et vous pouvez aussi ajouter vos réseaux sociaux.
                </p> 
            </span>
            <div class="extrait_composants">
                <footer class="footer-rgpd">
                    <div class="rgpd_social">
                      <a href="#" target="_blank" rel="noreferrer"><img src="" alt="logo réseaux"/></a>
                      <a href="#" target="_blank" rel="noreferrer"><img src="" alt="logo réseaux"/></a>
                      <a href="#" target="_blank" rel="noreferrer"><img src="" alt="logo réseaux"/></a>
                      <a href="#" target="_blank" rel="noreferrer"><img src="" alt="logo réseaux"/></a>
                    </div>
                    <div class="rgpd">
                      <a href="#">Politique de confidentialité</a>
                      <a href="#">Conditions d'utilisation</a>
                    </div>
                    <div class="rgpd_copyright">
                      <p>Copyright © 2020 MonSite. Tous droits réservés.</p>
                    </div>
                </footer>
            </div>
            <div class="code_composants">
                {/*Textarea code composant*/}
                <textarea
                name="code"
                id="textarea4"
                cols="51"
                rows="15"
                readOnly
                value={`<footer class="footer-rgpd">
  <div class="rgpd_social">
    <a href="#" target="_blank"><img src="" alt="logo réseaux"></a>
    <a href="#" target="_blank"><img src="" alt="logo réseaux"></a>
    <a href="#" target="_blank"><img src="" alt="logo réseaux"></a>
    <a href="#" target="_blank"><img src="" alt="logo réseaux"></a>
  </div>
  <div class="rgpd">
    <a href="#">Politique de confidentialité</a>
    <a href="#">Conditions d'utilisation</a>
  </div>
  <div class="rgpd_copyright">
    <p>Copyright © 2020 MonSite. Tous droits réservés.</p>
  </div>
</footer>
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

export default FooterComposant