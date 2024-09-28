// require('dotenv').config()

const searchInput = document.getElementById('search')
const button = document.getElementById('btn')
const books = document.getElementById('books')
// const addBook = document.querySelectorAll('.addBook')
const bookResults = document.querySelectorAll('.bookResults')

button.addEventListener('click', async () => {
  const input = searchInput.value
  const res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${input}`
  )
  const bookResults = res.data.items
  console.log(bookResults)

  bookResults.map((book) => {
    // create div for each book
    let div = document.createElement('div')
    books.appendChild(div)

    div.setAttribute('class', 'bookResults')

    // title and author
    let entry = document.createElement('h3')
    entry.innerText = `${book.volumeInfo.title} by ${
      book.volumeInfo.authors
        ? book.volumeInfo.authors[1]
          ? `${book.volumeInfo.authors[0]} and others`
          : book.volumeInfo.authors[0]
        : null
    }`

    // short description of book
    let snippet = document.createElement('p')
    snippet.innerText = book.searchInfo ? book.searchInfo.textSnippet : null

    // publication date
    let pubDate = document.createElement('p')
    pubDate.innerText = `Published on ${book.volumeInfo.publishedDate}`

    // create button for each book
    let button = document.createElement('button')
    button.setAttribute('class', 'addBook')
    button.innerText = 'Add to List'

    div.appendChild(entry)
    div.appendChild(snippet)
    div.appendChild(pubDate)
    div.appendChild(button)
  })
  addToList()
})

const addToList = () => {
  const addBook = document.querySelectorAll('.addBook')
  console.log(addBook)
  let array = []
  addBook.forEach((bookButton) => {
    bookButton.addEventListener('click', () => {
      array.push(bookButton.parentElement.innerHTML)
      // console.log(array)
      // console.log(bookButton.parentElement.innerHTML)
      localStorage.setItem('book', JSON.stringify(array))
      console.log(localStorage.getItem('book'))
    })
  })
}
