function Book(title, author, pages, read) {
    if (!new.target) {
      throw Error("Use 'new' operator when calling a constructor")
    }
    this.title = title; // string
    this.author = author; // string
    this.pages = pages // number
    this.read = read // boolean
    this.info = function() {
        return `${this.title} by ${this.author}, 
        ${this.pages} pages, ${read ? "read" : "not yet read"}`
    }
  }

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, false)
console.log(theHobbit.info())
console.log(Object.getPrototypeOf(theHobbit))
console.log(Book.prototype)
console.log(theHobbit.valueOf());

// Obj1.prototype = Obj2.prototype; does not work!
