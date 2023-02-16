import React from 'react';
import PriceCard from '../components/PriceCard/PriceCard';
import './PricesPage.css';

const PricesPage = () => {
  return (
    <>
      <div className="price-list">
        <PriceCard />
      </div>
    </>
  );
};

export default PricesPage;
