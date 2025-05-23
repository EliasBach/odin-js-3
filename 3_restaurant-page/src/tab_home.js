// creates the content for the home tab
const tab = document.createElement("div")
tab.classList.add("tab")

// SECTION 1: description
const sec1 = document.createElement("div")
sec1.classList.add("section")

const main_header = document.createElement("div")
main_header.classList.add("header")
main_header.setAttribute("id", "main_header")
main_header.textContent = "The Odin Restaurant"

const description = document.createElement("div")
description.classList.add("text")
description.setAttribute("id", "description")
description.textContent = "Welcome to Odin’s! Where timeless Norse tradition meets modern culinary excellence. Nestled in the heart of the city, we offer a bold, flavorful menu inspired by Viking heritage and crafted with fresh, locally sourced ingredients. From hearty meats and fire-grilled seafood to decadent desserts and artisan meads, every dish is a feast worthy of the gods. Our rustic yet elegant atmosphere invites you to gather, celebrate, and indulge. Whether you’re here for a casual meal or a grand occasion, Odin’s promises an unforgettable dining experience rooted in legend and delivered with passion. Join us and dine like a warrior."

sec1.appendChild(main_header)
sec1.appendChild(description)

// SECTION 2: opening hours
const sec2 = document.createElement("div")
sec2.classList.add("section")

const hours_header = document.createElement("div")
hours_header.classList.add("header")
hours_header.textContent = "Opening Hours"

const hours_text = document.createElement("div")
hours_text.classList.add("text")
hours_text.textContent = "Monday - Friday: 12:00 til 22:00   |   Saturday - Sunday: 16:00 til 23:00"

sec2.appendChild(hours_header)
sec2.appendChild(hours_text)

// SECTION 3: address and map
const sec3 = document.createElement("div")
sec3.classList.add("section")

const address_header = document.createElement("div")
address_header.classList.add("header")
address_header.textContent = "Address"

const address_text = document.createElement("div")
address_text.classList.add("text")
address_text.textContent = "Freya Boulevard 99, 474B Oslo, Norway"

import location_imgpath from "./media/location_map.png"
const location_map = document.createElement("img")
location_map.src = location_imgpath
location_map.setAttribute("id", "map")

sec3.appendChild(address_header)
sec3.appendChild(address_text)
sec3.appendChild(location_map)

// add everything to tab
tab.appendChild(sec1)
tab.appendChild(sec2)
tab.appendChild(sec3)
export default tab