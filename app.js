const wrapper = document.getElementById("wrapper");
console.log(wrapper);
const title = document.getElementsByClassName("title");
console.log(title);
console.log(Array.isArray(Array.from(title)))
let head = document.getElementsByTagName("header");
console.log(head);
const bookList = document.querySelector("#book-list")
console.log(bookList.textContent);
const bookListOne = document.querySelectorAll("#book-list ul li");
console.log(bookListOne[1].textContent);
// bookListOne.forEach(book => {
//     console.log(book.textContent);
// })



