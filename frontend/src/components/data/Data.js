
/* --- DATA FOR UI --- */
import tech1 from '../../assets/Image/tech/1.jpg';
import tech2 from '../../assets/Image/tech/2.jpg';
import tech3 from '../../assets/Image/tech/3.jpg';
import tech4 from '../../assets/Image/tech/4.jpg';
import tech5 from '../../assets/Image/tech/5.jpg';
import tech6 from '../../assets/Image/tech/6.jpg';
import interior1 from '../../assets/Image/interior/1.jpg';
import interior2 from '../../assets/Image/interior/2.jpg';
import interior3 from '../../assets/Image/interior/3.jpg';
import interior4 from '../../assets/Image/interior/4.jpg';
import interior5 from '../../assets/Image/interior/5.jpg';
import cloth1 from '../../assets/Image/cloth/1.jpg';
import cloth2 from '../../assets/Image/cloth/2.jpg';
import cloth3 from '../../assets/Image/cloth/3.jpg';
import cloth4 from '../../assets/Image/cloth/4.jpg';
import cloth5 from '../../assets/Image/cloth/5.jpg';
import cloth6 from '../../assets/Image/cloth/6.jpg';
import cloth7 from '../../assets/Image/cloth/7.jpg';
import service1 from '../../assets/Image/services/1.png';
import service2 from '../../assets/Image/services/2.png';
import service3 from '../../assets/Image/services/3.png';
import service4 from '../../assets/Image/services/4.png';
import country1 from '../../assets/Image/country/1.png';
import country2 from '../../assets/Image/country/2.png';
import country3 from '../../assets/Image/country/3.png';
import country4 from '../../assets/Image/country/4.png';
import country5 from '../../assets/Image/country/5.png';
import country6 from '../../assets/Image/country/6.png';
import country7 from '../../assets/Image/country/7.png';
import country8 from '../../assets/Image/country/8.png';
import country9 from '../../assets/Image/country/9.png';
import country10 from '../../assets/Image/country/10.png';
import { CreditCard, Search, Send, Shield, } from 'lucide-react';


const categories = [
  "Automobiles", "Clothes and wear", "Home Interiors", "Computer and tech",
  "Tools, equipments", "Sports and outdoor", "Animal and pets", "Machinery tools", "More category"
];

const deals = [
  { name: "Smart watches", discount: "-25%", img: tech1 },
  { name: "Laptops", discount: "-15%", img: tech2 },
  { name: "GoPro cameras", discount: "-40%", img: tech3 },
  { name: "Headphones", discount: "-25%", img: tech4 },
  { name: "Canon cameras", discount: "-25%", img: tech5 },
];

const recommended = [
  { id: 1, price: "$10.30", desc: "T-shirts with multiple colors, for men", img: cloth1 },
  { id: 2, price: "$10.30", desc: "Jeans shorts for men blue color", img: cloth2 },
  { id: 3, price: "$12.50", desc: "Brown winter coat medium size", img: cloth3 },
  { id: 4, price: "$34.00", desc: "Jeans bag for travel for men", img: cloth4 },
  { id: 5, price: "$99.00", desc: "Leather wallet", img: cloth5 },
  { id: 6, price: "$9.99", desc: "Canon camera black, 100x zoom", img: cloth6 },
  { id: 7, price: "$8.99", desc: "Headset for gaming with mic", img: cloth7 },
  { id: 8, price: "$10.30", desc: "Smartwatch silver color modern", img: cloth1 },
  { id: 9, price: "$10.30", desc: "Blue wallet for men leather material", img: cloth2 },
  { id: 10, price: "$80.95", desc: "Jeans bag for travel for men", img: cloth3 },
];

const decor = [
    {
        name: "Smart watche",
        price: "From USD 19",
        img: interior1
    },
    {
        name: "Cemeras",
        price: "From USD 19",
        img: interior2
    },
    {
        name: "Headphones",
        price: "From USD 19",
        img: interior3
    },
    {
        name: "Smart watches",
        price: "From USD 19",
        img: interior4
    },
    {
        name: "Gaming set",
        price: "From USD 19",
        img: interior5
    },
    {
        name: "Smart watches",
        price: "From USD 19",
        img: tech1
    },
    {
        name: "Laptops",
        price: "From USD 19",
        img: tech2
    },
    {
        name: "GoPro cameras",
        price: "From USD 19",
        img: tech3
    }
]

const electronics_gadgets = [
    {
        name: "Smart watches",
        price: "From USD 19",
        img: tech4
    },
    {
        name: "Cameras",
        price: "From USD 19",
        img: tech5
    },
    {
        name: "Headphones",
        price: "From USD 19",
        img: interior1
    },
    {
        name: "Smart watches",
        price: "From USD 19",
        img: interior2
    },
    {
        name: "Gaming set",
        price: "From USD 19",
        img: interior3
    },
    {
        name: "Smart watches",
        price: "From USD 19",
        img: interior4
    },
    {
        name: "Laptops",
        price: "From USD 19",
        img: interior5
    },
    {
        name: "GoPro cameras",
        price: "From USD 19",
        img: tech1
    }
]

const products = [
  {
    id: 1,
    image: tech1,
    title: 'Canon Cmera EOS 2000, Black 10x zoom',
    price: 998.00,
    oldPrice: 1128.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
  },
  {
    id: 2,
    image: tech2,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
  {
    id: 3,
    image: tech3,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
  {
    id: 4,
    image: tech4,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
  {
    id: 5,
    image: tech5,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998.00,
    oldPrice: 1128.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
    {
    id: 6,
    image: tech6,
    title: 'GoPro HERO6 4K Action Camera - Black',
    price: 998.00,
    rating: 7.5,
    orders: 154,
    freeShipping: true,
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit',
  },
];

const services = [
    {
        title: "Source from Industry Hubs",
        img: service1,
        icon: Search
    },
    {
        title: "Fast, reliable shipping by ocean or air",
        img: service2,
        icon: Send
    },
    {
        title: "Customize Your Products",
        img: service3,
        icon: CreditCard
    },
    {
        title: "Product monitoring and inspection",
        img: service4,
        icon: Shield
    }
]

const countries = [
  {
    name: "Arabic Emirates",
    domain: "shopname.ae",
    flag: country1,
  },
  {
    name: "Australia",
    domain: "shopname.ae",
    flag: country2,
  },
  {
    name: "United States",
    domain: "shopname.ae",
    flag: country3,
  },
  {
    name: "Russia",
    domain: "shopname.ru",
    flag: country4,
  },
  {
    name: "Italy",
    domain: "shopname.it",
    flag: country5,
  },
  {
    name: "Denmark",
    domain: "denmark.com.dk",
    flag: country6,
  },
  {
    name: "France",
    domain: "shopname.com.fr",
    flag: country7,
  },
  {
    name: "China",
    domain: "shopname.ae",
    flag: country8,
  },
  {
    name: "Great Britain",
    domain: "shopname.co.uk",
    flag: country9,
  },
  {
    name: "Germany",
    domain: "shopname.de",
    flag: country10,
  }
];

const productData = {
  id: 1,
  title: "Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle",
  rating: 9.3,
  reviews: 32,
  sold: 154,
  priceRange: "$98.00 - $129.95",
  originalPrice: null, // Not shown on desktop for this item
  bulkPricing: [
    { quantity: "50-100 pcs", price: "$98.00" },
    { quantity: "100-700 pcs", price: "$90.00" },
    { quantity: "700+ pcs", price: "$78.00" },
  ],
  description:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  specs: {
    Model: "#8786867",
    Style: "Classic style",
    Certificate: "ISO-898921212",
    Size: "34mm x 450mm x 19mm",
    Memory: "36GB RAM",
  },
  supplier: {
    name: "Guanjoi Trading LLC",
    location: "Germany, Berlin",
    verified: true,
    shipping: "Worldwide shipping",
  },
  images: [
    cloth1,
    cloth2,
    cloth3,
    cloth4,
    cloth5,
  ],
};

// Mock related products
const relatedProducts = [
  {
    id: 101,
    image: cloth1,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
  },
  {
    id: 102,
    image: cloth2,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
  },
  {
    id: 103,
    image: cloth3,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
  },
  {
    id: 104,
    image: cloth4,
    title: "Xiaomi Redmi 8 Original",
    price: "$32.00-$40.00",
  },
];


export { categories, deals, recommended, decor, electronics_gadgets, services, countries, products, productData, relatedProducts };