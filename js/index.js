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
    // books = Array.from(response)
    parent = document.getElementById('list')
    parent.addEventListener('click', expandBook)
    response.forEach(function(book){
        bookLi = document.createElement('li')
        // bookLi.addEventListener('click', expandBook)
        bookLi.innerText = book.title
        bookLi.dataset.img_url = book.img_url
        bookLi.dataset.title = book.title
        bookLi.dataset.desc = book.description
        // bookLi.dataset.users = Array.from(book.users)
        bookLi.dataset.users = JSON.stringify(book.users)
        // debugger;
        parent.appendChild(bookLi)
    })
}

function expandBook(book){
    parent = document.getElementById('show-panel')
    title = document.createElement('h3')
    title.innerText = book.target.dataset.title
    book_img = document.createElement('img')
    book_img.src = book.target.dataset.img_url
    desc = document.createElement('p')
    desc.innerText = book.target.dataset.desc
    parent.append(title, book_img, desc)
    users = JSON.parse(book.target.dataset.users)
    users.forEach(function(user){
        userLi = document.createElement('li')
        userLi.innerText = user.username
        parent.appendChild(userLi)
    })
}