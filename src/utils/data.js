import Card1 from '../assets/images/card1.png';
import Card2 from '../assets/images/card2.png';
import Card3 from '../assets/images/card3.png';
import Card4 from '../assets/images/card4.png';
import Card5 from '../assets/images/card5.jpg';

const data = [
  {
    id: 1,
    image: Card1,
    title: 'Pepperoni Pizza',
    description: 'Premium pepperoni and cheese is made with real mozzarella on original hand-tossed crust.',
    price: 23.90,
    priceOld: 29.90,
    icons: ['hot', 'wheat'],
    ingredients: ['Mozzarella', 'Pepperoni']
  },
  {
    id: 2,
    image: Card2,
    title: 'Tortellini',
    description: 'Pasta stuffed with beef and pork topped with your choice of cream sauce with bacon, bolognese or marinara sauce.',
    price: 17.90,
    priceOld: 22.90,
    icons: ['vege', 'hot', 'wheat'],
    ingredients: ['Beef', 'Pork', 'Cream sauce', 'Bacon', 'Bolognese/Marinara sauce']
  },
  {
    id: 3,
    image: Card3,
    title: 'Strawberry Cake',
    description: 'Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.',
    price: 13.90,
    priceOld: 18.90,
    icons: ['wheat'],
    ingredients: ['Strawberries', 'Pancakes', 'Sour Cream', 'Sugar']
  },
  {
    id: 4,
    image: Card4,
    title: 'Chef\'s Pizza',
    description: 'Home-made pizza from the chef\'s bakery on a fluffy dough. Secret ingredients of the boss will make you remember him for a long time.',
    price: 27.90,
    icons: ['hot', 'wheat'],
    ingredients: ['Mozzarella', 'A lot of secrets']
  },
  {
    dii: 4,
    image: Card5,
    title: 'Mama\'s Dough',
    description: 'Bake some love with our best of the best dough in Italy! It is like a drug. When you buy once, you keep coming back for more.',
    price: 8.90,
    priceOld: 10.90,
    icons: ['vege', 'wheat'],
    ingredients: ['Dough']
  }
];

export default data;
