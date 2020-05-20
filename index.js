let myLibrary = [];

function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = hasBeenRead;
  this.info = function() {
    return title + " by " + author + ", " + pages + ", " + hasBeenRead;
  }
}

function addBookToLibrary() {
  //get user input on the title, author, pages, and hasBeenRead
  //store info into a Book object
  //add Book object into myLibrary
  var title = window.prompt("Enter title.");
  var author = window.prompt("Enter author's name.");
  var pages = window.prompt("Enter number of pages the book contains.");
  var hasBeenReadYN = window.prompt("Has this book been read? Y/N");
  if(hasBeenReadYN == "Y") {
    hasBeenRead = "Has been read";
  }
  else {
    hasBeenRead = "Not read yet";
  }
  let newBook = new Book(title, author, pages, hasBeenRead);
  myLibrary.push(newBook);
}

function render() {
  //Loop through array and render each Book onto the page
  let bookOne = new Book("Example 1", "Author 1", 100, "Not read yet");
  let bookTwo = new Book("Example 2", "Author 2", 200, "Not read yet");
  let bookThree = new Book("Example 3", "Author 3", 300, "Not read yet");
  let bookFour = new Book("Example 4", "Author 4", 400, "Not read yet");
  let bookFive = new Book("Example 5", "Author 5", 500, "Not read yet");
  let library = document.getElementById("library");
  let counter = 0;
  myLibrary.push(bookOne);
  myLibrary.push(bookTwo);
  myLibrary.push(bookThree);
  myLibrary.push(bookFour);
  myLibrary.push(bookFive);
  var newRow = document.createElement("tr");
  //Cycle through myLibrary and load Books onto page
  for(let bookNum = 0; bookNum < myLibrary.length; bookNum++) {
    //Make a new row every 5 Books
    //if(counter % 5 == 0) {
      //Make a new row
    //}
    //else {

    //}
    var newTableDataBook = document.createElement("td");
    newTableDataBook.innerHTML = myLibrary[bookNum].info();
    newRow.appendChild(newTableDataBook);
  }
  library.appendChild(newRow);

}
