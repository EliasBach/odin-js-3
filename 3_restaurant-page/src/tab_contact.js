// creates the content for the contact tab
const tab = document.createElement("div")
tab.classList.add("tab")

// add contacts
const sec1 = document.createElement("div")
sec1.classList.add("section")

const contact1_name = document.createElement("div")
contact1_name.classList.add("header")
contact1_name.textContent = "John Smith, Owner"

const contact1_info = document.createElement("div")
contact1_info.classList.add("text")
contact1_info.textContent = "+012 3456789"

sec1.appendChild(contact1_name)
sec1.appendChild(contact1_info)

const sec2 = document.createElement("div")
sec2.classList.add("section")

const contact2_name = document.createElement("div")
contact2_name.classList.add("header")
contact2_name.textContent = "Jean Lefeuvbre, Chef"

const contact2_info = document.createElement("div")
contact2_info.classList.add("text")
contact2_info.textContent = "+012 3456789"

sec2.appendChild(contact2_name)
sec2.appendChild(contact2_info)


// add everything to tab
tab.appendChild(sec1)
tab.appendChild(sec2)
export default tab