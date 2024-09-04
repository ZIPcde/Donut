<template>
    <div>
      <button @click="showPopup = true">Регистрация</button>
      <RegistrationPopup :isVisible="showPopup" @close="showPopup = false" />
    </div>
  </template>
  
  <script>
  import RegistrationPopup from '@/components/RegistrationPopup.vue';
  
  export default {
    components: {
      RegistrationPopup,
    },
    data() {
      return {
        showPopup: false,
      };
    },
  };
  </script>