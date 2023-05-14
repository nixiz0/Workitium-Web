import React from 'react'
import './componav.css'
import {Link} from 'react-router-dom'

function CompoNav() {
    return (
    <>
        <div id="scroll" class="scroll-div">
            {/*######### TOUS LES COMPOSANTS NAVBAR #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgba(0, 183, 255, 0.65)' }}> NavBar </h5>

                    {/*######### NAVBAR ##############*/}
                    <li><Link class="nav_btn" to="/composants/navbar/#nav-basic">nav-basic</Link></li>
                    <li><Link class="nav_btn" to="/composants/navbar/#nav-logo">nav-logo</Link></li>
                    <li><Link class="nav_btn" to="/composants/navbar/#nav_searchbar">nav_searchbar</Link></li>
                    <li><Link class="nav_btn" to="/composants/navbar/#nav_soustxt">nav_soustxt</Link></li>
                    {/*######### FIN NAVBAR ##############*/}

                </ul>
            </div>
            {/*######################################################*/}

            {/*######### TOUS LES COMPOSANTS FORMS #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgba(0, 255, 136, 0.65)' }}> Forms </h5>

                    {/*############## FORMS ############## */}
                    <li><Link class="nav_btn" to="/composants/form/#form-basic">form-basic</Link></li>
                    <li><Link class="nav_btn" to="/composants/form/#form-password">form-password</Link></li>
                    <li><Link class="nav_btn" to="/composants/form/#form-connexion">form-connexion</Link></li>
                    <li><Link class="nav_btn" to="/composants/form/#form-contact">form-contact</Link></li>
                    {/*############## FIN FORMS ##############*/}

                </ul>
            </div>
            {/*#############################################*/}

            {/*######### TOUS LES COMPOSANTS FOOTER #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgba(255, 0, 0, 0.65)' }}> Footer </h5>

                    {/*############## FOOTER ##############*/}
                    <li><Link class="nav_btn" to="/composants/footer/#footer-basic">footer-basic</Link></li>
                    <li><Link class="nav_btn" to="/composants/footer/#footer-minimum">footer-minimum</Link></li>
                    <li><Link class="nav_btn" to="/composants/footer/#footer-vertical">footer-vertical</Link></li>
                    <li><Link class="nav_btn" to="/composants/footer/#footer-rgpd">footer-rgpd</Link></li>
                    {/*############## FIN FOOTER ##############*/}

                </ul>
            </div>
            {/*#############################################*/}

            {/*######### TOUS LES COMPOSANTS POSITIONS BLOCKS #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgba(0, 21, 247, 0.95)' }}> Positions Block </h5>

                    {/*############## POSITIONS BLOCKS ##############*/}
                    <li><Link class="nav_btn" to="/composants/position/#txt_img_side">txt_img_side</Link></li>
                    <li><Link class="nav_btn" to="/composants/position/#three-div">three-div</Link></li>
                    {/*############## FIN POSITIONS BLOCKS ##############*/}

                </ul>
            </div>
            {/*#############################################*/}

            {/*######### TOUS LES COMPOSANTS BOUTONS #########*/}
            <div class="sous_composants">
                <ul class="list-reset nav_composants">
                    <h5 style={{ textShadow: '0px 2px 3px rgb(174, 0, 255)' }}> Boutons </h5>

                    {/*############## BOUTONS ##############*/}
                    <li><Link class="nav_btn" to="/composants/bouton/#btn">btn</Link></li>
                    <li><Link class="nav_btn" to="/composants/bouton/#btn-black">btn-black</Link></li>
                    <li><Link class="nav_btn" to="/composants/bouton/#btn-red">btn-red</Link></li>
                    <li><Link class="nav_btn" to="/composants/bouton/#btn-blue">btn-blue</Link></li>
                    <li><Link class="nav_btn" to="/composants/bouton/#btn-green">btn-green</Link></li>
                    <li><Link class="nav_btn" to="/composants/bouton/#btn-side-up">btn-side-up</Link></li>
                    <li><Link class="nav_btn" to="/composants/bouton/#btn-side-down">btn-side-down</Link></li>
                    <li><Link class="nav_btn" to="/composants/bouton/#btn-side-left">btn-side-left</Link></li>
                    <li><Link class="nav_btn" to="/composants/bouton/#btn-side-right">btn-side-right</Link></li>
                    <li><Link class="nav_btn" to="/composants/bouton/#btn-hover">btn-hover</Link></li>
                    {/*############## FIN BOUTONS ##############*/}

                </ul>
            </div>
            {/*#############################################*/}
        </div>
    </>
    )
}

export default CompoNav