import React from "react";
import { Link } from "react-router-dom";

const SingleCategory = ({title,image,linkText}) => {
  return (
    <div className="category">
      <strong>{title}</strong>
      <img src={image} alt="" />
      <Link to="/products">{linkText}</Link>
    </div>
  );
};

export default SingleCategory;
