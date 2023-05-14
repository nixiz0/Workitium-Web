import React from 'react'
import ytb_logo from '../../0-ressources/ytb_logo.png'
import github_logo from '../../0-ressources/github_logo.png'

import './footer.css'


function Footer() {

  return (
    <footer class="footer-vertical_custom">
        <div class="vertical_social_custom">
            <a href="https://www.youtube.com/@Initium0_0" target="_blank" rel="noreferrer"><img width="38rem" height="auto" src={ytb_logo} alt="logo réseaux"/></a>
            <a href="https://github.com/nixiz0?tab=overview&from=2023-01-01&to=2023-01-14" target="_blank" rel="noreferrer"><img width="38rem" height="auto" src={github_logo} alt="logo réseaux"/></a>
        </div>
        <div class="vertical_copyright_custom">
        <p>Copyright © 2023 Workitium. Tous droits réservés.</p>
        </div>
    </footer>
  )
}

export default Footer