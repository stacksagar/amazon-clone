import React from 'react'
import { useContextValue } from './ContextReducer'

export const Product = ({ title, reviews, price, image, id }) => {

 const [, dispatch] = useContextValue()

 const addCart = () => {
  dispatch({
   type: 'ADD_TO_CART',
   product: {
    title,
    reviews,
    price,
    image,
    id: Math.random() * 9999999
   }
  })
 } 

 return (
  <div>
   <p className="title my-0">{title}</p>
   <p className="review my-0">
    {Array(reviews).fill().map((_, i) => (
     <i key={i} className="fas fa-star"></i>
    ))}
   </p>
   <p className="price my-0">
    <small>$</small>{price}</p>
   <div className="image">
    <img src={image} alt="refresh" />
   </div>
   <button onClick={addCart} className="btn btn-warning btn-block btn-sm"> Add to cart </button>
  </div>
 )
}