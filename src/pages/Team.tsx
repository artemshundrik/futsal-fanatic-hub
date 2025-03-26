
import React, { useState } from 'react';
import { Shirt, ShoppingCart } from 'lucide-react';

// Типи даних для фан-шопу
type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: 'jersey' | 'accessory' | 'souvenir';
  description: string;
  inStock: boolean;
};

// Зразкові дані продуктів
const products: Product[] = [
  {
    id: 1,
    name: 'Домашня футболка 2024',
    price: 1499,
    image: '/lovable-uploads/b11cb1ea-7d6b-4671-8716-7ac0f56dde06.png',
    category: 'jersey',
    description: 'Офіційна домашня футболка сезону 2024',
    inStock: true
  },
  {
    id: 2,
    name: 'Виїзна футболка 2024',
    price: 1499,
    image: '/lovable-uploads/90ccb9d8-0569-46cd-aa07-564bef7a710d.png',
    category: 'jersey',
    description: 'Офіційна виїзна футболка сезону 2024',
    inStock: true
  },
  {
    id: 3,
    name: 'Шарф вболівальника',
    price: 599,
    image: '/lovable-uploads/17be1360-bd35-40d1-bdcb-0597a6d6a8b4.png',
    category: 'accessory',
    description: 'Шарф з клубною символікою',
    inStock: true
  },
  {
    id: 4,
    name: 'Кепка з логотипом',
    price: 399,
    image: '/lovable-uploads/321cf6cb-1586-41e1-a5a5-3091882bf999.png',
    category: 'accessory',
    description: 'Стильна кепка з вишитим логотипом команди',
    inStock: true
  },
  {
    id: 5,
    name: 'Кружка "Файна"',
    price: 299,
    image: '/lovable-uploads/b1d04dd8-ab26-49f3-b97f-e41bdba49b25.png',
    category: 'souvenir',
    description: 'Кружка з логотипом команди',
    inStock: true
  },
  {
    id: 6,
    name: 'Футболка з номером',
    price: 1699,
    image: '/lovable-uploads/db5ef50d-8ab1-404b-a3ce-b0b22c55455c.png',
    category: 'jersey',
    description: 'Персоналізована футболка з вашим іменем та номером',
    inStock: false
  }
];

// Компонент продукту
const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center justify-center">
            <span className="text-white font-medium px-3 py-1 bg-team-accent rounded-md">
              Немає в наявності
            </span>
          </div>
        )}
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bebas tracking-wide text-team-primary">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-2">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="text-xl font-bebas text-team-accent">{product.price} ₴</span>
          <button 
            disabled={!product.inStock}
            className={`px-3 py-2 rounded-md flex items-center gap-1 ${
              product.inStock 
                ? 'bg-team-primary text-white hover:bg-team-accent transition-colors' 
                : 'bg-gray-200 text-gray-500 cursor-not-allowed'
            }`}
          >
            <ShoppingCart size={16} />
            {product.inStock ? 'Купити' : 'Нема'}
          </button>
        </div>
      </div>
    </div>
  );
};

const FanShop = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { code: 'jersey', name: 'Футболки', icon: <Shirt size={16} className="mr-2" /> },
    { code: 'accessory', name: 'Аксесуари', icon: null },
    { code: 'souvenir', name: 'Сувеніри', icon: null }
  ];

  const filteredProducts = selectedCategory
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <div className="animate-fade-in">
      {/* Банер Фан-шопу */}
      <section className="relative h-80 overflow-hidden">
        <img 
          src="/lovable-uploads/7ddcd836-4422-4254-8a68-5939ab823aea.png" 
          alt="Фан-шоп" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-team-primary/80 to-team-accent/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-6xl md:text-7xl text-white font-bebas tracking-wider">
            Фан-шоп
          </h1>
        </div>
      </section>
      
      <div className="page-container">
        {/* Фільтри по категоріям */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            className={`px-6 py-3 rounded-md font-bebas text-xl tracking-wide transition-all ${
              selectedCategory === null 
                ? 'bg-team-primary text-white' 
                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedCategory(null)}
          >
            Всі товари
          </button>
          
          {categories.map(cat => (
            <button
              key={cat.code}
              className={`px-6 py-3 rounded-md font-bebas text-xl tracking-wide transition-all flex items-center ${
                selectedCategory === cat.code 
                  ? 'bg-team-accent text-white' 
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedCategory(cat.code)}
            >
              {cat.icon}
              {cat.name}
            </button>
          ))}
        </div>
        
        {/* Показ товарів */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* Інформація про доставку */}
        <section className="mt-16 bg-team-light rounded-lg p-8">
          <h2 className="section-title mb-8 text-center">Доставка та оплата</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bebas text-xl text-team-primary mb-3">Доставка</h3>
              <p className="text-gray-700">Доставка замовлень здійснюється через Нову Пошту, УкрПошту та Meest Express по всій території України.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bebas text-xl text-team-primary mb-3">Оплата</h3>
              <p className="text-gray-700">Оплата замовлення можлива онлайн через картку або при отриманні товару (за умови накладеного платежу).</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-bebas text-xl text-team-primary mb-3">Контакти</h3>
              <p className="text-gray-700">Телефон: +380 (67) 123-45-67<br/>Email: fanshop@faynateam.com</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FanShop;
