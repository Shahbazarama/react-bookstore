import React from 'react';

import BookContainer from './components/BookContainer.jsx'
import CartContainer from './components/CartContainer.jsx'
import SearchBar from './components/SearchBar.jsx'

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CartContainer />
        <BookContainer />
      </div>
    );
  }
}

export default App;
