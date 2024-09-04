<template>
  <div class="slider_container">
    <img class="donut_logo" src="@/assets/logo.png" alt="Логотип" />
    <div class="slider">
      <!-- Отображаем слайды с учётом боковых изображений -->
      <img
        v-for="(product, index) in visibleSlides"
        :key="index"
        :src="product.imagePath"
        :alt="product.name"
        :class="[
          'slider_item',
          itemClasses[index]
        ]"
      />
    </div>
    <div class="pagination_holder">
      <div class="pagination">
        <div class="pagination_prev" @click="prevSlide"></div>
        <div
          v-for="(product, index) in sliderImages"
          :key="index"
          :class="`pagination_point${index + 1} ${index === currentIndex ? 'active' : ''}`"
          @click="goToSlide(index)"
        ></div>
        <div class="pagination_next" @click="nextSlide"></div>
      </div>
    </div>
  </div>
</template>

<script>
import products from '../assets/data/products.js';

export default {
  name: 'ImageSlider',
  data() {
    return {
      sliderImages: products.slice(0, 5),
      currentIndex: 0,
      visibleCount: 5, // Количество видимых изображений (центральное + два боковых с каждой стороны)
    };
  },
  computed: {
    visibleSlides() {
      // Получаем массив видимых слайдов с учётом боковых изображений
      const half = Math.floor(this.visibleCount / 2);
      const startIndex = (this.currentIndex - half + this.sliderImages.length) % this.sliderImages.length;
      const endIndex = (this.currentIndex + half + 1) % this.sliderImages.length;

      if (startIndex < endIndex) {
        return this.sliderImages.slice(startIndex, endIndex);
      } else {
        return [
          ...this.sliderImages.slice(startIndex),
          ...this.sliderImages.slice(0, endIndex),
        ];
      }
    },
    itemClasses() {
      return this.visibleSlides.map((_, index) => {
        switch (index) {
          case 0:
            return 'slider_item__-2';
          case 1:
            return 'slider_item__-1';
          case 2:
            return 'slider_item___0'; // Центральная картинка
          case 3:
            return 'slider_item__1';
          case 4:
            return 'slider_item__2';
          default:
            return '';
        }
      });
    },
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.sliderImages.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.sliderImages.length) % this.sliderImages.length;
    },
    goToSlide(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>

</style>
