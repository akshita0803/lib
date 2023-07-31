import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import BookDetails from './BookDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={SearchBar} />
        <Route exact path="/search/:query" component={SearchResults} />
        <Route exact path="/book/:bookId" component={BookDetails} />
      </Routes>
    </Router>
  );
}

export default App;