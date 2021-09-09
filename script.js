



let button = document.getElementById('addbook')

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
let myLibrary = []
function addBookToLibrary() {
    let title = document.getElementById('titleinput').value
    let author = document.getElementById('authorinput').value
    let pages = document.getElementById('pagesinput').value
    
    let read = document.getElementById('radioform')
    read = (read.elements["read"].value)
    myLibrary.push(new Book(title,author,pages,read))
    
}
button.addEventListener('click', () => {
    addBookToLibrary()
})

