import React from 'react';
import Dashboard from '../components/Dashboard';
import Contact from '../components/Contact';
import Card from '../components/Card';
import { useCart } from '../context/CartContext';
import './DashboardPage.css';

const DashboardPage = () => {
  const { addToCart, cartItems, getTotalPrice } = useCart();

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const sampleCards = [
    {
      title: 'Garden Design',
      description: 'Complete garden transformation with professional landscape design services tailored to your space and preferences.',
      icon: '🌿',
      price: 299,
      variant: 'featured',
      size: 'medium'
    },
    {
      title: 'Flower Planting',
      description: 'Seasonal flower planting and maintenance to keep your garden vibrant throughout the year.',
      icon: '🌸',
      price: 149,
      variant: 'default',
      size: 'medium'
    },
    {
      title: 'Garden Maintenance',
      description: 'Regular maintenance services including pruning, weeding, and plant care to keep your garden healthy.',
      icon: '🌱',
      price: 199,
      variant: 'default',
      size: 'medium'
    }
  ];

  return (
    <div className="dashboard-page">
      <Dashboard />
      
      <section className="showcase-section">
        <div className="container">
          <h2>Our Premium Services</h2>
          <div className="cards-grid">
            {sampleCards.map((card, index) => (
              <Card 
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
                price={card.price}
                variant={card.variant}
                size={card.size}
                onClick={() => console.log(`Clicked on ${card.title}`)}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
          {cartItems.length > 0 && (
            <div className="cart-summary">
              <h3>Cart Summary ({cartItems.length} items)</h3>
              <p>Total: ${getTotalPrice().toFixed(2)}</p>
            </div>
          )}
        </div>
      </section>
      
      <Contact />
    </div>
  );
};

export default DashboardPage;
