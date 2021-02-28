import React from 'react';
import Footer from './Footer';
import './Products.css';
import { Product } from './Product';
import { ProductsInfo } from './ProductsInfo';
const Products = () => {
  return (
    <>
      <div className="Products">

        {ProductsInfo.map((info) => (
          <Product
            key={info.id}
            id={info.id} 
            title={info.title} 
            reviews={info.reviews}
            image={info.image}
            price={info.price}
          />
        ))}

      </div>
      <Footer />
    </>
  );
};

export default Products;
