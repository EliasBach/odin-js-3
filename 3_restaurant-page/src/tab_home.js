// module contains code to create DOM elements
// to display info in the about tab

// description, location
const tab = document.createElement("div")
tab.classList.add("tab")

const main_header = document.createElement("div")
main_header.classList.add("header")
main_header.textContent = "The Odin Restaurant"

tab.appendChild(main_header)

export default tab