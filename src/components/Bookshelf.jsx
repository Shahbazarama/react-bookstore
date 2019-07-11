import React from 'react'
//import SearchBar from './SearchBar.jsx'


function Bookshelf({ books, addBookToCart, handleSearch, sortByTitle, sortByAuthor }) {

  return (
    <div>
      <div className="container">
        <input onChange={(e) => handleSearch(e)} className="form-control" placeholder="Search for a book title" type="text"></input>
      </div>
      <button onClick={() => sortByTitle()}>Sort By Title</button>
      <button onClick={() => sortByAuthor()}>Sort By Author</button>

      <ul className="list-group">
        {books.map(book => {
          return (
            <li className="list-group-item" key={book.id}>
              {book.title} by <b>{book.author}</b>
              <button className='btn btn-success float-right' onClick={() => addBookToCart(book.id)}>Add to cart</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Bookshelf
