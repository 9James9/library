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
myLibrary.push(new Book('Think and Grow Rich','Napoleon Hill',300,true))
myLibrary.push(new Book('Placeholder 2','Author2',500,false))

function addBookToLibrary() {
    let title = document.getElementById('titleinput').value
    let author = document.getElementById('authorinput').value
    let pages = document.getElementById('pagesinput').value  
    let read = document.getElementById('radioform')
    read = (read.elements["read"].value)
    
    //if one of the fields is empty, don't allow form to submit
    if (title == "" || author == "" || pages == "" || document.getElementById('choose_yes').checked == false && document.getElementById('choose_no').checked == false) {
        alert('Please fill out all fields')
        return false
    }
   
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
    //displayRead.textContent = val.read  
    let readBtn = document.createElement('button')
    readBtn.textContent = val.read
    displayRead.appendChild(readBtn)
    readBtn.addEventListener('click', () => {
        if (readBtn.textContent == 'true'){
            readBtn.textContent = 'false'
        } else if (readBtn.textContent == 'false'){
            readBtn.textContent = 'true'
        }
    })

    let deleteContainer = document.querySelector('#delete')
    let deleteThis = document.createElement('div')
    deleteContainer.appendChild(deleteThis)
    let deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteThis.appendChild(deleteBtn)
    deleteBtn.classList.add('deleteBtn')
    deleteBtn.addEventListener('click', () => {
        newTitle.removeChild(displayTitle)
        val.title = ''
        newAuthor.removeChild(displayAuthor)
        val.author = ''
        newPages.removeChild(displayPages)
        val.pages = ''
        newRead.removeChild(displayRead)
        val.read = ''
        deleteThis.removeChild(deleteBtn)
    })
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
        //displayRead.textContent = myLibrary[myLibrary.length-1].read
        
        let readBtn = document.createElement('button')
        readBtn.textContent = myLibrary[myLibrary.length-1].read
        displayRead.appendChild(readBtn)
        readBtn.classList.add(`read${myLibrary.length-1}`)
        readBtn.addEventListener('click', () => {
            if (readBtn.textContent == 'true'){
                readBtn.textContent = 'false'
            } else if (readBtn.textContent == 'false'){
                readBtn.textContent = 'true'
            }
        })
        let deleteContainer = document.querySelector('#delete')
        let deleteThis = document.createElement('div')
        deleteContainer.appendChild(deleteThis)
        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = "Delete"
        deleteThis.appendChild(deleteBtn)
        deleteBtn.classList.add('deleteBtn')
        deleteBtn.addEventListener('click', () => {
            newTitle.removeChild(displayTitle)
            myLibrary[myLibrary.length-1].title = ''
            newAuthor.removeChild(displayAuthor)
            myLibrary[myLibrary.length-1].author = ''
            newPages.removeChild(displayPages)
            myLibrary[myLibrary.length-1].pages = ''
            newRead.removeChild(displayRead)
            myLibrary[myLibrary.length-1].read = ''
            deleteThis.removeChild(deleteBtn)
        })
    }