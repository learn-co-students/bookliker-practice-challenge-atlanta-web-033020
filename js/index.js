const BASE_URL = 'http://localhost:3000/books'

document.addEventListener("DOMContentLoaded", init);

function init() {
  fetchBooks();
}

function fetchBooks() {
  fetch(BASE_URL)
    .then(response => response.json())
    .then(books => renderBooks(books));
}

function renderBooks(books) {
  const bookListContainer = document.querySelector('#list');

  books.forEach(book => renderBookListItem(book, bookListContainer));
}

function renderBookListItem(book, container) {
  const bookListItem = document.createElement('li');
  bookListItem.innerText = book.title;
  bookListItem.addEventListener('click', () => showBook(book));

  container.appendChild(bookListItem);
}

function showBook(book) {
  const bookShowContainer = document.querySelector('#show-panel');

  while (bookShowContainer.lastChild) {
    bookShowContainer.lastChild.remove();
  }

  const bookTitle = document.createElement('h2');
  bookTitle.innerText = book.title;

  const bookImage = document.createElement('img');
  bookImage.src = book.img_url;

  const bookDescription = document.createElement('p');
  bookDescription.innerText = book.description;

  const bookButton = document.createElement('button');
  bookButton.innerText = 'Read Book';
  bookButton.addEventListener('click', () => readBook(book))

  const bookReadersContainer = document.createElement('ul');
  book.users.forEach(user => {
    const userListItem = document.createElement('li');
    userListItem.innerText = user.username;
    bookReadersContainer.appendChild(userListItem);
  })

  bookShowContainer.append(bookTitle, bookImage, bookDescription, bookButton, bookReadersContainer);
}

function readBook(book) {
  users = book.users;

  currentUser = { id: 1, username: "pouros" };
  filteredUsers = users.filter(user => user.id === currentUser.id && user.username === currentUser.username)
  if (filteredUsers.length > 0) {
    users.splice(users.indexOf(filteredUsers[0]), 1);
  }
  else
    users.push(currentUser);

  bookObject = {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({
      users: users
    })
  }

  fetch(`${BASE_URL}/${book.id}`, bookObject)
    .then(response => response.json())
    .then(book => showBook(book));
}