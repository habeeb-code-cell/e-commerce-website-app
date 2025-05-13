import React from 'react';

function Home() {
  return React.createElement(
    'div',
    { className: 'home-page' },
    React.createElement('h1', null, 'Welcome to Best Market'),
    React.createElement('p', null, 'Explore our amazing products and enjoy your shopping!')
  );
}

export default Home;
