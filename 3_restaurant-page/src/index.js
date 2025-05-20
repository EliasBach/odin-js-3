import "./styles.css";
import "./tab_home"
import "./tab_menu"
import "./tab_contact"

const nav = document.querySelector("nav")
const header = document.querySelector("header")
const content = document.querySelector("#content")

const homeBtn = document.createElement("button")
homeBtn.textContent = "Home"
const menuBtn = document.createElement("button")
menuBtn.textContent = "Menu"
const contactBtn = document.createElement("button")
contactBtn.textContent = "Contact"


nav.appendChild(homeBtn)
nav.appendChild(menuBtn)
nav.appendChild(contactBtn)
// tab-switching logic will go here:
// use event listeners for each button in the header navbar 
// that wipes out the current contents of div#content 
// and then runs the correct ‘tab module’ 
// to populate it with the new contents again