document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM loaded");
    getListOfBooks()
});

function getListOfBooks(){
    fetch('http://localhost:3000/books')
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        listTheBooks(response)
    })
}

function listTheBooks(response){
    parent = document.getElementById('list')
    response.forEach(function(book){
        bookLi = document.createElement('li')
        bookLi.innerText = book.title
        bookLi.addEventListener('click', (event) => {
            expandBook(book)
        })
        parent.appendChild(bookLi)
    })
}

function expandBook(book) {
    let parent = document.getElementById('show-panel')
    let title = document.createElement('h3')
    title.innerText = book.title
    let book_img = document.createElement('img')
    book_img.src = book.img_url
    let desc = document.createElement('p')
    desc.innerText = book.description
    parent.append(title, book_img, desc)
    let users = book.users;
    users.forEach(function(user){
        userUl = document.createElement('div')
        userUl.innerText = user.username
        parent.appendChild(userUl)
    })
    // create and add like button to page with listener for click
    likeBtn = document.createElement('btn')
    likeBtn.addEventListener('click', (event) => {
        likeBook(book)
    })
    likeBtn.innerText = 'Like'
    likeBtn.className = 'button'
    parent.appendChild(likeBtn)
}

function likeBook(book){
    fetch('http://localhost:3000/books/id')
    .then(function(response) {
        return response.json();
    })
    .then(function(response){
        listTheBooks(response)
    })
    console.log(book)
}