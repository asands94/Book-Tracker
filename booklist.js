const books = document.querySelector('.bookList')
const bookList = localStorage.getItem('book')
const bookArray = JSON.parse(bookList)

bookArray.forEach((book) => {
  const div = document.createElement('div')
  div.setAttribute('class', 'bookResults')
  div.innerHTML = book
  const bookButton = document.querySelectorAll('.addBook')

  bookButton.forEach((button) => {
    console.log(button)
    button.removeAttribute('class')
    button.setAttribute('class', 'removeBook')
    button.innerText = 'Remove from List'
  })
  books.appendChild(div)
  //   books.appendChild(book)
})
