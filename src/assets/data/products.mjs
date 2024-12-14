// products.js

import axios from 'axios';
import config from '../../config.js';

let products = []; // Пустой массив для хранения данных

// Функция для загрузки данных с сервера
const fetchProducts = async () => {
  try {
    // const response = await axios.get('http://localhost:3000/products');
    const response = await axios.get('/api/products');
    products = response.data.map(product => ({
      ...product,
    }));
  } catch (error) {
    console.error('Ошибка при загрузке продуктов:', error);
  }
};

// Немедленно вызываем функцию для загрузки данных
await fetchProducts();

// Экспорт массива продуктов
export default products;

console.log(products)