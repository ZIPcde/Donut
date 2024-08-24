<template>
  <nav class="navbar">
    <div class="navbar-logo">
      <img src="@/assets/logo.png" alt="Логотип" />
    </div>
    <ul class="navbar-links">
      <li><a href="#menu">Меню</a></li>
      <li><a href="#delivery">Доставка</a></li>
      <li><a href="#about">О нас</a></li>
      <li><a href="#contacts">Контакты</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavBar'
}
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #fff;
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
  display: inline;
}

.navbar-links a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.navbar-links a:hover {
  color: #ff6347;
}
</style>