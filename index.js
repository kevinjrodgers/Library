let myLibrary = [];

function Book(title, author, pages, hasBeenRead, index) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = hasBeenRead;
  this.index = index;
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
  let bookOne = new Book("Example 1", "Author 1", 100, "Not read yet", 0);
  let bookTwo = new Book("Example 2", "Author 2", 200, "Not read yet", 1);
  let bookThree = new Book("Example 3", "Author 3", 300, "Not read yet", 2);
  let bookFour = new Book("Example 4", "Author 4", 400, "Not read yet", 3);
  let bookFive = new Book("Example 5", "Author 5", 500, "Not read yet", 4);
  let bookSix = new Book("Example 6", "Author 6", 600, "Not read yet", 5);
  let bookSeven = new Book("Example 7", "Author 7", 700, "Not read yet", 6);
  let bookEight = new Book("Example 8", "Author 8", 1000, "Not read yet", 7);
  let library = document.getElementById("library");
  let counter = 0;
  myLibrary.push(bookOne);
  myLibrary.push(bookTwo);
  myLibrary.push(bookThree);
  myLibrary.push(bookFour);
  myLibrary.push(bookFive);
  myLibrary.push(bookSix);
  myLibrary.push(bookSeven);
  myLibrary.push(bookEight);
  var newRow = document.createElement("tr");
  //Cycle through myLibrary and load Books onto page
  for(let bookNum = 0; bookNum < myLibrary.length; bookNum++) {
    //Make a new row every 8 Books
    //if(counter % 8 == 0) {
      //Make a new row
    //}
    //else {

    //}
    var newTableDataBook = document.createElement("td");
    /*newTableDataBook.style.color = "lightblue";
    //newTableDataBook.setAttribute("class", "book-display");
    newTableDataBook.className = "book-display";
    newTableDataBook.innerHTML = myLibrary[bookNum].info();
    */
    var bookText = document.createElement("p");
    var readToggleButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var textDetails = document.createTextNode(myLibrary[bookNum].info());
    bookText.className = "book-display";
    readToggleButton.innerHTML = "Toggle Read";
    deleteButton.innerHTML = "Delete";
    bookText.appendChild(textDetails);
    newTableDataBook.appendChild(bookText);
    newTableDataBook.append(readToggleButton);
    newTableDataBook.append(deleteButton);

    newRow.appendChild(newTableDataBook);
  }
  library.appendChild(newRow);

}

function toggleRead(index) {

}
