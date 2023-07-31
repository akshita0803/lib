import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function SearchResults() {
  const { query } = useParams();
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Fetch data using Open Library API
    axios.get(`https://openlibrary.org/search.json?q=${query}`).then((response) => {
      setResults(response.data.docs);
    });
  }, [query]);

  return (
    <div>
      <h2>Search Results</h2>
      <ul>
        {results.map((book) => (
          <li key={book.key}>
            <a href={`/book/${book.key}`}>{book.title}</a> - {book.author_name?.join(', ')}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;