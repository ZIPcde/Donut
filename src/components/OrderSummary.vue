<template>
  <div class="order-summary">
    <h2>Ваш заказ</h2>

    <div v-if="orderItems.length === 0" class="empty-order">
      <p>Ваш заказ пуст.</p>
    </div>

    <div v-else class="order-items">
      <div v-for="item in orderItems" :key="item.id" class="order-item">
        <div class="item-info">
          <span class="item-name">{{ item.name }}</span>
          <span class="item-price">{{ item.price }} руб.</span>
        </div>
        <div class="item-quantity">
          <button @click="decreaseQuantity(item.id)" class="quantity-button">-</button>
          <span class="quantity">{{ item.quantity }}</span>
          <button @click="increaseQuantity(item.id)" class="quantity-button">+</button>
        </div>
        <div class="item-total">
          <span>{{ item.price * item.quantity }} руб.</span>
        </div>
      </div>

      <!-- Отображаем общую стоимость -->
      <div class="order-total">
        <h3>Итого: {{ totalOrderPrice }} руб.</h3>
      </div>

      <!-- Кнопка оформления заказа -->
      <button class="checkout-button" @click="checkoutOrder">
        Оформить заказ
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderSummary',
  props: {
    order: Object, // Пропс с данными заказа
    products: Array, // Пропс с данными всех товаров
  },
  computed: {
    // Массив товаров в заказе с полной информацией о них
    orderItems() {
      return Object.keys(this.order).map(productId => {
        const product = this.products.find(p => p.id === Number(productId));
        return {
          ...product,
          quantity: this.order[productId],
        };
      });
    },
    // Общая стоимость заказа
    totalOrderPrice() {
      return this.orderItems.reduce((total, item) => total + item.price * item.quantity, 0);
    },
  },
  methods: {
    // Увеличиваем количество товара
    increaseQuantity(productId) {
      this.$emit('update-order', { productId, quantity: this.order[productId] + 1 });
    },
    // Уменьшаем количество товара
    decreaseQuantity(productId) {
      if (this.order[productId] > 1) {
        this.$emit('update-order', { productId, quantity: this.order[productId] - 1 });
      } else {
        this.$emit('remove-from-order', productId);
      }
    },
    // Оформление заказа
    checkoutOrder() {
      alert(`Ваш заказ на сумму ${this.totalOrderPrice} руб. оформлен!`);
    },
  },
};
</script>

<style scoped>
.order-summary {
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
}

.order-summary h2 {
  font-size: 22px;
  margin-bottom: 15px;
}

.empty-order {
  text-align: center;
  font-size: 18px;
  color: #666;
}

.order-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.order-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
}

.item-info {
  flex-grow: 1;
}

.item-name {
  font-size: 16px;
  font-weight: bold;
}

.item-price {
  font-size: 14px;
  color: #888;
}

.item-quantity {
  display: flex;
  align-items: center;
}

.quantity-button {
  background-color: #ff9800;
  color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  border-radius: 4px;
  font-size: 16px;
  margin: 0 5px;
}

.item-total {
  font-size: 16px;
  font-weight: bold;
}

.order-total {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  text-align: right;
}

.checkout-button {
  background-color: #4caf50;
  color: white;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 100%;
  margin-top: 20px;
}

.checkout-button:hover {
  background-color: #45a049;
}
</style>
