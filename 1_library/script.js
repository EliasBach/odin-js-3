const myLibrary = [];
const container = document.querySelector('#container')

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
    return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? "read" : "not yet read"}`
  }
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read))
}

function displayLibrary() {
  myLibrary.forEach((book) => {
    const para = document.createElement("p");
    para.textContent = book.info()
  container.appendChild(para)
  })
}

addBookToLibrary('The Hobbit', 'J.R.R Tolkien', 295, false)
addBookToLibrary('The Bible', "God", 420, false)
addBookToLibrary('1984', "George Orwell", 328, true)

displayLibrary()