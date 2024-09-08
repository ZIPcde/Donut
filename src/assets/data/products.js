// products.js

const products = [
  // Пирожные
  {
    id: 1,
    category: 'Пирожные',
    name: 'Шоколадное пирожное',
    price: 150,
    imagePath: require('../images/chocolate_cake.jpg'),
    description: 'Нежное шоколадное пирожное с насыщенным вкусом какао и мягким бисквитом.',
    weight: '120 г',
    calories: 400,
    fats: 22,
    proteins: 5,
    carbohydrates: 50,
  },
  {
    id: 2,
    category: 'Пирожные',
    name: 'Фруктовое пирожное',
    price: 130,
    imagePath: require('../images/fruit_cake.jpg'),
    description: 'Свежие фрукты на легком бисквите, идеально для летнего дня.',
    weight: '110 г',
    calories: 350,
    fats: 18,
    proteins: 4,
    carbohydrates: 45,
  },
  {
    id: 3,
    category: 'Пирожные',
    name: 'Тирамису',
    price: 180,
    imagePath: require('../images/tiramisu.jpg'),
    description: 'Классический итальянский десерт с маскарпоне, кофе и какао.',
    weight: '150 г',
    calories: 450,
    fats: 25,
    proteins: 6,
    carbohydrates: 55,
  },

  // Кофе
  {
    id: 4,
    category: 'Кофе',
    name: 'Эспрессо',
    price: 100,
    imagePath: require('../images/espresso.jpg'),
    description: 'Крепкий и бодрящий эспрессо из отборных кофейных зерен.',
    weight: '30 мл',
    calories: 5,
    fats: 0,
    proteins: 0,
    carbohydrates: 0,
  },
  {
    id: 5,
    category: 'Кофе',
    name: 'Капучино',
    price: 140,
    imagePath: require('../images/cappuccino.jpg'),
    description: 'Кофе с молоком и воздушной пенкой, сбалансированный вкус.',
    weight: '250 мл',
    calories: 80,
    fats: 4,
    proteins: 4,
    carbohydrates: 10,
  },
  {
    id: 6,
    category: 'Кофе',
    name: 'Латте',
    price: 150,
    imagePath: require('../images/latte.jpg'),
    description: 'Нежный кофе с большим количеством молока и мягким вкусом.',
    weight: '250 мл',
    calories: 100,
    fats: 5,
    proteins: 5,
    carbohydrates: 12,
  },

  // Чай
  {
    id: 7,
    category: 'Чай',
    name: 'Черный чай',
    price: 80,
    imagePath: require('../images/black_tea.jpg'),
    description: 'Классический черный чай с глубоким насыщенным вкусом.',
    weight: '250 мл',
    calories: 2,
    fats: 0,
    proteins: 0,
    carbohydrates: 0,
  },
  {
    id: 8,
    category: 'Чай',
    name: 'Зеленый чай',
    price: 90,
    imagePath: require('../images/green_tea.jpg'),
    description: 'Освежающий зеленый чай с нотками свежести и легкой горечи.',
    weight: '250 мл',
    calories: 3,
    fats: 0,
    proteins: 0,
    carbohydrates: 0,
  },
  {
    id: 9,
    category: 'Чай',
    name: 'Травяной чай',
    price: 100,
    imagePath: require('../images/herbal_tea.jpg'),
    description: 'Ароматный травяной чай с мягким успокаивающим эффектом.',
    weight: '250 мл',
    calories: 5,
    fats: 0,
    proteins: 0,
    carbohydrates: 0,
  },

  // Пончики
  {
    id: 10,
    category: 'Пончики',
    name: 'Пончик с шоколадом',
    price: 70,
    imagePath: require('../images/chocolate_donut.jpg'),
    description: 'Мягкий пончик с шоколадной глазурью и сочной начинкой.',
    weight: '80 г',
    calories: 300,
    fats: 15,
    proteins: 4,
    carbohydrates: 35,
  },
  {
    id: 11,
    category: 'Пончики',
    name: 'Пончик с клубникой',
    price: 75,
    imagePath: require('../images/strawberry_donut.jpg'),
    description: 'Пончик с клубничной глазурью и свежей ягодной начинкой.',
    weight: '85 г',
    calories: 320,
    fats: 16,
    proteins: 4,
    carbohydrates: 38,
  },
  {
    id: 12,
    category: 'Пончики',
    name: 'Пончик с ванилью',
    price: 70,
    imagePath: require('../images/vanilla_donut.jpg'),
    description: 'Классический пончик с ванильной глазурью и мягким тестом.',
    weight: '80 г',
    calories: 310,
    fats: 15,
    proteins: 4,
    carbohydrates: 36,
  },

  // Пицца
  {
    id: 13,
    category: 'Пицца',
    name: 'Маргарита',
    price: 350,
    imagePath: require('../images/margherita_pizza.jpg'),
    description: 'Классическая пицца с томатным соусом, моцареллой и свежим базиликом.',
    weight: '300 г',
    calories: 800,
    fats: 35,
    proteins: 40,
    carbohydrates: 85,
  },
  {
    id: 14,
    category: 'Пицца',
    name: 'Пепперони',
    price: 400,
    imagePath: require('../images/pepperoni_pizza.jpg'),
    description: 'Пицца с пикантной колбасой пепперони и моцареллой на хрустящей корочке.',
    weight: '300 г',
    calories: 900,
    fats: 40,
    proteins: 45,
    carbohydrates: 90,
  },
  {
    id: 15,
    category: 'Пицца',
    name: 'Гавайская',
    price: 380,
    imagePath: require('../images/hawaiian_pizza.jpg'),
    description: 'Сочетание ананаса, ветчины и моцареллы на тонком тесте.',
    weight: '300 г',
    calories: 850,
    fats: 38,
    proteins: 42,
    carbohydrates: 85,
  },

  // Закуски
  {
    id: 16,
    category: 'Закуски',
    name: 'Картофель фри',
    price: 120,
    imagePath: require('../images/french_fries.jpg'),
    description: 'Хрустящий картофель фри, обжаренный до золотистой корочки.',
    weight: '150 г',
    calories: 450,
    fats: 25,
    proteins: 6,
    carbohydrates: 50,
  },
  {
    id: 17,
    category: 'Закуски',
    name: 'Луковые кольца',
    price: 110,
    imagePath: require('../images/onion_rings.jpg'),
    description: 'Нежные луковые кольца, обжаренные в хрустящем кляре.',
    weight: '150 г',
    calories: 420,
    fats: 22,
    proteins: 5,
    carbohydrates: 50,
  },
  {
    id: 18,
    category: 'Закуски',
    name: 'Моцарелла стики',
    price: 130,
    imagePath: require('../images/mozzarella_sticks.jpg'),
    description: 'Тянущиеся палочки моцареллы в хрустящей панировке.',
    weight: '150 г',
    calories: 500,
    fats: 28,
    proteins: 18,
    carbohydrates: 40,
  },
];

export default products;
