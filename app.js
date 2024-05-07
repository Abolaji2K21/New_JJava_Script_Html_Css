// const wrapper = document.getElementById("wrapper");
// console.log(wrapper);
// const title = document.getElementsByClassName("title");
// console.log(title);
// console.log(Array.isArray(Array.from(title)))
// let head = document.getElementsByTagName("header");
// console.log(head);
// const bookList = document.querySelector("#book-list")
// console.log(bookList.textContent);
// const bookListOne = document.querySelectorAll("#book-list ul li .name");
// // console.log(bookListOne[1].textContent);
// console.log(bookListOne);
// bookListOne.forEach(book => {
//     book.textContent += "(test)"
//     // console.log(book.textContent);
// })
//
// const add_book = document.getElementById("add-book")
// console.log(add_book)
// const add_bookOne = document.querySelector("#add-book")
// console.log(add_bookOne.textContent);
// console.log(add_bookOne.lastElementChild.textContent);
// console.log(add_bookOne.parentElement);
// console.log(add_bookOne.previousElementSibling);
// console.log(add_bookOne.previousSibling);

const bookListOne = document.querySelector("#book-list ul ");
console.log(bookListOne);

bookListOne.addEventListener("click", (event) => {
    console.log(event);
    let classname = event.target.className;
    console.log(classname);
    if(Object.is(classname, "delete")){
        let li= event.target.parentElement;
        bookListOne.removeChild(li)
        }

})

const searchBook = document.forms["search-books"]
const listOfBooks= document.querySelectorAll("#book-list li .name")
// console.log(searchBook);
// console.log(listOfBooks);

searchBook.addEventListener("keyup", function (e){
    let inputText = e.target.value.toLowerCase()
    // console.log(inputText)
    listOfBooks.forEach((book) => {
        let title = book.textContent.toLowerCase()
        // console.log(title)
        let isInclude =title.includes(inputText)
        let parentNode = book.parentNode
        console.log(parentNode)
        if(isInclude){
            parentNode.style.display = "block"
        } else {
            parentNode.style.display = "none"
        }

    })

})

