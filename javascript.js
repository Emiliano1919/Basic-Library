/* Objects */
function Book(title, author, pages, read=false) {
    this.title = title ? title : 'Unknown';
    this.author = author ? author : 'Unknown';
    this.pages = pages ? pages : 0;
    this.read = read;
}

function Library(){
    this.books=[];
}

const library = new Library();

const bookBoxes = document.querySelector(".books");

const showBook = (book) => {
    const bookBox = document.createElement('div')
    const title = document.createElement('p')
    const author = document.createElement('p')
    const pages = document.createElement('p')
    const readQ = document.createElement('div')
  
    bookBox.classList.add('box')
  
    title.textContent = `"${book.title}"`
    author.textContent = book.author
    pages.textContent = `${book.pages} pages`
  
    if (book.isRead) {
      readQ.textContent = 'Read'
      readQ.classList.add('green')
    } else {
      readQ.textContent = 'Not read'
      readQ.classList.add('red')
    }
  
    bookBox.appendChild(title)
    bookBox.appendChild(author)
    bookBox.appendChild(pages)
    bookBox.appendChild(readQ)
    bookBoxes.appendChild(bookBox)
};
  
  const getBookFromInput = () => {
    const title = document.getElementById('title').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value
    const isRead = document.querySelector("#read").checked
    return new Book(title, author, pages, isRead)
  };


Library.prototype.addBook=function(newBook) {
    if (!this.isInLibrary(newBook)) {
      this.books.push(newBook)
    }
};

Library.prototype.removeBook= function(title) {
    this.books = this.books.filter((book) => book.title !== title)
};

Library.prototype.getBook=function(title) {
    return this.books.find((book) => book.title === title)
};

Library.prototype.isInLibrary= function(newBook) {
    return this.books.some((book) => book.title === newBook.title)
};

let btn = document.querySelector("#btn");
let modal = document.querySelector("#modal");
let closing = document.querySelector(".close-modal");
let submit = document.querySelector("#submit");

btn.addEventListener('click', () => {
    modal.classList.add('opened');
});

closing.addEventListener('click', () => {
    modal.classList.remove('opened');
});

submit.addEventListener('click', () => {
    const newBook = getBookFromInput();
    library.addBook(newBook);
    showBook(newBook);
    modal.classList.remove('opened');
    console.log(library);
});