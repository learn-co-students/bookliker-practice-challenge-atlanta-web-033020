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
    // parent.addEventListener('click', expandBook)
    response.forEach(function(book){
        bookLi = document.createElement('li')
        bookLi.addEventListener('click', expandBook)
        bookLi.innerText = book.title
        bookLi.img = book.img
        parent.appendChild(bookLi)
    })
}

function expandBook(book){
    parent = document.getElementById('show-panel')
    // parent.children.remove
    debugger;
    // bookImg = book.img
}