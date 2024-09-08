<template>
  <div>
    
    
    <div class="h1_holder">
      <h1 class="h1">Donut bar</h1>
      <h2 class="h2">Добро пожаловать!</h2>
      <h3 class="h3">Дорогие друзья, мы рады приветствовать Вас на сайте нашего уютного кафе. Переходите в раздел "Меню" в верхней навигационной части экрана, выбирайте излюбленные лакомства, или пробуйте что-то новое, а мы сделаем всё в срок, со вкусом и с душой!</h3>

    </div>
    <ImageSlider />
    <div class="discription_holder"><img class="donut_logo" src="@/assets/logo.png" alt="Логотип" /><h3 class="h3">*Donut (по-русски "пончик") — это популярное кулинарное изделие, которое представляет собой сладкое тесто, обжаренное во фритюре. Донаты могут иметь различные формы, но наиболее распространённые варианты — это круглые пончики с отверстием посередине или без него.</h3></div>
  </div>
</template>

<script>
import ImageSlider from '@/components/ImageSlider.vue';

export default {
  components: {
    ImageSlider,
  },
  metaInfo: {
    title: 'Главная страница',
    meta: [
      { name: 'description', content: 'Описание главной страницы' },
      { property: 'og:title', content: 'Главная страница' }
    ]
  },
  name: 'HomePage'
}
</script>

<style scoped>
/* Стили для компонента */
</style>