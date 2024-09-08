<!-- RegistrationPopup.vue -->

<template>
  <div v-if="isVisible" class="overlay">
    <div class="popup">
      <button class="close-button" @click="closePopup">&times;</button>
      <h2>Детали заказа</h2>
      <div class="form-group">
        <label for="name">Ваше имя:</label>
        <input type="text" id="name" v-model="name" />
      </div>
      <div class="form-group">
        <label for="phone">Номер телефона:</label>
        <input type="tel" id="phone" v-model="phone" />
      </div>

      <div class="order-options">
        <button
          class="option-button"
          :class="{ active: isPickup }"
          @click="selectPickup"
        >
          Заберу сам
        </button>
        <button
          class="option-button"
          :class="{ active: !isPickup }"
          @click="selectDelivery"
        >
          Заказать доставку
        </button>
      </div>

      <p v-if="!isPickup" class="delivery-info">
        Стоимость доставки по станице Крыловской - 100 рублей. При заказе от 1000 рублей - доставка бесплатно!
      </p>

      <div v-if="isPickup" class="form-group">
        <label for="visit-time">Время визита:</label>
        <input type="time" id="visit-time" v-model="visitTime" />
        <button
          class="reserve-button"
          :class="{ disabled: !isPickup }"
          :disabled="!isPickup"
        >
          Забронировать столик
        </button>
      </div>

      <button class="submit-button" @click="submitOrder">Отправить заказ</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderPopup',
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      name: '',
      phone: '',
      isPickup: false, // По умолчанию самовывоз не выбран
      visitTime: '',
    };
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
    selectPickup() {
      this.isPickup = true; // Активируем самовывоз
    },
    selectDelivery() {
      this.isPickup = false; // Активируем доставку
    },
    submitOrder() {
      const orderDetails = {
        name: this.name,
        phone: this.phone,
        deliveryMethod: this.isPickup ? 'pickup' : 'delivery',
        visitTime: this.isPickup ? this.visitTime : null,
      };
      console.log('Order submitted:', orderDetails);
      this.$emit('submit-order', orderDetails);
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
}

.popup {
  background-color: #fff;
  width: 400px;
  max-width: 90%;
  padding: 20px;
  border-radius: 8px;
  position: relative;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input {
  width: calc(100% - 10px);
  padding: 5px;
}

.order-options {
  display: flex;
  justify-content: space-around;
  margin-bottom: 15px;
}

.option-button {
  background-color: #ff9800;
  color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
  width: 45%;
  border-radius: 4px;
}

.option-button.active {
  background-color: #e68900;
}

.delivery-info {
  font-size: 12px;
  color: #666;
  text-align: center;
  margin-bottom: 15px;
}

.reserve-button {
  background-color: #ccc;
  color: white;
  padding: 10px;
  font-size: 14px;
  cursor: not-allowed;
  border: none;
  border-radius: 4px;
  margin-top: 10px;
}

.reserve-button.disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.reserve-button:not(.disabled) {
  background-color: #4caf50;
  cursor: pointer;
}

.submit-button {
  width: 100%;
  padding: 10px;
  background-color: #4caf50;
  border: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

.submit-button:hover {
  background-color: #45a049;
}
</style>
