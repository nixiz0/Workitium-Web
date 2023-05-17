import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './navbar/Navbar.jsx'
import Footer from './footer/Footer.jsx'
import CompoNav from './composants_navbar/CompoNav.jsx'

import '../css-style/composants.css'
import '../css-style/composants-style.css'
import '../workitium-css/Workitium.css'
import icon_composant from '../0-ressources/icon logo composants.png'
import footer_basic from '../0-ressources/composants-ressources/footer_basic.png'
import footer_minimum from '../0-ressources/composants-ressources/footer_minimum.png'
import footer_vertical from '../0-ressources/composants-ressources/footer_vertical.png'
import footer_rgpd from '../0-ressources/composants-ressources/footer_rgpd.png'
import footer_soustxt from '../0-ressources/composants-ressources/footer_soustxt.png'

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
            <h2 class="title_composant"><b style={{color: 'rgba(255, 0, 0, 0.65)'}}>#FOOTER</b>-BASIC </h2>
            <span class="txt_composant">
                <p>
                    Un Footer <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>classique</b> mais suffisant pour n'importe quels projets web.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={footer_basic} alt="Footer basic" />
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
            <h2 class="title_composant"><b style={{color: 'rgba(255, 0, 0, 0.65)'}}>#FOOTER</b>-MINIMUM </h2>
            <span class="txt_composant">
                <p>
                    Le Footer minimum si vous nous souhaitez <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>pas mettre d'informations </b>
                    ou autres dans votre Footer mais qu'il vous <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>en faut quand même un </b>
                    alors ce Footer sera parfait pour vous.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={footer_minimum} alt="Footer minimum" />
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
            <h2 class="title_composant"><b style={{color: 'rgba(255, 0, 0, 0.65)'}}>#FOOTER</b>-VERTICAL </h2>
            <span class="txt_composant">
                <p>
                    Un Footer <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>vertical</b> qui permet de mettre beaucoup 
                    d'informations, des <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>liens pour vos réseaux sociaux </b> 
                    mais aussi des <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>autres liens pour les RGPD</b> et autres informations.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={footer_vertical} alt="Footer vertical" />
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
            <h2 class="title_composant"><b style={{color: 'rgba(255, 0, 0, 0.65)'}}>#FOOTER</b>-RGPD </h2>
            <span class="txt_composant">
                <p>
                    Un Footer spécialement pour mettre le <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>RGPD en avant</b>, 
                    la <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>sécurité et la protection des données</b> des utilisateurs. 
                    <br/>
                    Et vous pouvez aussi ajouter vos réseaux sociaux.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={footer_rgpd} alt="Footer rgpd" />
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

            {/*-- Composant FooterSousTxt --*/}
            <h2 class="title_composant"><b style={{color: 'rgba(255, 0, 0, 0.65)'}}>#FOOTER</b>-SOUSTXT </h2>
            <span class="txt_composant">
                <p>
                    Un Footer permettant d'avoir un <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>sous menu</b>.
                    <br/>
                    Complètement responsive, le dernier lien est cliquable et permet de déployer d'autres liens.
                    <br/>
                    Attention à ne pas oublier à mettre le <b style={{color: 'rgba(255, 0, 0, 0.65)'}}>JavaScript dans un script</b>.
                </p> 
            </span>
            <div class="extrait_composants">
                <img src={footer_soustxt} alt="Footer soustxt" />
            </div>
            <div class="code_composants">
                {/*Textarea code composant*/}
                <textarea
                name="code"
                id="textarea5"
                cols="51"
                rows="15"
                readOnly
                value={`<footer class="main_footer_soustxt">
  <div class="footer_align_txt_img">
    <h4> Footer Text </h4>
    <div class="footer_img">
        <a href="#" target="_blank"><img src="" alt="facebook icon"></a> 
        <a href="#" target="_blank"><img src="" alt="twitter icon"></a> 
        <a href="#" target="_blank"><img src="" alt="youtube icon"></a>
        <a href="#" target="_blank"><img src="" alt="instagram icon"></a>
    </div>
    <div class="footer_txt">
        <div class="sous_txt">
            <a href="#"> Contact </a>
        </div>
        <div class="sous_txt">
            <a href="#"> Mentions légales </a>
        </div>
        <div class="sous_txt">
            <div class="links_contains" onclick="toggleText()">Liens supplémentaires</div>
            <div id="hiddenText" style="display: none;">
            <ul class="ul_links">
                <li><a href="#" target="_blank"> autres liens </a></li>
                <li><a href="#" target="_blank"> liens divers </a></li>
                <li><a href="#" target="_blank"> lien supplémentaire </a></li>
            </ul>
        </div>
    </div>
  </div>
</footer>

<!--SCRIPT JAVASCRIPT-->
var texteDeployable = document.getElementById("texte-deployable");
var texteClic = document.querySelector(".texte-clic");
function toggleText() {
    var hiddenText = document.getElementById("hiddenText");
    if (hiddenText.style.display === "none") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
}
                      `}
                />
                {/*---------------*/}
                <div class="btn_copy">
                    <button onClick={() => copyTextarea('textarea5')} class="copy">Copy</button>
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