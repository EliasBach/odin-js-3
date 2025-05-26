// creates the content for the menu tab
const tab = document.createElement("div")
tab.classList.add("tab")

// create sections and headers
const sec1 = document.createElement("div")
sec1.classList.add("section")
sec1.setAttribute("id", "starters")
const starters_header = document.createElement("div")
starters_header.classList.add("header")
starters_header.textContent = "Starters"
sec1.appendChild(starters_header)

const sec2 = document.createElement("div")
sec2.classList.add("section")
sec2.setAttribute("id", "mains")
const mains_header = document.createElement("div")
mains_header.classList.add("header")
mains_header.textContent = "Mains"
sec2.appendChild(mains_header)

const sec3 = document.createElement("div")
sec3.classList.add("section")
sec3.setAttribute("id", "desserts")
const desserts_header = document.createElement("div")
desserts_header.classList.add("header")
desserts_header.textContent = "Desserts"
sec3.appendChild(desserts_header)

const sec4 = document.createElement("div")
sec4.classList.add("section")
sec4.setAttribute("id", "drinks")
const drinks_header = document.createElement("div")
drinks_header.classList.add("header")
drinks_header.textContent = "Drinks"
sec4.appendChild(drinks_header)

tab.appendChild(sec1)
tab.appendChild(sec2)
tab.appendChild(sec3)
tab.appendChild(sec4)

// add all menu items here to appropriate section using function

createMenuItem(1, "entree A", "4.00")
createMenuItem(1, "entree B", "4.50")
createMenuItem(1, "entree C", "4.00")

createMenuItem(2, "main A", "14.00")
createMenuItem(2, "main B", "15.50")
createMenuItem(2, "main C", "16.00")
createMenuItem(2, "main D", "16.00")

createMenuItem(3, "dessert A", "6.00")
createMenuItem(3, "dessert B", "4.00")


import food_img_placeholder from "./media/food_placeholder.jpg"

function createMenuItem(type, name="menu item", price="XX $") {
    // type 1 - starters
    // type 2 - mains
    // type 3 - desserts
    // type 4 - drinks
    let sec = 0
    if (type == 1) {
        sec = sec1
    } else if (type == 2) {
        sec = sec2
    } else if (type == 3) {
        sec = sec3
    } else if (type == 4) {
        sec = sec4
    }

    const menu_item = document.createElement("div")
    menu_item.classList.add("menu_item")
    const menu_item_name = document.createElement("div")
    menu_item_name.classList.add("text")
    menu_item_name.textContent = name
    const menu_item_text = document.createElement("div")
    menu_item_text.classList.add("text")
    menu_item_text.textContent = `${price} $`
    const food_img = document.createElement("img")
    food_img.src = food_img_placeholder
    food_img.classList.add("food_img")

    menu_item.appendChild(food_img)
    menu_item.appendChild(menu_item_name)
    menu_item.appendChild(menu_item_text)
    
    sec.appendChild(menu_item)
}

export default tab