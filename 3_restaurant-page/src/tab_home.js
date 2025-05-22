// module contains code to create DOM elements
// to display info in the about tab
const tab = document.createElement("div")
tab.classList.add("tab")

const main_header = document.createElement("div")
main_header.classList.add("header")
main_header.setAttribute("id", "main_header")
main_header.textContent = "The Odin Restaurant"

const description = document.createElement("div")
description.setAttribute("id", "description");
description.textContent = "Welcome to Odin’s! Where timeless Norse tradition meets modern culinary excellence. Nestled in the heart of the city, we offer a bold, flavorful menu inspired by Viking heritage and crafted with fresh, locally sourced ingredients. From hearty meats and fire-grilled seafood to decadent desserts and artisan meads, every dish is a feast worthy of the gods. Our rustic yet elegant atmosphere invites you to gather, celebrate, and indulge. Whether you’re here for a casual meal or a grand occasion, Odin’s promises an unforgettable dining experience rooted in legend and delivered with passion. Join us and dine like a warrior."

// opening hours

// address

tab.appendChild(main_header)
tab.appendChild(description)

export default tab