import React from "react";
import "./footer.css";
import Amazon from "./assets/images/amazon-white.png";

const Footer = () => {
  return (
    <>
      <div className="Footer">
        <div className="Footer_container">
          <div>
            <h5>Get to Know Us</h5>
            <a href="/">Careers </a>
            <a href="/">Blog </a>
            <a href="/">About Amazon </a>
            <a href="/">Investor Relations </a>
            <a href="/">Amazon Devices </a>
            <a href="/">Amazon Tours </a>
          </div>

          <div>
            <h5>Make Money with Us</h5>
            <a href="/">Sell products on Amazon</a>
            <a href="/">Sell apps on Amazon</a>
            <a href="/">Become an Affiliate</a>
            <a href="/">Advertise Your Products</a>
            <a href="/">Self-Publish with Us</a>
            <a href="/">Host an Amazon Hub</a>
            <a href="/">See More Make Money with Us</a>
          </div>

          <div>
            <h5>Amazon Payment Products</h5>
            <a href="/">Amazon Business Card</a>
            <a href="/">Shop with Points</a>
            <a href="/">Reload Your Balance</a>
            <a href="/">Amazon Currency Converter</a>
          </div>

          <div>
            <h5> Let Us Help You</h5>
            <a href="/">Amazon and COVID-19</a>
            <a href="/">Your Account</a>
            <a href="/">Your Orders</a>
            <a href="/">Shipping Rates & Policies</a>
            <a href="/">Returns & Replacements</a>
            <a href="/">Manage Your Content and Devices</a>
            <a href="/">Amazon Assistant</a>
            <a href="/">Help</a>
          </div>
        </div>

        <div className="Footer_bottom">
          <img src={Amazon} alt="" />
          <h6>⚫ English ⇳ </h6>
          <h6>
            <span className="text-white">$</span> USD - U.S. Dollar
          </h6>
          <h6>
            <i className="fas fa-flag"></i> United States
          </h6>
        </div>
      </div>
      <div className="Second_footer">
        <a href="/"> Conditions of Use</a> <a href="/">Privacy Notice</a> <a href="/">Interest-Based Ads</a>
        <span>© 1996-2020, Amazon.com, Inc. or its affiliates</span>
      </div>
    </>
  );
};

export default Footer;
