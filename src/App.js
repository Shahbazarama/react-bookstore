import React from 'react';

import BookContainer from './components/BookContainer.jsx'
import SearchBar from './components/SearchBar.jsx'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
        <BookContainer />
      </div>
    );
  }
}

export default App;
