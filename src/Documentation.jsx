import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from './components/navbar/Navbar.jsx'
import Footer from './components/footer/Footer.jsx'
import DocuNav from './components/documentation_navbar/DocuNav.jsx'

import './css-style/documentation.css'

import icon_documentation from './0-ressources/icon logo doc.png'


function Documentation() {
  return (
    <>
        <Helmet>
          <link rel="icon" type="image/png" href={icon_documentation} />
          <meta name="description" content="Voici la Documentation Complète du framework Workitium"/>
          <meta name="keywords" content="Workitium-Framework-FrameworkCSS" />
          <title>Workitium Documentation</title>
        </Helmet>
        <Navbar />
        <DocuNav />
        <div class="all_docs">
            {/*--Documentation Reset--*/}
            <div class="docs">
                <h2 id="reset"> Les classes <b style={{color: '#00d0ff'}}>Reset</b>  </h2>
                <p class="p_presentation">
                    Classe permettant de supprimer le CSS par défaut ajouter par les navigateurs dans les balises html.
                </p>
                <p>
                    <b class="code_class_css">reset-html</b> : Supprime le margin et padding par défaut mis sur une page web.
                </p>
                <p>
                    <b class="code_class_css">h1-reset / h2-reset / h3-reset / h4-reset / h5-reset / h6-reset</b> : 
                    <br/>
                    Supprime le margin par défaut sur les titres des balises html.
                </p>
                <p>
                    <b class="code_class_css">p-reset</b> : Supprime le margin sur les paragraphes.
                </p>
                <p>
                    <b class="code_class_css">a-reset</b> : Supprime le soulignage automatique sur les balises
                    et donne une couleur noir au texte.
                </p>
                <p>
                    <b class="code_class_css">list-reset</b> : Enlève les ronds noirs devant les listes et ou les chiffres.
                </p>
            </div>
            {/*--------------*/}

            {/*--Documentation Raccourcis--*/}
            <div class="docs">
                <h2 id="raccourci"> Les classes <b style={{color: '#00d0ff'}}>Raccourcis</b>  </h2>
                <p class="p_presentation">
                    Classe permettant d'améliorer la rapidité de stylisation avec un nom de classe cours appliquant un style.
                </p>
                <p>
                    <b class="code_class_css">txt-c</b> : Centre un texte.
                </p>
            </div>
            {/*--------------*/}

            {/*--Documentation Flex--*/}
            <div class="docs">
                <h2 id="flex"> Les classes <b style={{color: '#00d0ff'}}>Flex</b>  </h2>
                <p class="p_presentation">
                    Classe permettant d'utiliser Flexbox et ses différentes propriétés.
                </p>
                <p>
                    <b class="code_class_css">f</b> : Display flex.
                </p>
                <p>
                    <b class="code_class_css">f-c</b> : Display flex center.
                </p>
                <p>
                    <b class="code_class_css">f-spe</b> : Display flex space evenly.
                </p>
                <p>
                    <b class="code_class_css">f-spa</b> : Display flex space around.
                </p>
                <p>
                    <b class="code_class_css">f-spb</b> : Display flex space between.
                </p>
                <p>
                    <b class="code_class_css">f-c-row</b> : Display flex center & flex direction row.
                </p>
                <p>
                    <b class="code_class_css">f-c-col</b> : Display flex center & flex direction column.
                </p>
                <p>
                    <b class="code_class_css">f-spe-row</b> : Display flex space evenly & flex direction row.
                </p>
                <p>
                    <b class="code_class_css">f-spe-col</b> : Display flex space evenly & flex direction column.
                </p>
                <p>
                    <b class="code_class_css">f-spa-row</b> : Display flex space around & flex direction row.
                </p>
                <p>
                    <b class="code_class_css">f-spa-col</b> : Display flex space around & flex direction column.
                </p>
                <p>
                    <b class="code_class_css">f-spb-row</b> : Display flex space between & flex direction row.
                </p>
                <p>
                    <b class="code_class_css">f-spb-col</b> : Display flex space between & flex direction column.
                </p>
            </div>
            {/*--------------*/}

            {/*--Documentation Padding--*/}
            <div class="docs">
                <h2 id="padding"> Les classes <b style={{color: '#00d0ff'}}>Padding</b>  </h2>
                <p class="p_presentation">
                    Classe permettant d'appliquer différents padding rapidement.
                </p>
                <p>
                    <b class="code_class_css">p1</b> : Padding 0.5rem.
                </p>
                <p>
                    <b class="code_class_css">p2</b> : Padding 1rem.
                </p>
                <p>
                    <b class="code_class_css">p3</b> : Padding 1.5rem.
                </p>
                <p>
                    <b class="code_class_css">p4</b> : Padding 2rem.
                </p>
                <p>
                    <b class="code_class_css">p5</b> : Padding 3rem.
                </p>
                <br/>
                <p>
                    <b class="code_class_css">pright-1</b> : Padding right 1rem.
                </p>
                <p>
                    <b class="code_class_css">pright-2</b> : Padding right 2rem.
                </p>
                <p>
                    <b class="code_class_css">pright-3</b> : Padding right 3rem.
                </p>
                <br/>
                <p>
                    <b class="code_class_css">pleft-1</b> : Padding left 1rem.
                </p>
                <p>
                    <b class="code_class_css">pleft-2</b> : Padding left 2rem.
                </p>
                <p>
                    <b class="code_class_css">pleft-3</b> : Padding left 3rem.
                </p>
                <br/>
                <p>
                    <b class="code_class_css">ptop-1</b> : Padding top 1rem.
                </p>
                <p>
                    <b class="code_class_css">ptop-2</b> : Padding top 2rem.
                </p>
                <p>
                    <b class="code_class_css">ptop-3</b> : Padding top 3rem.
                </p>
                <br/>
                <p>
                    <b class="code_class_css">pbottom-1</b> : Padding bottom 1rem.
                </p>
                <p>
                    <b class="code_class_css">pbottom-2</b> : Padding bottom 2rem.
                </p>
                <p>
                    <b class="code_class_css">pbottom-3</b> : Padding bottom 3rem.
                </p>
            </div>
            {/*--------------*/}

            {/*--Documentation Margin--*/}
            <div class="docs">
                <h2 id="margin"> Les classes <b style={{color: '#00d0ff'}}>Margin</b>  </h2>
                <p class="p_presentation">
                    Classe permettant d'appliquer différents margin de différents côtés rapidement.
                </p>
                <p>
                    <b class="code_class_css">m1</b> : Margin 1rem.
                </p>
                <p>
                    <b class="code_class_css">m2</b> : Margin 2rem.
                </p>
                <p>
                    <b class="code_class_css">m3</b> : Margin 3rem.
                </p>
                <p>
                    <b class="code_class_css">m4</b> : Margin 4rem.
                </p>
                <p>
                    <b class="code_class_css">m5</b> : Margin 5rem.
                </p>
                <br/>
                <p>
                    <b class="code_class_css">mright-1</b> : margin-right 1rem.
                </p>
                <p>
                    <b class="code_class_css">mright-2</b> : margin-right 2rem.
                </p>
                <p>
                    <b class="code_class_css">mright-3</b> : margin-right 3rem.
                </p>
                <br/>
                <p>
                    <b class="code_class_css">mleft-1</b> : margin-left 1rem.
                </p>
                <p>
                    <b class="code_class_css">mleft-2</b> : margin-left 2rem.
                </p>
                <p>
                    <b class="code_class_css">mleft-3</b> : margin-left 3rem.
                </p>
                <br/>
                <p>
                    <b class="code_class_css">mtop-1</b> : margin-top 1rem.
                </p>
                <p>
                    <b class="code_class_css">mtop-2</b> : margin-top 2rem.
                </p>
                <p>
                    <b class="code_class_css">mtop-3</b> : margin-top 3rem.
                </p>
                <br/>
                <p>
                    <b class="code_class_css">mbottom-1</b> : margin-bottom 1rem.
                </p>
                <p>
                    <b class="code_class_css">mbottom-2</b> : margin-bottom 2rem.
                </p>
                <p>
                    <b class="code_class_css">mbottom-3</b> : margin-bottom 3rem.
                </p>
            </div>
            {/*--------------*/}

            {/*--Documentation Img & Video--*/}
            <div class="docs">
                <h2 id="img&video"> Les classes <b style={{color: '#00d0ff'}}>Img & Vidéo</b>  </h2>
                <p class="p_presentation">
                    Classe permettant de gérer directement le positionnement en absolute d'une image en fond ainsi
                    que d'une vidéo.
                </p>
                <p>
                    <b class="code_class_css">img_background</b> : Permet de mettre une image en fond.
                </p>
                <p>
                    <b class="code_class_css">block_video</b> : Permet de préparer un block pour après mettre la classe <i><b class="code_class_css">video_background</b></i> dedans.
                    <br/>
                    <b class="code_class_css">video_background</b> : Classe a placer dans une balise html video qui est 
                    dans une div possédant la classe <i><b class="code_class_css">block_video</b></i> .
                </p>
            </div>
            {/*--------------*/}

            {/*--Documentation Animations--*/}
            <div class="docs">
                <h2 id="animations"> Les classes <b style={{color: '#00d0ff'}}>Animations</b>  </h2>
                <p class="p_presentation">
                    Classe permettant d'animer vos éléments sur votre site web rapidement avec différentes keyframes déjà fabriqués pour vous.
                </p>
                <p>
                    <b class="code_class_css">txt_cyberpunk_anim</b> : Animation de texte 
                    (il faut juste aller dans cette classe css pour pouvoir changer le texte que vous souhaitez mettre)
                    <br/>
                    exemple : <span style={{color: '#9c0633'}}class="txt_cyberpunk_anim"></span>.
                </p>
            </div>
            {/*--------------*/}
        </div>
        <Footer />
    </>
  )
}

export default Documentation