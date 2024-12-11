<template>
  <div class="product-card">
    <img :src="imageURL" :alt="product.name" class="product-image" />
    <div class="product-info">
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <div v-if="showDetails" class="product-details">
        <p><strong>Вес:</strong> {{ product.weight }}</p>
        <p><strong>Калории:</strong> {{ product.calories }} ккал</p>
        <p><strong>Жиры:</strong> {{ product.fats }} г</p>
        <p><strong>Белки:</strong> {{ product.proteins }} г</p>
        <p><strong>Углеводы:</strong> {{ product.carbohydrates }} г</p>
        <p><strong>На 100 г:</strong></p>
        <p><strong>Калории:</strong> {{ (product.calories / (product.weight.replace(' г', '') / 100)).toFixed(2) }} ккал</p>
        <p><strong>Жиры:</strong> {{ (product.fats / (product.weight.replace(' г', '') / 100)).toFixed(2) }} г</p>
        <p><strong>Белки:</strong> {{ (product.proteins / (product.weight.replace(' г', '') / 100)).toFixed(2) }} г</p>
        <p><strong>Углеводы:</strong> {{ (product.carbohydrates / (product.weight.replace(' г', '') / 100)).toFixed(2) }} г</p>
      </div>
    </div>
    <button @click="toggleDetails">{{ showDetails ? 'Скрыть детали' : 'Показать детали' }}</button>
    <div class="product-bottom">
      <p class="product-price">{{ product.price }} ₽</p>
      <div v-if="localQuantity === 0">
        <button @click="addToOrder" class="add-button">Добавить в заказ</button>
      </div>
      <div v-else class="quantity-controls">
        <button @click="decreaseQuantity" class="quantity-button">-</button>
        <span class="quantity">{{ localQuantity }}</span>
        <button @click="increaseQuantity" class="quantity-button">+</button>
        <button @click="confirmOrder" class="confirm-button">Подтвердить</button>
      </div>
    </div>
  </div>
</template>

<script>
import config from '../config.js';

export default {
  name: 'ProductCard',
  props: {
    product: Object,
    quantity: Number,
  },
  data() {
    return {
      showDetails: false,
      localQuantity: this.quantity,
    };
  },
  computed: {
    imageURL() {
      return `${config.imageBaseURL}/${this.product.imagePath}`;
    },
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    addToOrder() {
      this.localQuantity = 1;
      this.$emit('add-to-order', this.product.id);
    },
    increaseQuantity() {
      this.localQuantity++;
    },
    decreaseQuantity() {
      if (this.localQuantity > 1) {
        this.localQuantity--;
      }
    },
    confirmOrder() {
      if (this.localQuantity > 0) {
        this.$emit('confirm-order', { productId: this.product.id, quantity: this.localQuantity });
      }
    },
  },
  watch: {
    quantity(newQuantity) {
      this.localQuantity = newQuantity;
    },
  },
};
</script>


  
  <style scoped>
  .product-card {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
    margin: 2px;
    padding: 16px;
    background-color: #fff;
  }
  
  .product-image {
    width: 100%;
    height: auto;
    overflow: hidden;
  }
  
  .product-info {
    padding: 16px;
  }
  
  .product-description {
    margin: 16px 0;
  }
  
  .product-details {
    margin: 16px 0;
    border-top: 1px solid #ddd;
    padding-top: 16px;
  }
  
  .product-bottom {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: end;
    margin-top: auto;
  }
  
  .product-price {
    font-weight: bold;
    
    font-size: 16px;
    color: #ff9800;
    margin-bottom: 10px;
  }
  
  .add-button, .quantity-button, .confirm-button {
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
  
  .quantity {
    font-size: 16px;
    padding: 0 10px;
    font-weight: bold;
  }
  
  .confirm-button {
    background-color: #4caf50;
    color: white;
    margin-left: 10px;
  }
  
  .confirm-button:hover {
    background-color: #45a049;
  }
  
  .quantity-button:hover {
    background-color: #e68900;
  }

  @media (max-width: 440px) {

  }
  </style>
  