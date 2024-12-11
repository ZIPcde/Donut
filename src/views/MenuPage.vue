<!-- MenuPage.vue -->

<template>
  <div class="menu-page">
    <div class="menu-order_holder">
      <h1 class="h1">Меню</h1>
      <div class="menu-order">
        <OrderSummary
          :order="order"
          :products="products"
          @update-order="updateOrder"
          @remove-from-order="removeFromOrder"
          @checkout="openOrderPopup"
        />
      </div>
    </div>
    <div class="menu-content">
      <div class="menu-products">
        <div v-for="category in categories" :key="category" class="menu-category">
          <h2 class="h2">{{ category }}</h2>
          <div class="product-grid_holder">
            <div class="product-grid">
              <ProductCard
                v-for="product in getProductsByCategory(category)"
                :key="product.id"
                :product="product"
                :quantity="getQuantityFromStore(product.id)"
                @add-to-order="addToOrder"
                @increase-quantity="increaseQuantity"
                @decrease-quantity="decreaseQuantity"
                @confirm-order="confirmOrder"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Всплывающее окно для заказа -->
    <OrderPopup
    :isVisible="isOrderPopupVisible"
      :items="orderItems"
      :totalAmount="totalOrderPrice"
      @close="closeOrderPopup"
      @submit-order="handleOrderSubmission"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import products from '@/assets/data/products.mjs';
import OrderSummary from '@/components/OrderSummary.vue';
import ProductCard from '@/components/ProductCard.vue';
import OrderPopup from '@/components/OrderPopup.vue';

export default {
  name: 'MenuPage',
  components: {
    OrderSummary,
    ProductCard,
    OrderPopup,
  },
  data() {
    return {
      products,
      isOrderPopupVisible: false,
    };
  },
  computed: {
    ...mapState('cart', {
      order: (state) => state.order || {},
    }),
    categories() {
      return [...new Set(this.products.map(product => product.category))];
    },
    orderItems() {
      return Object.keys(this.order).map(productId => {
        const product = this.products.find(p => p.id === Number(productId));
        return {
          ...product,
          quantity: this.order[productId],
        };
      });
    },
    totalOrderPrice() {
      return this.orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    ...mapActions('cart', {
      addToOrder: 'addToOrder',
      increaseQuantity: 'increaseQuantity',
      decreaseQuantity: 'decreaseQuantity',
      updateOrder: 'updateOrder',
      removeFromOrder: 'removeFromOrder',
    }),
    getProductsByCategory(category) {
      return this.products.filter(product => product.category === category);
    },
    getQuantityFromStore(productId) {
      return this.order[productId] || 0;
    },
    confirmOrder({ productId, quantity }) {
      this.updateOrder({ productId, quantity });
    },
    openOrderPopup() {
      this.isOrderPopupVisible = true;
    },
    closeOrderPopup() {
      this.isOrderPopupVisible = false;
    },
    handleOrderSubmission(orderDetails) {
      console.log('Order details submitted:', orderDetails);
      this.closeOrderPopup();
    },
  },
};
</script>




<style scoped>
/* Стили остались без изменений */
.menu-page {
  padding: 20px;
}

.menu-order_holder {
  justify-content: center;
}

.menu-category {
  margin-bottom: 40px;
}

.menu-category h2 {
  font-size: 24px;
  margin-bottom: 20px;
}

.menu-content {
  display: flex;
  gap: 20px;
}

.menu-products {
  flex: 2;
}

.menu-order {
  display: flex;
  width: 100%;
  flex: 1;
  justify-content: center;
}

.product-grid_holder {
  display: flex;
  justify-content: center;
}

.product-grid {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

@media (min-width: 1200px) {
  .product-card {
    flex: 1 1 calc(33% - 40px);
  }
}

@media (min-width: 768px) and (max-width: 1199px) {
  .product-card {
    max-width: 45%;
    flex: 1 1 calc(50% - 40px);
  }
}

@media (max-width: 767px) {
  .product-card {
    flex: 1 1 calc(100% - 20px);
  }

  .menu-category h2 {
    font-size: 4vw;
    margin-bottom: 20px;
    color: #ffffff;
    text-shadow: -1px -1px 0 #413b76, 1px -1px 0 #413b76, -1px 1px 0 #413b76, 1px 1px 0 #413b76;
  }
}
</style>
