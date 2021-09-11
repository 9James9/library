class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
    info(){
        return `${this.title} by ${this.author}, pages: ${this.pages}, read? ${this.read}`
    }
}

let myLibrary = []
myLibrary.push(new Book('this is the title','author1',69,false))
myLibrary.push(new Book('second book','author2',420,true))

function addBookToLibrary() {
    let title = document.getElementById('titleinput').value
    let author = document.getElementById('authorinput').value
    let pages = document.getElementById('pagesinput').value  
    let read = document.getElementById('radioform')
    read = (read.elements["read"].value)
    myLibrary.push(new Book(title,author,pages,read))
    addNewest()
    document.getElementById('titleinput').value = ''
    document.getElementById('authorinput').value = ''
    document.getElementById('pagesinput').value = ''
    document.getElementById('choose_yes').checked = false
    document.getElementById('choose_no').checked = false
}

let button = document.getElementById('addbook')
button.addEventListener('click', () => {
    addBookToLibrary()
})

let refresh = document.querySelector('#refresh')
refresh.addEventListener('click', () => {
    document.getElementById('titleinput').value = ''
})
function displayCard(){
    

newTitle.appendChild(document.createElement('div'))


}

for (const val of myLibrary){
    let displayTitle = document.createElement('div')
    displayTitle.classList.add('displayTitle')
    newTitle.appendChild(displayTitle)
    displayTitle.textContent = val.title
    
    let displayAuthor = document.createElement('div')
    displayAuthor.classList.add('displayAuthor')
    newAuthor.appendChild(displayAuthor)
    displayAuthor.textContent = val.author

    let displayPages = document.createElement('div')
    displayPages.classList.add('displayPages')
    newPages.appendChild(displayPages)
    displayPages.textContent = val.pages

    let displayRead = document.createElement('div')
    displayRead.classList.add('displayRead')
    newRead.appendChild(displayRead)
    displayRead.textContent = val.read  
}


function addNewest(){
    
        let displayTitle = document.createElement('div')
        displayTitle.classList.add('displayTitle')
        newTitle.appendChild(displayTitle)
        displayTitle.textContent = myLibrary[myLibrary.length-1].title
        
        let displayAuthor = document.createElement('div')
        displayAuthor.classList.add('displayAuthor')
        newAuthor.appendChild(displayAuthor)
        displayAuthor.textContent = myLibrary[myLibrary.length-1].author
    
        let displayPages = document.createElement('div')
        displayPages.classList.add('displayPages')
        newPages.appendChild(displayPages)
        displayPages.textContent = myLibrary[myLibrary.length-1].pages
    
        let displayRead = document.createElement('div')
        displayRead.classList.add('displayRead')
        newRead.appendChild(displayRead)
        displayRead.textContent = myLibrary[myLibrary.length-1].read  
    
    }