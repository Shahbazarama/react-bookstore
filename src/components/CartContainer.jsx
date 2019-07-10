import React from 'react'

function CartContainer({booksInCart, removeFromCart}) {


  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {booksInCart.length > 0 ? booksInCart.map(book => {
          return (
            <li key={book.id}>
              <button className='btn btn-danger' onClick={() => removeFromCart(book.id)}>Remove from cart</button>
              {book.title}
            </li>
          )
        }) : <h2>empty cart</h2> }

      </ul>
    </div>
  )
}

export default CartContainer
