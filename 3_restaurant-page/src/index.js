import "./styles.css";

// header at the very top of the page
const header = document.querySelector("header")
header.textContent = "Welcome to the Odin Restaurant Site"

// navigation bar, with buttons that activate each of the tabs
const nav = document.querySelector("nav")
const homeBtn = document.createElement("button")
homeBtn.textContent = "Home"
homeBtn.addEventListener("click", create_homeTab)
homeBtn.setAttribute("id", "homeBtn")
const menuBtn = document.createElement("button")
menuBtn.textContent = "Menu"
menuBtn.addEventListener("click", create_menuTab)
menuBtn.setAttribute("id", "menuBtn")
const contactBtn = document.createElement("button")
contactBtn.textContent = "Contact"
contactBtn.addEventListener("click", create_contactTab)
contactBtn.setAttribute("id", "contactBtn")
nav.appendChild(homeBtn)
nav.appendChild(menuBtn)
nav.appendChild(contactBtn)

// tab-switching logic 
// each button calls a function that wipes out 
// the current contents of div#content 
// and populates it with the content defined in corresponding module
const content = document.querySelector("#content")

import homeTab from "./tab_home"
import menuTab from "./tab_menu"
import contactTab from "./tab_contact"

function create_homeTab() {
    content.innerHTML = ""
    content.append(homeTab)
}
function create_menuTab() {
    content.innerHTML = ""
    content.append(menuTab)
}
function create_contactTab() {
    content.innerHTML = ""
    content.append(contactTab)
}