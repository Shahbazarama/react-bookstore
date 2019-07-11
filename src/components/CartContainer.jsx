import React from 'react'

function CartContainer({booksInCart, removeFromCart}) {

  return (
    <div>
      <h1>Cart</h1>
      <ul className="list-group">
        {booksInCart.length > 0 ? booksInCart.map(book => {
          return (
            <li className="list-group-item" key={book.id}>
              {book.title}
            </li>
          )
        })
         : <h2>is empty</h2> }

      </ul>
      <h2><u>Total Cost</u>: ${booksInCart.reduce((acc, currentValue) => {
        return acc + currentValue.price
      }, 0)}</h2>
    </div>
  )
}

export default CartContainer
