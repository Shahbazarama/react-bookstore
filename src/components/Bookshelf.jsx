import React from 'react'

function Bookshelf({ books, addBookToCart }){
  let sortedBooks = books.sort((a, b) => a.title.localeCompare(b.title))
  return (
    <div>
      <div>

      </div>
      <ul>
        {sortedBooks.map(book => {
          return (
            <li key={book.id}>
              <button className='btn btn-success' onClick={() => addBookToCart(book.id)}>Add to cart</button>
              {book.title} by <b>{book.author}</b>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Bookshelf
