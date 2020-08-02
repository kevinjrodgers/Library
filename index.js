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
    return this.title + " by " + this.author + ", " + this.pages + " pages, " + this.hasBeenRead;
  }

}

function addBookToLibrary() {
  //get user input on the title, author, pages, and hasBeenRead
  //store info into a Book object
  //add Book object into myLibrary
  let title = window.prompt("Enter title.");
  let author = window.prompt("Enter author's name.");
  let pages = window.prompt("Enter number of pages the book contains.");
  let hasBeenReadYN = window.prompt("Has this book been read? Y/N");
  let index = myLibrary.length;
  if(title == null || author == null || pages == null || hasBeenReadYN == null) {
    alert("Error.");
  }
  else {
    if(hasBeenReadYN == "Y") {
      hasBeenRead = "Has Been Read";
    }
    else {
      hasBeenRead = "Not Read Yet";
    }
    let newBook = new Book(title, author, pages, hasBeenRead, index);
    myLibrary.push(newBook);
    render();
  }
}

function render() {
  //Loop through array and render each Book onto the page

  let library = document.getElementById("library");
  library.innerHTML = "";
  //Add the Add Book button
  let addBookButton = document.createElement("div");
  let addButtonLink = document.createElement("a");
  let addButtonParagraph = document.createElement("p");
  let addButtonTextNode = document.createTextNode("+");
  addBookButton.addEventListener("click", function() {
    addBookToLibrary();
  })

  //Create the Add Book div
  addButtonParagraph.appendChild(addButtonTextNode);
  addButtonLink.appendChild(addButtonParagraph);
  addBookButton.appendChild(addButtonLink);
  addBookButton.setAttribute("id", "add-book");

  //Cycle through myLibrary and load Books onto page

  library.appendChild(addBookButton);
  for(let bookNum = 0; bookNum < myLibrary.length; bookNum++) {

    let newBookData = document.createElement("div");
    let bookText = document.createElement("p");
    let readToggleButton = document.createElement("button");
    let deleteButton = document.createElement("button");
    let textDetails = document.createTextNode(myLibrary[bookNum].info());
    let redAttribute = Math.floor(Math.random() * 256) + 40;
    let greenAttribute = Math.floor(Math.random() * 256) + 40;
    let blueAttribute = Math.floor(Math.random() * 256) + 40;

    //Set the data-attribute for the book
    newBookData.dataset.index = bookNum;

    readToggleButton.innerHTML = "";
    readToggleButton.className = "toggle";
    deleteButton.innerHTML = "";
    deleteButton.className = "delete";
    readToggleButton.addEventListener("click", function(e) {
      let bookIndex = e.target.parentElement.getAttribute("data-index");
      //toggleRead(bookIndex);
      if(myLibrary[bookIndex].hasBeenRead == "Not Read Yet") {
        myLibrary[bookIndex].hasBeenRead = "Has Been Read";
        e.target.parentElement.childNodes[1].innerHTML = myLibrary[bookIndex].info();
      }
      else if(myLibrary[bookIndex].hasBeenRead == "Has Been Read") {
        myLibrary[bookIndex].hasBeenRead = "Not Read Yet";
        e.target.parentElement.childNodes[1].innerHTML = myLibrary[bookIndex].info();
      }
    });

    deleteButton.addEventListener("click", function(e) {
      let bookIndex = e.target.parentElement.getAttribute("data-index");
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
