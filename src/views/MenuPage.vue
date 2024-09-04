<template>
  <div class="menu-page">
    <h1>Меню</h1>

    <div class="menu-content">
      <div class="menu-products">
        <!-- Секция с карточками продуктов -->
        <div v-for="category in categories" :key="category" class="menu-category">
          <h2>{{ category }}</h2>
          <div class="product-grid">
            <ProductCard
              v-for="product in getProductsByCategory(category)"
              :key="product.id"
              :product="product"
              :quantity="order[product.id] || 0"
              @add-to-order="addToOrder"
              @increase-quantity="increaseQuantity"
              @decrease-quantity="decreaseQuantity"
              @confirm-order="confirmOrder"
            />
          </div>
        </div>
      </div>

      <!-- Секция с обзором заказа -->
      <div class="menu-order">
        <OrderSummary
          :order="order"
          :products="products"
          @update-order="updateOrder"
          @remove-from-order="removeFromOrder"
        />
      </div>
    </div>
  </div>
</template>

<script>
import products from '@/assets/data/products.js';
import OrderSummary from '@/components/OrderSummary.vue';
import ProductCard from '@/components/ProductCard.vue'; // Импортируем компонент карточки товара

export default {
  name: 'MenuPage',
  components: {
    OrderSummary,
    ProductCard, // Добавляем компонент в список используемых
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
    addToOrder(product) {
      if (!this.order[product.id]) {
        this.order[product.id] = 1;
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
