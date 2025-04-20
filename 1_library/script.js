const myLibrary = [];
const container = document.querySelector('#container')
const bookSubmitForm = document.querySelector('#book-submit-form')

const addBookBtn = document.querySelector('.AddBookBtn')
addBookBtn.addEventListener('click', () => {
  bookSubmitForm.style.display = "block"
  addBookBtn.disabled = true
})

const input_title = document.querySelector('#title')
const input_author = document.querySelector('#author')
const input_pages = document.querySelector('#pages')

const submitBookBtn = document.querySelector(".SubmitBookBtn")
submitBookBtn.addEventListener("click", () => {
  addBookToLibrary(input_title.value, input_author.value, input_pages.value)
  bookSubmitForm.style.display = "none"
  addBookBtn.disabled = false
  displayLibrary()
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
  myLibrary.push(new Book(title, author, pages, read))
}

function displayLibrary() {
  container.innerHTML = ''
  myLibrary.forEach((book) => {
    const entry = document.createElement("li")
    entry.textContent = book.info()
    
    // remove button functionality
    const RemoveBtn = document.createElement("button")
    RemoveBtn.setAttribute("class", "RemoveBtn")
    entry.appendChild(RemoveBtn)
    RemoveBtn.textContent = "Del"
    RemoveBtn.addEventListener('click', () => {
      container.removeChild(entry)
    })

    // read toggle functionality
    const ReadToggleBtn = document.createElement("button")
    ReadToggleBtn.setAttribute("class", "ReadToggleBtn")
    entry.appendChild(ReadToggleBtn)
    ReadToggleBtn.textContent = "V"
    ReadToggleBtn.addEventListener('click', () => {
      if (book.read) {
        book.read = false
      } else {
        book.read = true
      }
      displayLibrary()
    })

    container.appendChild(entry)
  })
}


/// testing
displayLibrary()
