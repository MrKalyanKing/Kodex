import React from 'react'
import Product from './Components/Products/Product'

const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    rating: 3,
    price: 2999,
    category: "Electronics",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/c/d/q/black-earbuds-with-premium-quality-sound-bluetooth-dssb-original-imahjdkxufkwjrw8.jpeg?q=70",
    description: "Comfortable wireless headphones with clear sound and water resistance."
  },
  {
    id: 2,
    name: "Smart Watch Series 5",
    price: 4999,
    rating: 4,
    category: "Electronics",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/smartwatch/m/q/u/-original-imahhybhenmujbcz.jpeg?q=70",
    description: "Feature-rich smartwatch with fitness tracking and sleek design."
  },
  {
    id: 3,
    name: "Men's Casual Sneakers",
    price: 1999,
    rating: 5,
    category: "Fashion",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/d/q/c/6-py-01-6-prayo-white-original-imahkusj2f7ugdpd.jpeg?q=70",
    description: "Stylish sneakers designed for comfort and everyday wear."
  },
  {
    id: 4,
    name: "Women's Handbag",
    price: 2499,
    rating: 3,
    category: "Fashion",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/hand-messenger-bag/l/7/t/monolltyramedium-satchel-25-hqge2127106n2-satchel-lavie-24-original-imahk55ya8vs5emb.jpeg?q=70",
    description: "Elegant handbag with spacious compartments for daily essentials."
  },
  {
    id: 5,
    name: "Gaming Mechanical Keyboard",
    price: 3499,
    rating: 4,
    category: "Electronics",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/keyboard/u/a/p/-original-imah9pzyjzt7gwpw.jpeg?q=70",
    description: "Durable mechanical keyboard with RGB lighting for gamers."
  },
  {
    id: 6,
    name: "Portable Bluetooth Speaker",
    price: 1799,
    rating: 5,
    category: "Electronics",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/speaker/n/g/u/-original-imahf78dfsvhnddf.jpeg?q=70",
    description: "Compact speaker with powerful sound and long battery life."
  },
  {
    id: 7,
    name: "Fitness Yoga Mat",
    price: 999,
    rating: 3,
    category: "Fitness",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/sport-mat/m/i/f/yoga-mat-for-men-women-kids-with-carry-strap-purple-4mm-4-62-original-imahjt2s7cr5yhgh.jpeg?q=70",
    description: "Non-slip yoga mat with comfortable cushioning for workouts."
  },
  {
    id: 8,
    name: "Stainless Steel Water Bottle",
    price: 699,
    rating: 2,
    category: "Home & Kitchen",
    image: "https://rukminim2.flixcart.com/image/612/612/xif0q/bottle/i/c/e/1000-durable-stylish-leak-proof-1-steel-black-slovic-original-imaheb836avdzqzx.jpeg?q=70",
    description: "Durable stainless steel bottle, leak-proof and easy to carry."
  }
];
const App = () => {
  return (
    <div>
      <Product  products={products}/>
    </div>
  )
}

export default App