import React from 'react'

import CartContainer from './CartContainer.jsx'
import Bookshelf from './Bookshelf'

class BookContainer extends React.Component {

  state = {
    books: [],
  }

  async componentDidMount() {
    try{
      const res = await fetch('http://localhost:8082/api/books')

      if(!res.ok) throw new Error()
      const books = await res.json()
      this.setState({
        books: books
      })

    } catch (e) {
      alert(e)
    }
  }

  addBookToCart = async (id) => {
    try{
      await fetch(`http://localhost:8082/api/books/cart/add/${id}`, {
        method: 'PATCH'
      })

      const res = await fetch('http://localhost:8082/api/books')
      if(!res.ok) throw new Error()
      const books = await res.json()
      this.setState({
        books: books
      })

    } catch(e) {
      alert(e)
    }

  }

  removeFromCart = async (id) => {
    try{
      await fetch(`http://localhost:8082/api/books/cart/remove/${id}`, {
        method: 'PATCH'
      })

      const res = await fetch('http://localhost:8082/api/books')

      if(!res.ok) throw new Error()
      const books = await res.json()
      this.setState({
        books: books
      })
    } catch(e) {
      alert(e)
    }

  }

  render() {
    const cartItems = this.state.books.filter(book => book.inCart === true)
    return (
      <div className="container">
        <div className="row">
          <div className="col-9">
            <h1> Books </h1>
            <Bookshelf books={this.state.books} addBookToCart={this.addBookToCart}/>
          </div>
          <div className="col-3">
            <CartContainer booksInCart={cartItems} removeFromCart={this.removeFromCart}/>
          </div>
        </div>

      </div>

    )
  }
}

export default BookContainer
