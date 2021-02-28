import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./CategorySlider.css";  

export const CategorySlider = ({images,title,linkText = 'work'}) => {
  const slider_container = useRef()

  return (
    <div className="CategorySlider">
    <button onClick={()=>slider_container.current.scrollLeft -= slider_container.current.clientWidth + 20} className="btn btn-light"><i className="fas fa-angle-left"></i></button>
    <h5>{title} <small><Link to="/">{linkText}</Link></small></h5>
    <div ref={slider_container} className="CategorySlider_container">
    {images.map((image,i)=>(
      <div key={i}> <img src={image} alt=""/> </div>
    ))}
    </div>
      <button onClick={()=>slider_container.current.scrollLeft += slider_container.current.clientWidth + 20} className="btn btn-light py-5 px-4"><i className="fas fa-angle-right"></i></button>
    </div>
    )
    
};