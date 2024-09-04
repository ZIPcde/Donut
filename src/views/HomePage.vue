<template>
  <div>
    <div class="discription_holder"><img class="donut_logo" src="@/assets/logo.png" alt="Логотип" /><h3>*Donut (по-русски "пончик") — это популярное кулинарное изделие, которое представляет собой сладкое тесто, обжаренное во фритюре. Донаты могут иметь различные формы, но наиболее распространённые варианты — это круглые пончики с отверстием посередине или без него.</h3></div>
    
    <div class="h1_holder">
      <h1 class="h1">Donut bar</h1>
      <h2 class="h2">Добро пожаловать!</h2>
    </div>
    <ImageSlider />
    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
    <p>9</p>
    <p>10</p>
    <p>11</p>
    <p>12</p>
    <p>13</p>
    <p>14</p>
    <p>15</p>
    <p>16</p>
    <p>17</p>
    <p>18</p>
    <p>19</p>
    <p>20</p>
    <p>21</p>
    <p>22</p>
    <p>23</p>
    <p>24</p>
    <p>25</p>
    <p>26</p>
    <p>27</p>
    <p>28</p>
    <p>29</p>
    <p>30</p>
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