import React from 'react';
import './Checkout.css';
import {  useContextValue } from './ContextReducer';

const CheckoutProduct = ({ title, price, image, reviews, id }) => {
  const [, dispatch] = useContextValue();

  const removeFromBasket = (id) => {
    dispatch({
      type: 'REMOVE_FROM_BASKET',
      id,
    });
  };
 
  return (
    <div className="Checkout_Product">
      <div className="image">
        <img src={image} alt="" />
      </div>
      <div className="text">
        <p className="title">{title}</p>
        <p className="price">
          <small>$</small>
          <span>{price}</span>
        </p>
        <p className="reviews">
          {Array(reviews)
            .fill()
            .map((_, i) => (
              <i key={i} className="fas fa-star"></i>
            ))}
        </p>
        <button
          onClick={() => removeFromBasket(id)}
          className="btn btn-warning btn-sm"
        >
          Remove from basket  
        </button>
      </div>
    </div>
  );
};

const Checkout = () => {
  const [{ basket }] = useContextValue();

  return (
    <div className="Checkout">
      <div className="left_side">
        {basket.length === 0 ? (
          <h3 className="text-warning">Empty!</h3>
        ) : (
          <>
            <h3>Shopping Cart</h3>
          </>
        )}

        {
          // Checkout Products
          basket.map((product) => (
            <CheckoutProduct
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              reviews={product.reviews}
              id={product.id}
            />
          ))
        }
      </div>

      <div className="right_side">
        <div>
          <p>Subtotal ({basket.length} items): ${basket.length > 0 ? basket?.reduce((price, item) => price + item.price, 0).toFixed(2) : 0}</p>
          <label> <input type="checkbox" /> This order contains a gift</label>
          <button className="btn btn-warning btn-sm btn-block">Proceed to checkout</button>
        </div> 
      </div>
    </div>
  );
};

export default Checkout;
