const myLibrary = [];
const container = document.querySelector('#container')
const bookSubmitForm = document.querySelector('#BookSubmitForm')
const book_inputs = ["title", "author", "num-pages"]
const book_inputs_types = ["text", "text", "number"]

const addBookBtn = document.querySelector('.AddBookBtn')
addBookBtn.addEventListener('click', () => {
  // create input element for each datapoint needed to save book
  book_inputs.forEach(function(el) {
    let new_input = document.createElement("input")
    new_input.placeholder = el
    bookSubmitForm.appendChild(new_input)
  })
  // temporarily disable the button, so that more inputs cannot be made
  addBookBtn.disabled = true

  // create a submit-book button
  let submitBookBtn = document.createElement("button")
  submitBookBtn.setAttribute("class", "SubmitBookBtn")
  submitBookBtn.textContent = "submit"
  submitBookBtn.addEventListener("click", () => {
    
  })
  bookSubmitForm.appendChild(submitBookBtn)
})

function addBookToLibrary(title, author, pages, read=false) {
  myLibrary.push(new Book(title, author, pages, read))
}

function Book(title, author, pages, read) {
  if (!new.target) {
    throw Error("Use 'new' operator when calling a constructor")
  }
  this.title = title; // string
  this.author = author; // string
  this.pages = pages // number
  this.read = read // boolean
  this.id = crypto.randomUUID()
  this.info = function() {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? "read" : "not yet read"} `
  }
}

function displayLibrary() {
  myLibrary.forEach((book) => {
    const entry = document.createElement("li");
    entry.textContent = book.info()
    
    // remove button functionality
    const RemoveBtn = document.createElement("button")
    RemoveBtn.setAttribute("class", "RemoveBtn")
    entry.appendChild(RemoveBtn)
    RemoveBtn.textContent = "remove"
    RemoveBtn.addEventListener('click', () => {
      container.removeChild(entry);
    });

    // read toggle will go here
    //

    container.appendChild(entry)
  })
}


/// testing
addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false)
addBookToLibrary('The Bible', "God", 420, false)
addBookToLibrary('1984', "George Orwell", 328, true)

displayLibrary()
