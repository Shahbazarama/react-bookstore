import React from 'react'

import CartContainer from './CartContainer.jsx'
import Bookshelf from './Bookshelf'

class BookContainer extends React.Component {

  constructor(props) {
      super(props)
      this.state = {
        books: [],
      }

      this.savedBooks = []
      this.cartBooks = []
      this.searchSort = this.searchSort.bind(this);
      this.sortByTitle = this.sortByTitle.bind(this);
      this.sortByAuthor = this.sortByAuthor.bind(this);
  }



  async componentDidMount() {
    try{
      const res = await fetch('http://localhost:8082/api/books')

      if(!res.ok) throw new Error()
      const books = await res.json()
      this.setState({
        books: books
      })
      this.savedBooks = this.state.books

    } catch (e) {
      alert(e)
    }
  }

  addBookToCart = async (id) => {
    try{
      await fetch(`http://localhost:8082/api/books/cart/add/${id}`, {
        method: 'PATCH'
      })

      let index = this.state.books.findIndex(book => book.id === id)

      this.cartBooks.push(this.state.books[index])

      this.forceUpdate()
    } catch(e) {
      alert(e)
    }

  }

  removeFromCart = async (id) => {
    try{
      await fetch(`http://localhost:8082/api/books/cart/remove/${id}`, {
        method: 'PATCH'
      })

      let cartIndex = this.cartBooks.findIndex(book => book.id === id)
      this.cartBooks.splice(cartIndex, 1)
      this.setState(prevState => ({
        books: prevState.books
      }))
    } catch(e) {
      alert(e)
    }
  }

  searchSort(e) {
    let allBooks = this.savedBooks
    let searchedBooks = allBooks.filter(book => book.title.toLowerCase().includes(e.target.value) === true)
    this.setState({
      books: searchedBooks
    })
  }

  sortByTitle(){
    let sortedBooks = this.state.books
    sortedBooks.sort((a, b) => a.title.localeCompare(b.title))
    this.setState({
      books: sortedBooks
    })
  }

  sortByAuthor(){
    let sortedBooks = this.state.books
    sortedBooks.sort((a, b) => a.author.localeCompare(b.author))
    this.setState({
      books: sortedBooks
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-8">
            <h1> Books </h1>
            <Bookshelf books={this.state.books} addBookToCart={this.addBookToCart} handleSearch={this.searchSort} sortByTitle={this.sortByTitle} sortByAuthor={this.sortByAuthor}/>
          </div>
          <div className="col-4">
            <CartContainer booksInCart={this.cartBooks} removeFromCart={this.removeFromCart}/>
          </div>
        </div>

      </div>

    )
  }
}

export default BookContainer
