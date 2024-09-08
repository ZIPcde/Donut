<!-- DeliveryPage.vue -->
<template>
  <div>
    <h1 class="h1 delivery_h1">Доставка</h1>
    <p class="h3 delivery_h3">Вы можете забрать заказ в нашем кафе, или заказать доставку в разделе "Меню" при оформлении заказа.</p>
    <div id="map" style="width: 90%; height: 400px;"></div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryPage',
  mounted() {
    // Динамическая загрузка Yandex Maps API
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    script.onload = () => {
      this.initMap();
    };
    document.head.appendChild(script);
  },
  methods: {
    initMap() {
      // eslint-disable-next-line no-undef
      ymaps.ready(() => {
        // eslint-disable-next-line no-undef
        const map = new ymaps.Map("map", {
          center: [46.32210153545988, 39.9730284410248], // Новые координаты
          zoom: 17,
        });

        // eslint-disable-next-line no-undef
        const placemark = new ymaps.Placemark([46.32210153545988, 39.9731284410248], {
          balloonContent: 'Наше кафе',
        });

        map.geoObjects.add(placemark);
      });
    }
  }
};
</script>

<style scoped>
#map {
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  border-radius: 4px;
  margin-bottom: 30px;
}

.delivery_h1 {
  text-align: center;
  margin-bottom: 20px;
}

.delivery_h3 {
  margin: 0 auto;
}
</style>
