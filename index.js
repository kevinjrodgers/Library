let myLibrary = [];
let bookOne = new Book("Harry Potter and the Sorcerer's Stone", "J.K. Rowling", 1100, "Not Read Yet");
let bookTwo = new Book("Example 2", "Author 2", 200, "Has Been Read");
let bookThree = new Book("Example 3", "Author 3", 300, "Not Read Yet");
let bookFour = new Book("Example 4", "Author 4", 400, "Not Read Yet");
let bookFive = new Book("Example 5", "Author 5", 500, "Has Been Read");
let bookSix = new Book("Example 6", "Author 6", 600, "Has Been Read");
let bookSeven = new Book("Example 7", "Author 7", 700, "Not Read Yet");
let bookEight = new Book("Example 8", "Author 8", 1000, "Has Been Read");
myLibrary.push(bookOne);
myLibrary.push(bookTwo);
myLibrary.push(bookThree);
myLibrary.push(bookFour);
myLibrary.push(bookFive);
myLibrary.push(bookSix);
myLibrary.push(bookSeven);
myLibrary.push(bookEight);

function Book(title, author, pages, hasBeenRead) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.hasBeenRead = hasBeenRead;
  this.info = function() {
    return title + " by " + author + ", " + pages + " pages, " + hasBeenRead;
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
  var index = myLibrary.length;
  if(hasBeenReadYN == "Y") {
    hasBeenRead = "Has Been Read";
  }
  else {
    hasBeenRead = "Not Read Yet";
  }
  let newBook = new Book(title, author, pages, hasBeenRead, index);
  myLibrary.push(newBook);

}

function render() {
  //Loop through array and render each Book onto the page

  let library = document.getElementById("library");
  library.innerHTML = "";

  //Cycle through myLibrary and load Books onto page
  for(let bookNum = 0; bookNum < myLibrary.length; bookNum++) {

    var newBookData = document.createElement("div");
    var bookText = document.createElement("p");
    var readToggleButton = document.createElement("button");
    var deleteButton = document.createElement("button");
    var textDetails = document.createTextNode(myLibrary[bookNum].info());
    var redAttribute = Math.floor(Math.random() * 256) + 20;
    var greenAttribute = Math.floor(Math.random() * 256) + 20;
    var blueAttribute = Math.floor(Math.random() * 256) + 20;

    //Set the data-attribute for the book
    newBookData.dataset.index = bookNum;

    readToggleButton.innerHTML = "Toggle Read";
    readToggleButton.className = "toggle";
    deleteButton.innerHTML = "Delete";
    deleteButton.className = "delete";
    readToggleButton.addEventListener("click", function(e) {
      var bookIndex = e.target.parentElement.getAttribute("data-index");
      //toggleRead(bookIndex);
      if(myLibrary[bookIndex].hasBeenRead == "Not Read Yet") {
        myLibrary[bookIndex].hasBeenRead = "Has Been Read";
      } else {
        myLibrary[bookIndex].hasBeenRead = "Has Been Read";
      }
      e.target.parentElement.childNodes[1].innerHTML = "";
      e.target.parentElement.childNodes[1].innerHTML = myLibrary[bookIndex].info();
    });

    deleteButton.addEventListener("click", function(e) {
      var bookIndex = e.target.parentElement.getAttribute("data-index");
      removeBook(bookIndex);
    });

    newBookData.className = "book-display";
    newBookData.style.backgroundColor = "rgb(" + redAttribute + "," + greenAttribute + "," + blueAttribute + ")";
    bookText.appendChild(textDetails);

    newBookData.appendChild(deleteButton);
    newBookData.appendChild(bookText);
    newBookData.appendChild(readToggleButton);

    library.appendChild(newBookData);
  }
}

function toggleRead(index) {
  /*Go through the array to the targeted index, change the object's read
  variable at that index to the opposite value (Y/N)
  */
  if(myLibrary[index].hasBeenRead === "Not Read Yet") {
    myLibrary[index].hasBeenRead = "Has Been Read";
  } else {
    myLibrary[index].hasBeenRead = "Not Read Yet";
  }
  alert("The index is: " + index);
}

function renderAddBookButton() {

}

function removeBook(targetBookIndex) {
  let library = document.getElementById("library");
  myLibrary.splice(targetBookIndex, 1);
  render();
}
