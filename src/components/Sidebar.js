import React, { useEffect, useState } from 'react';
import { getCategories } from '../api/fakeStoreAPI';
import './Sidebar.css';

function Sidebar({ onSelectCategory }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then(res => setCategories(res.data));
  }, []);

  return (
    <div className="sidebar">
      <h3>Category Menu</h3>
      <ul>
        {categories.map((cat, idx) => (
          <li key={idx} onClick={() => onSelectCategory(cat)}>
            <i className="fas fa-tag"></i> {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
