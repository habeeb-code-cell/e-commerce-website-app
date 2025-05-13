import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllProducts } from '../api/fakeStoreAPI';

function SearchPage() {
  const { search } = useLocation();
  const query = new URLSearchParams(search).get('q');
  const [results, setResults] = useState([]);

  useEffect(() => {
    getAllProducts().then(res => {
      const filtered = res.data.filter(p =>
        p.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
    });
  }, [query]);

  return (
    <div className="search-page">
      <h2>Search Results for: "{query}"</h2>
      <div className="product-list">
        {results.map(prod => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.title} />
            <h4>{prod.title}</h4>
            <p>${prod.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;
