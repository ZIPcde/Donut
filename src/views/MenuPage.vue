<template>
  <div class="menu-page">
    <h1>Меню</h1>

    <!-- Перебираем категории и отображаем карточки товаров -->
    <div v-for="category in categories" :key="category" class="menu-category">
      <h2>{{ category }}</h2>
      <div class="product-grid">
        <div v-for="product in getProductsByCategory(category)" :key="product.id" class="product-card">
          <img :src="product.imagePath" :alt="product.name" class="product-image" />
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>{{ product.description }}</p>
            <p class="product-price">{{ product.price }} руб.</p>
          </div>

          <!-- Секция добавления в заказ -->
          <div class="order-actions">
            <button @click="addToOrder(product.id)" v-if="!isProductInOrder(product.id)" class="add-button">
              Добавить в заказ
            </button>
            <div v-else class="quantity-controls">
              <button @click="decreaseQuantity(product.id)" class="quantity-button">-</button>
              <span class="quantity">{{ getQuantity(product.id) }}</span>
              <button @click="increaseQuantity(product.id)" class="quantity-button">+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import products from '@/assets/data/products.js';

export default {
  name: 'MenuPage',
  data() {
    return {
      products, // Массив всех товаров
      order: {}, // Заказ, где ключ - id товара, значение - количество
    };
  },
  computed: {
    // Собираем уникальные категории товаров
    categories() {
      return [...new Set(this.products.map(product => product.category))];
    },
  },
  methods: {
    // Фильтруем товары по категориям
    getProductsByCategory(category) {
      return this.products.filter(product => product.category === category);
    },

    // Проверяем, добавлен ли продукт в заказ
    isProductInOrder(productId) {
      return this.order[productId] && this.order[productId] > 0;
    },

    // Получаем количество продукта в заказе
    getQuantity(productId) {
      return this.order[productId] || 0;
    },

    // Увеличиваем количество продукта
    increaseQuantity(productId) {
      if (this.order[productId]) {
        this.order[productId]++;
      }
    },

    // Уменьшаем количество продукта
    decreaseQuantity(productId) {
      if (this.order[productId] > 1) {
        this.order[productId]--;
      } else {
        delete this.order[productId]; // Удаляем продукт из заказа, если количество 0
      }
    },

    // Добавляем продукт в заказ
    addToOrder(productId) {
      if (!this.order[productId]) {
        this.order[productId] = 1; // Устанавливаем начальное количество 1
      }
    },
  },
};
</script>

<style scoped>
.menu-page {
  padding: 20px;
}

.menu-category {
  margin-bottom: 40px;
}

.menu-category h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.product-card {
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 220px;
  padding: 15px;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.product-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
}

.product-info h3 {
  font-size: 18px;
  margin: 10px 0 5px;
}

.product-info p {
  font-size: 14px;
  color: #555;
}

.product-price {
  font-weight: bold;
  margin-top: 10px;
  font-size: 16px;
  color: #ff9800;
}

/* Стили для кнопок добавления в заказ */
.order-actions {
  margin-top: 15px;
}

.add-button {
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
}

.add-button:hover {
  background-color: #e68900;
}

.quantity-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.quantity-button {
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 18px;
  cursor: pointer;
  border-radius: 4px;
}

.quantity {
  font-size: 16px;
  padding: 0 10px;
  font-weight: bold;
}

.quantity-button:hover {
  background-color: #e68900;
}
</style>
