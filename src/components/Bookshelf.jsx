import React from 'react'

function Bookshelf({ books, addBookToCart }){
  return (
    <div>
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>
              <button className='btn btn-success' onClick={() => addBookToCart(book.id)}>Add to cart</button>
              {book.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Bookshelf
