import React, { useState } from 'react';
import './Card.css';

const Card = ({ 
  title, 
  description, 
  image, 
  icon, 
  price, 
  badge,
  onClick,
  onAddToCart,
  variant = 'default',
  size = 'medium',
  features = []
}) => {
  const [isAdded, setIsAdded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setIsAdded(true);
    if (onAddToCart) {
      onAddToCart({ title, price, description, icon });
    }
    setTimeout(() => setIsAdded(false), 2000);
  };

  const cardClasses = `card card--${variant} card--${size} ${isHovered ? 'hovered' : ''}`;

  return (
    <div 
      className={cardClasses} 
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {image && (
        <div className="card__image">
          <img src={image} alt={title} />
          {badge && <span className="card__badge">{badge}</span>}
        </div>
      )}
      
      <div className="card__content">
        {icon && <div className="card__icon">{icon}</div>}
        
        <div className="card__header">
          <h3 className="card__title">{title}</h3>
          {price && (
            <div className="card__price">
              <span className="card__price-amount">${price}</span>
              <span className="card__price-period">/project</span>
            </div>
          )}
        </div>
        
        <p className="card__description">{description}</p>
        
        {features.length > 0 && (
          <ul className="card__features">
            {features.map((feature, index) => (
              <li key={index} className="card__feature">
                <span className="feature-check">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        )}
        
        <div className="card__actions">
          <button className="card__button" onClick={onClick}>
            Learn More
          </button>
          {price && (
            <button 
              className={`card__add-to-cart ${isAdded ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {isAdded ? 'Added!' : 'Add to Cart'}
            </button>
          )}
        </div>
      </div>
      
      {variant === 'featured' && (
        <div className="card__shine"></div>
      )}
    </div>
  );
};

export default Card;
