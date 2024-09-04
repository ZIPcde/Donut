<template>
  <div class="menu-page">
    <h1>Меню</h1>

    <div class="menu-content">
      <div class="menu-products">
        <!-- Секция с карточками продуктов -->
        <div v-for="category in categories" :key="category" class="menu-category">
          <h2>{{ category }}</h2>
          <div class="product-grid">
            <div v-for="product in getProductsByCategory(category)" :key="product.id" class="product-card">
              <img :src="product.imagePath" :alt="product.name" class="product-image" />
              <div class="product-info">
                <h3>{{ product.name }}</h3>
                <p>{{ product.description }}</p>
              </div>
              <div class="product-bottom">
                <p class="product-price">{{ product.price }} руб.</p>
                <div class="order-actions">
                  <button @click="addToOrder(product.id)" v-if="!isProductInOrder(product.id)" class="add-button">
                    Добавить в заказ
                  </button>
                  <div v-else class="quantity-controls">
                    <button @click="decreaseQuantity(product.id)" class="quantity-button">-</button>
                    <span class="quantity">{{ getQuantity(product.id) }}</span>
                    <button @click="increaseQuantity(product.id)" class="quantity-button">+</button>
                    <button @click="confirmOrder(product.id)" class="confirm-button">Подтвердить</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Секция с обзором заказа -->
      <div class="menu-order">
        <OrderSummary :order="order" :products="products" @update-order="updateOrder" @remove-from-order="removeFromOrder" />
      </div>
    </div>
  </div>
</template>

<script>
import products from '@/assets/data/products.js';
import OrderSummary from '@/components/OrderSummary.vue';

export default {
  name: 'MenuPage',
  components: {
    OrderSummary,
  },
  data() {
    return {
      products, // Список товаров
      order: {}, // Текущий заказ
    };
  },
  computed: {
    categories() {
      return [...new Set(this.products.map(product => product.category))];
    },
  },
  methods: {
    getProductsByCategory(category) {
      return this.products.filter(product => product.category === category);
    },
    isProductInOrder(productId) {
      return this.order[productId] && this.order[productId] > 0;
    },
    getQuantity(productId) {
      return this.order[productId] || 0;
    },
    addToOrder(productId) {
      if (!this.order[productId]) {
        this.order[productId] = 1;
      }
    },
    increaseQuantity(productId) {
      this.order[productId]++;
    },
    decreaseQuantity(productId) {
      if (this.order[productId] > 1) {
        this.order[productId]--;
      } else {
        delete this.order[productId];
      }
    },
    updateOrder({ productId, quantity }) {
      this.order[productId] = quantity;
    },
    removeFromOrder(productId) {
      delete this.order[productId];
    },
    confirmOrder(productId) {
      alert(`Вы добавили в заказ: ${this.getQuantity(productId)} шт. товара ${this.products.find(p => p.id === productId).name}`);
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
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Гарантируем, что нижний блок будет внизу */
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

/* Стили для нижней части карточки (цена и кнопки) */
.product-bottom {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Выровнять элементы по низу */
  margin-top: auto; /* Чтобы цена и кнопки всегда находились внизу */
}

.product-price {
  font-weight: bold;
  font-size: 16px;
  color: #ff9800;
  margin-bottom: 10px; /* Отступ перед кнопками */
}

/* Стили для кнопок добавления в заказ */
.order-actions {
  margin-top: 10px;
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

.confirm-button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 10px;
}

.confirm-button:hover {
  background-color: #45a049;
}

.quantity-button:hover {
  background-color: #e68900;
}

.menu-content {
  display: flex;
  gap: 20px;
}

.menu-products {
  flex: 2;
}

.menu-order {
  flex: 1;
}
</style>
