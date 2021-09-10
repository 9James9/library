class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
}

let myLibrary = []
//myLibrary.push(new Book('this is the title','author',69,false))
//myLibrary.push(new Book('second book','author',69,false))



function addBookToLibrary() {
    let title = document.getElementById('titleinput').value
    let author = document.getElementById('authorinput').value
    let pages = document.getElementById('pagesinput').value  
    let read = document.getElementById('radioform')
    read = (read.elements["read"].value)
    myLibrary.push(new Book(title,author,pages,read))
    console.log(myLibrary)
    let bookContainer = document.querySelector('#newbooks')
    //bookContainer.textContent = (`${title},${author},${pages},${read}`)
    //loop through myLibrary and display each book
    for (let i = 0; i < myLibrary.length; i++){
        
        let m = document.createElement('div')
        bookContainer.appendChild(m)
        m.textContent = `Title: ${myLibrary[i].title} Author: ${myLibrary[i].author} Pages: ${myLibrary[i].pages} Read: ${myLibrary[i].read}`
    }
    
    
}

let button = document.getElementById('addbook')
button.addEventListener('click', () => {
    addBookToLibrary()
})

