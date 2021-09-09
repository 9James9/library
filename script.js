

function Book(title,author,pages,read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}
let myLibrary = []
function addBookToLibrary() {
    myLibrary.push(new Book("Title","Test",55,true))
    myLibrary.push(new Book("Title","Test",50,false))
    myLibrary.push(this.Book)
}


addBookToLibrary()
console.log(myLibrary)