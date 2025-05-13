import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/Productpage';
import CartPage from './pages/CartPage';
import SearchPage from './pages/SearchPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import Navbar from './components/Navbar';

function App() {
  return React.createElement(
    BrowserRouter,
    null,
    React.createElement(
      'div',
      null,
      React.createElement(Navbar),
      React.createElement(
        Routes,
        null,
        [
          React.createElement(Route, { path: '/', element: React.createElement(Home), key: 'home' }),
          React.createElement(Route, { path: '/product/:id', element: React.createElement(ProductPage), key: 'product' }),
          React.createElement(Route, { path: '/cart', element: React.createElement(CartPage), key: 'cart' }),
          React.createElement(Route, { path: '/search', element: React.createElement(SearchPage), key: 'search' }),
          React.createElement(Route, { path: '/login', element: React.createElement(LoginPage), key: 'login' }),
          React.createElement(Route, { path: '/signup', element: React.createElement(SignupPage), key: 'signup' })
        ]
      )
    )
  );
}

export default App;
