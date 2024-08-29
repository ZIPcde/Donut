<template>
  <nav class="navbar">
    <ul class="navbar-links">
      <li>
        <router-link to="/" class="nav-link nav_link__holder"><div v-html="homeIcon"></div><p>Главная</p></router-link>
      </li>
      <li>
        <router-link to="/menu" class="nav-link nav_link__holder"><div v-html="menuIcon"></div><p>Меню</p></router-link>
      </li>
      <li>
        <router-link to="/delivery" class="nav-link nav_link__holder"><div v-html="delivIcon"></div><p>Доставка</p></router-link>
      </li>
      <li>
        <router-link to="/about" class="nav-link nav_link__holder"><div v-html="aboutIcon"></div><p>О нас</p></router-link>
      </li>
      <li>
        <router-link to="/contacts" class="nav-link nav_link__holder"><div v-html="contactsIcon"></div><p>Контакты</p></router-link>
      </li>
    </ul>
  </nav>
  <div class="navbar-logo">
    </div>
</template>

<script>
import { homeIcon, menuIcon, delivIcon, aboutIcon, contactsIcon } from '@/assets/images/icons/icons.js';

export default {
  name: 'NavBar',
  data() {
    return {
      homeIcon, menuIcon, delivIcon, aboutIcon, contactsIcon,
    }
  },
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-bottom: 1px solid #ddd;
}

.navbar-logo img {
  height: 50px;
}

.navbar-links {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navbar-links li {
  /* display: inline; */
}

.navbar-links a:hover {
  color: #ff6347;
}
</style>