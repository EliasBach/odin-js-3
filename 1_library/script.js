let myLibrary = [];
const container = document.querySelector('#container')
const bookSubmitForm = document.querySelector('#book-submit-form')

const addBookBtn = document.querySelector('.AddBookBtn')
addBookBtn.addEventListener('click', () => {
  bookSubmitForm.style.display = "block"
  addBookBtn.disabled = true
})

let input_title = document.querySelector('#title')
let input_author = document.querySelector('#author')
let input_pages = document.querySelector('#pages')
function reset_inputs() {
  input_title.value = ""
  input_author.value = ""
  input_pages.value = ""
}

const submitBookBtn = document.querySelector(".SubmitBookBtn")
submitBookBtn.addEventListener("click", () => {
  addBookToLibrary(input_title.value, input_author.value, input_pages.value)
  displayLibrary()
  bookSubmitForm.style.display = "none"
  addBookBtn.disabled = false
  reset_inputs()
})

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

function addBookToLibrary(title, author, pages, read=false) {
  let newbook = new Book(title, author, pages, read)
  myLibrary.push(newbook)
}

function displayLibrary() {
  container.innerHTML = ''
  myLibrary.forEach((book) => {
    const entry = document.createElement("li")
    entry.textContent = book.info()
    
    // remove button functionality
    const RemoveBtn = document.createElement("button")
    RemoveBtn.setAttribute("class", "RemoveBtn")
    RemoveBtn.textContent = "Del"
    RemoveBtn.addEventListener('click', (e) => removeEntry(book, e))
    entry.appendChild(RemoveBtn)

    // read toggle functionality
    const ReadToggleBtn = document.createElement("button")
    ReadToggleBtn.setAttribute("class", "ReadToggleBtn")
    ReadToggleBtn.textContent = "V"
    ReadToggleBtn.addEventListener('click', (e) => toggleEntry(book, e))
    entry.appendChild(ReadToggleBtn)
    container.appendChild(entry)
  })
  console.table(myLibrary)
}

// to access specific book, use the id
function getBookbyID(id) {
  return myLibrary.find(book => book.id === id)
}

// remove button functionality
function removeEntry (book, e) {
  const BookEntry = e.currentTarget.parentNode
  const Container = BookEntry.parentNode
  Container.removeChild(BookEntry)
  myLibrary = myLibrary.filter(allbooks => allbooks.id != book.id);
  displayLibrary()
}

// read toggle functionality
function toggleEntry (book, e) {
  book.read ? book.read = false : book.read = true
  displayLibrary()
}

addBookToLibrary("The Bible", "God", 420)
addBookToLibrary("1984", "George Orwell", 328)
addBookToLibrary("XXX", "YYY", 123)
displayLibrary()