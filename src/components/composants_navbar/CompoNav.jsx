import React from 'react'
import './componav.css'

function CompoNav() {

    return (
    <>
        <div id="scroll" class="scroll-div">
            {/*######### TOUS LES COMPOSANTS NAVBAR #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgba(0, 183, 255, 0.65)' }}> NavBar </h5>

                    {/*######### NAVBAR ##############*/}
                    <li><a class="nav_btn" href="/composants/navbar/#nav-basic">nav-basic</a></li>
                    <li><a class="nav_btn" href="/composants/navbar/#nav-logo">nav-logo</a></li>
                    <li><a class="nav_btn" href="/composants/navbar/#nav_searchbar">nav_searchbar</a></li>
                    <li><a class="nav_btn" href="/composants/navbar/#nav_soustxt">nav_soustxt</a></li>
                    {/*######### FIN NAVBAR ##############*/}

                </ul>
            </div>
            {/*######################################################*/}

            {/*######### TOUS LES COMPOSANTS FORMS #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgba(0, 255, 136, 0.65)' }}> Forms </h5>

                    {/*############## FORMS ############## */}
                    <li><a class="nav_btn" href="/composants/form/#form-basic">form-basic</a></li>
                    <li><a class="nav_btn" href="/composants/form/#form-password">form-password</a></li>
                    <li><a class="nav_btn" href="/composants/form/#form-connexion">form-connexion</a></li>
                    <li><a class="nav_btn" href="/composants/form/#form-contact">form-contact</a></li>
                    {/*############## FIN FORMS ##############*/}

                </ul>
            </div>
            {/*#############################################*/}

            {/*######### TOUS LES COMPOSANTS FOOTER #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgba(255, 0, 0, 0.65)' }}> Footer </h5>

                    {/*############## FOOTER ##############*/}
                    <li><a class="nav_btn" href="/composants/footer/#footer-basic">footer-basic</a></li>
                    <li><a class="nav_btn" href="/composants/footer/#footer-minimum">footer-minimum</a></li>
                    <li><a class="nav_btn" href="/composants/footer/#footer-vertical">footer-vertical</a></li>
                    <li><a class="nav_btn" href="/composants/footer/#footer-rgpd">footer-rgpd</a></li>
                    {/*############## FIN FOOTER ##############*/}

                </ul>
            </div>
            {/*#############################################*/}

            {/*######### TOUS LES COMPOSANTS POSITIONS BLOCKS #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgba(0, 21, 247, 0.95)' }}> Positions Block </h5>

                    {/*############## POSITIONS BLOCKS ##############*/}
                    <li><a class="nav_btn" href="/composants/position/#txt_img_side">txt_img_side</a></li>
                    <li><a class="nav_btn" href="/composants/position/#three-div">three-div</a></li>
                    {/*############## FIN POSITIONS BLOCKS ##############*/}

                </ul>
            </div>
            {/*#############################################*/}

            {/*######### TOUS LES COMPOSANTS BOUTONS #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgb(174, 0, 255)' }}> Boutons </h5>

                    {/*############## BOUTONS ##############*/}
                    <li><a class="nav_btn" href="/composants/bouton/#btn">btn</a></li>
                    <li><a class="nav_btn" href="/composants/bouton/#btn-black">btn-black</a></li>
                    <li><a class="nav_btn" href="/composants/bouton/#btn-red">btn-red</a></li>
                    <li><a class="nav_btn" href="/composants/bouton/#btn-blue">btn-blue</a></li>
                    <li><a class="nav_btn" href="/composants/bouton/#btn-green">btn-green</a></li>
                    <li><a class="nav_btn" href="/composants/bouton/#btn-side-up">btn-side-up</a></li>
                    <li><a class="nav_btn" href="/composants/bouton/#btn-side-down">btn-side-down</a></li>
                    <li><a class="nav_btn" href="/composants/bouton/#btn-side-left">btn-side-left</a></li>
                    <li><a class="nav_btn" href="/composants/bouton/#btn-side-right">btn-side-right</a></li>
                    <li><a class="nav_btn" href="/composants/bouton/#btn-hover">btn-hover</a></li>
                    {/*############## FIN BOUTONS ##############*/}

                </ul>
            </div>
            {/*#############################################*/}
        </div>
    </>
    )
}

export default CompoNav