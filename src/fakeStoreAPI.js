import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const getAllProducts = () => axios.get(`${BASE_URL}/products`);
export const getCategories = () => axios.get(`${BASE_URL}/products/categories`);
export const getProductsByCategory = (category) => axios.get(`${BASE_URL}/products/category/${category}`);
export const getProductById = (id) => axios.get(`${BASE_URL}/products/${id}`);
