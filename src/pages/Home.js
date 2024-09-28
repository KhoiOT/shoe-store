
import React from 'react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  // Dummy product data
  const products = [
    { id: '1', name: 'Sneaker 1', price: 100, image: 'https://via.placeholder.com/150' },
    { id: '2', name: 'Sneaker 2', price: 120, image: 'https://via.placeholder.com/150' },
  ];

  return (
    <div>
      <h1>Home Page</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
