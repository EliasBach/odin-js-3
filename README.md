# The Odin Project Javascript Course: Exercise 1
## Library
Description:
This exercise asks to build a Virtual Library, which can store, delete and display a selection of books that the user enters.

Concepts tested:
* Object declaration
* constructors
* Prototypes

Note to self: Issue with code is that after every button press, the displayLibrary function is called, which initialises the entire display from scratch. It would be more efficient to have an initial set up function and an updateDisplay function, which takes the id of the book whose button was pressed and then makes a targeted deletion in the DOM.