import React, { useEffect, useState } from "react";
import AmazonBasics from "./assets/images/amazonbasics.jpg";
import Electronics from "./assets/images/electronics.jpg";
import ShopTopCategory from "./assets/images/shop-top-category.jpg";
import ComputerAccessories from "./assets/images/computers-accessories.jpg";
import BeautiPicks from "./assets/images/beauty-picks.jpg";
import DealsPromotion from "./assets/images/deals-promotions.jpg";
import GetFitHome from "./assets/images/get-fit-home.jpg";
import ShopLaptopTablet from "./assets/images/shop-laptops-tablet.jpg";
import HomeBedding from "./assets/images/home-bedding.jpg";

import ShopBy1 from "./assets/images/shop-by-1.png";
import ShopBy2 from "./assets/images/shop-by-2.png";
import ShopBy3 from "./assets/images/shop-by-3.png";
import ShopBy4 from "./assets/images/shop-by-4.png";

import Coumfy1 from "./assets/images/coumfy-style/1.jpg";
import Coumfy2 from "./assets/images/coumfy-style/2.jpg";
import Coumfy3 from "./assets/images/coumfy-style/3.jpg";
import Coumfy4 from "./assets/images/coumfy-style/4.jpg";

import SingInSecurely from "./assets/images/sign-in-experience.jpg";
import SingleCategory from "./singleCategory";
import { Link } from "react-router-dom";

import { CategorySlider } from "./CategorySlider"; 
import { SliderImages } from "./SliderImages"; 

const HomeProducts = () => {

  const [threeTimes,setThreeTimes] = useState([])
  const [twoTimes,setTwoTimes] = useState([])

  useEffect(()=>{
    setThreeTimes([SliderImages[0],SliderImages[1],SliderImages[2]]) 
    setTwoTimes([SliderImages[3],SliderImages[4]]) 
  },[])   

  return (
    <div className="Home_Products">
      <div className="single_categories">
        <SingleCategory
          title="AmazonBasics"
          image={AmazonBasics}
          linkText="See more"
        />

        <div>
          <strong>Shop by Category</strong>
          <div>
            <div>
              <img src={ShopBy1} alt="" />
              <small>Computers & Accessories</small>
            </div>
            <div>
              <img src={ShopBy2} alt="" />
              <small>Video Games</small>
            </div>
            <div>
              <img src={ShopBy3} alt="" />
              <small>Baby</small>
            </div>
            <div>
              <img src={ShopBy4} alt="" />
              <small>Toys & Game</small>
            </div>
          </div>
          <Link to="/products">Shop now</Link>
        </div>

        <SingleCategory
          title="Electronics"
          image={Electronics}
          linkText="See more"
        />

        <SingleCategory
          title="Shop top categories"
          image={ShopTopCategory}
          linkText="See more"
        />

        <SingleCategory
          title="Computers & Accessories"
          image={ComputerAccessories}
          linkText="Shop now"
        />

        <div className="sign_in_securely">
          <img src={SingInSecurely} alt="" />
          <div>
            <h5>
              <strong>Sign in for the best experience</strong>
            </h5>
            <button className="btn btn-warning btn-sm btn-block">
              Sign in securely
            </button>
          </div>
        </div>

        <SingleCategory
          title="Beauty picks"
          image={BeautiPicks}
          linkText="Shop now"
        />

        <SingleCategory
          title="Deals & Promotions"
          image={DealsPromotion}
          linkText="Shop now"
        />

        <SingleCategory
          title="Get fit at home"
          image={GetFitHome}
          linkText="Explore now"
        />
      </div>

      {threeTimes.map((single,i)=>(
        <CategorySlider key={i} title={single.title} images={single.images} linkText={single.linkText} />
      ))}

      <div className="single_categories">
        <div className="coumfyStyle">
          <strong>Shop by Category</strong>
          <div>
            <div>
              <img src={Coumfy1} alt="" />
              <small>Sweatshirts</small>
            </div>
            <div>
              <img src={Coumfy2} alt="" />
              <small>Joggers</small>
            </div>
            <div>
              <img src={Coumfy3} alt="" />
              <small>Cordigans</small>
            </div>
            <div>
              <img src={Coumfy4} alt="" />
              <small>Easy tees</small>
            </div>
          </div>
          <Link to="/products">See more</Link>
        </div>

        <SingleCategory
          title="Shop Laptops & Tablets"
          image={ShopLaptopTablet}
          linkText="See more"
        />
        <SingleCategory
          title="Explore home bedding"
          image={HomeBedding}
          linkText="See more"
        />
      </div>

      

      {twoTimes.map((single,i)=>(
        <CategorySlider key={i} title={single.title} images={single.images} linkText={single.linkText} />
      ))}


    </div>
  );
};

export default HomeProducts;
