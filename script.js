const bookList = document.querySelector(".book-list"); //select the empty div that WILL contain the info
const bookForm = document.querySelector(".book-form"); // select the form that contain inputs
const container = document.querySelector(".container");

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  addBook(book) {
    const row = document.createElement("tr"); // créer une row a chaque nouveau livre that contain the innerHtml
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.year}</td>
        <td><button class="delete">X</button></td>`;

    bookList.appendChild(row); // insert the new row into the booklist div
  }

  clearField() {
    document.getElementById("titre").value = "";
    document.getElementById("auteur").value = "";
    document.getElementById("sortie").value = "";
  }

  showAlert(message, className) {
    const alert = document.createElement("div");
    alert.className = `alert ${className}`;
    alert.appendChild(document.createElement(message));
    container.insertBefore(alert, bookForm);

    // setTimeout(() => {
    //   document.querySelector(".alert").remove();
    // }, 2000);
  }
}

bookForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("titre").value; // get the info in the input and stock it into a variable
  const author = document.getElementById("auteur").value;
  const year = document.getElementById("sortie").value;

  const book = new Book(title, author, year); // créate the Book instance with the inputs variables

  if (title === "" || author === "" || year === "") {
    // book.showAlert("Dude, what ?", "error");
    const image = document.createElement("img");
    image.src = "./mf.jpg";
    document.querySelector(".image").appendChild(image);
    container.insertBefore(image, bookForm);

    setTimeout(() => {
      document.querySelector("img").remove();
    }, 2000);
  } else {
    book.addBook(book);
    book.clearField();
    // book.showAlert("Mamèn !", "succes");
    const sucessImage = document.createElement("img");
    sucessImage.src = "./yes.jpg";
    document.querySelector(".image").appendChild(sucessImage);
    container.insertBefore(sucessImage, bookForm);
    setTimeout(() => {
      document.querySelector("img").remove();
    }, 2000);
  }
});

class Interface {
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
}
bookList.addEventListener("click", (e) => {
  // add an event on the booklist div that listen to the click and call the deleteBook method
  const ui = new Interface();
  ui.deleteBook(e.target);
});
