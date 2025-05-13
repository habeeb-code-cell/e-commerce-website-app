import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return React.createElement(
    'nav',
    { className: 'navbar' },
    React.createElement(
      'ul',
      null,
      [
        React.createElement('li', { key: 'home' }, React.createElement(Link, { to: '/' }, 'Home')),
        React.createElement('li', { key: 'product' }, React.createElement(Link, { to: '/product/1' }, 'Product')),
        React.createElement('li', { key: 'cart' }, React.createElement(Link, { to: '/cart' }, 'Cart')),
        React.createElement('li', { key: 'search' }, React.createElement(Link, { to: '/search' }, 'Search')),
        React.createElement('li', { key: 'login' }, React.createElement(Link, { to: '/login' }, 'Login')),
        React.createElement('li', { key: 'signup' }, React.createElement(Link, { to: '/signup' }, 'Signup')),
      ]
    )
  );
}

export default Navbar;
