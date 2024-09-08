<!-- ParentComponentReg.vue -->

<template>
    <div>
      <button @click="showPopup = true">Регистрация</button>
      <RegistrationPopup :isVisible="showPopup" @close="showPopup = false" />
    </div>
  </template>
  
  <script>
  import RegistrationPopup from '@/components/OrderPopup.vue';
  
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