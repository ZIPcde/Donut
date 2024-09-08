<!-- RegistrationPopup.vue -->

<template>
    <div v-if="isVisible" class="overlay">
      <div class="popup">
        <button class="close-button" @click="closePopup">&times;</button>
        <h2>Регистрация</h2>
        <div v-if="!isPhoneConfirmed">
          <div class="form-group">
            <label for="name">Имя:</label>
            <input type="text" id="name" v-model="name" />
          </div>
          <div class="form-group">
            <label for="phone">Номер телефона:</label>
            <input type="tel" id="phone" v-model="phone" />
          </div>
          <button @click="sendConfirmationCode">Подтвердить номер</button>
          <div v-if="isCodeSent" class="confirmation-section">
            <div class="form-group">
              <label for="code">Код подтверждения:</label>
              <input type="text" id="code" v-model="confirmationCode" />
            </div>
            <button @click="verifyConfirmationCode">Отправить</button>
          </div>
        </div>
        <div v-else>
          <p class="success-message">Номер подтверждён</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegistrationPopup',
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
        confirmationCode: '',
        isCodeSent: false,
        isPhoneConfirmed: false,
        generatedCode: '',
      };
    },
    methods: {
      closePopup() {
        this.$emit('close');
      },
      sendConfirmationCode() {
        if (this.phone) {
          // Здесь должен быть вызов API для отправки SMS с кодом
          // Для простоты генерируем код локально
          this.generatedCode = Math.floor(1000 + Math.random() * 9000).toString();
          console.log('Отправленный код:', this.generatedCode); // В реальном приложении код не выводится в консоль
          this.isCodeSent = true;
        } else {
          alert('Пожалуйста, введите номер телефона.');
        }
      },
      verifyConfirmationCode() {
        if (this.confirmationCode === this.generatedCode) {
          this.isPhoneConfirmed = true;
          // Здесь можно отправить данные пользователя на сервер для регистрации
        } else {
          alert('Неверный код подтверждения.');
        }
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
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #ff9800;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #e68900;
  }
  
  .confirmation-section {
    margin-top: 20px;
  }
  
  .success-message {
    font-size: 18px;
    color: green;
    text-align: center;
  }
  </style>
  