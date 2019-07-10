import React from 'react'


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
        books: books.map(book => {
          return {
            ...book,
            inCart: 0
          }
        })
      })
    } catch (e) {
      alert(e)
    }
  }

  render() {
    return (
      <div>
        <h1>
          Books
        </h1>
        <ul>
          {this.state.books.map(book => {
            return (
              <li>
                {book.title}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default BookContainer
