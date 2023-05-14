import React from 'react'
import './docunav.css'


function DocuNav() {
  window.onscroll = function() {
    if (window.innerWidth < 599) return;
    var scroll_nav = document.getElementById("dynamic_nav");
    if (window.pageYOffset > 93) {
        scroll_nav.style.top = "0%";
        scroll_nav.style.backgroundColor = "#292d31";
        scroll_nav.style.padding = "1rem 1rem 1rem 1rem";
        scroll_nav.style.width = "100%";
        scroll_nav.style.boxShadow = "0px 0px 3px 3px rgba(0,0,0,0.4)"
    }
    if (window.pageYOffset < 93) {
        scroll_nav.style.top = "12%";
        scroll_nav.style.backgroundColor = "transparent";
        scroll_nav.style.padding = "0em";
        scroll_nav.style.width = "auto";
        scroll_nav.style.boxShadow = "none";
    } else {
      return
    }
  };
  return (
    <div>
        <div class="sous_nav">
          <div id="dynamic_nav" class="fixed_nav_block">
              <a href="#reset">Reset</a>
              <a href="#raccourci">Raccourci</a>
              <a href="#flex">Flex</a>
              <a href="#padding">Padding</a>
              <a href="#margin">Margin</a>
              <a href="#img&video">Img&Video</a>
              <a href="#animations">Animations</a>
          </div>
        </div>
    </div>
  )
}

export default DocuNav