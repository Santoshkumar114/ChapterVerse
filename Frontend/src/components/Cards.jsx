import React from 'react';
import './card.css';

function Cards({ item }) {
  const handleCardClick = () => {
    window.location.href = `/product/${item.id}`; 
  };

  const handleBuyNowClick = (e) => {
    e.stopPropagation(); 
    alert('Buy Now clicked!');
  };

  return (
    <div className="card" onClick={handleCardClick}>
      <img src={item.image} alt={item.name} />
      <div className="card-content">
        <div className="card-title">{item.name}</div>
        <div className="card-price-buy">
          <span className="card-price">${item.price.toFixed(2)}</span>
          <button className="buy-now-btn" onClick={handleBuyNowClick}>Buy Now</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
