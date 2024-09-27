// require('dotenv').config()

const searchInput = document.getElementById('search')
const button = document.getElementById('btn')
const books = document.getElementById('books')

button.addEventListener('click', async () => {
  const input = searchInput.value
  const res = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${input}`
  )
  const bookResults = res.data.items
  console.log(bookResults)

  bookResults.map((book) => {
    let entry = document.createElement('h3')
    entry.innerText = `${book.volumeInfo.title} by ${
      book.volumeInfo.authors[1]
        ? `${book.volumeInfo.authors[0]} and others`
        : book.volumeInfo.authors[0]
    }`
    return books.appendChild(entry)
  })
})
