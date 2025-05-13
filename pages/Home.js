import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import Banner from '../components/Banner';
import PromoGrid from '../components/PromoGrid';
import Services from '../components/Services';
import './Home.css';

function Home() {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="main-layout">
      <Sidebar onSelectCategory={setSelectedCategory} />
      <div className="main-content">
        <Banner />
        <PromoGrid />
        <Services />
        <ProductList selectedCategory={selectedCategory} />
      </div>
    </div>
  );
}

export default Home;
