import "./styles.css";
import "./tab_home"
import "./tab_menu"
import "./tab_about"

const homeBtn = document.createElement("button")
homeBtn.textContent = "Home"
const menuBtn = document.createElement("button")
menuBtn.textContent = "Menu"
const aboutBtn = document.createElement("button")
aboutBtn.textContent = "About"

const nav = document.querySelector("nav")
nav.appendChild(homeBtn)
nav.appendChild(menuBtn)
nav.appendChild(aboutBtn)
// tab-switching logic will go here:
// use event listeners for each button in the header navbar 
// that wipes out the current contents of div#content 
// and then runs the correct ‘tab module’ 
// to populate it with the new contents again