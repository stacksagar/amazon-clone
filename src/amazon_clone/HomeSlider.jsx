import React, { useEffect, useRef } from "react";
import './HomeSlider.css'
import Img1 from './assets/images/home_slider/1.jpg'
import Img2 from './assets/images/home_slider/2.jpg'
import Img3 from './assets/images/home_slider/3.jpg'
import Img4 from './assets/images/home_slider/4.jpg'
import Img5 from './assets/images/home_slider/5.jpg'
import Img6 from './assets/images/home_slider/6.jpg'

const HomeSlider = () => {
  const sliderWrapper = useRef();
  let slideIndex = 0;

  const find = (index) => {
    if (sliderWrapper.current){
      sliderWrapper.current.childNodes.forEach((div) => {
        div.classList.remove("active_slide");
      });
      sliderWrapper.current.childNodes[index].classList.add("active_slide");
    }
    return false
  };

  const sliderNext = () => {
    if (sliderWrapper.current && sliderWrapper.current.childElementCount - 1 > slideIndex) {
      slideIndex++;
    } else {
      slideIndex = 0;
    }
    find(slideIndex);
  };

  const sliderPrev = () => {
    if (slideIndex > 0) {
      slideIndex--;
    } else {
      slideIndex = sliderWrapper.current.childElementCount - 1;
    }
    find(slideIndex);
  };

  useEffect(() => { 
    setInterval(() => {
      sliderNext();
    }, 3500);
  });

  return (
    <div className="Home_Sliders">
      <button onClick={sliderPrev} id="home_slider_prev">
        <i className="fas fa-angle-left"></i>
      </button>

      <div ref={sliderWrapper} className="slider_container"> 
        <div className="active_slide"><img src={Img1} alt=""/></div>
        <div><img src={Img2} alt=""/></div>
        <div><img src={Img3} alt=""/></div>
        <div><img src={Img4} alt=""/></div>
        <div><img src={Img5} alt=""/></div>
        <div><img src={Img6} alt=""/></div>
      </div>

      <button onClick={sliderNext} id="home_slider_next">
        <i className="fas fa-angle-right"></i>
      </button>
    </div>
  );
};

export default HomeSlider;