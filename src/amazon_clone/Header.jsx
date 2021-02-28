import React, { useEffect, useRef, useState } from 'react';
import amazonWhite from './assets/images/amazon-white.png';
import Cart from './assets/images/cart.png';
import './Header.css';
import { Link } from 'react-router-dom';
import { useContextValue } from './ContextReducer';
import { auth } from './firebase';

const Header = () => {
  const [{ basket, user }] = useContextValue();
  const header_items_ref = useRef();
  const [itemsPosition, setItemsPosition] = useState('');
  const [searchDivFocus, setSearchDivFocus] = useState('');
  const [selectValue, setSelectValue] = useState('All');
  const [isSelectShow, setIsSelectShow] = useState(false);

  const changeSelectValue = (e) => {
    setSelectValue(e.target.innerText);
    setIsSelectShow((bool) => !bool);
  };

  const selectHandler = () => {
    setIsSelectShow((bool) => !bool);
  };

  const body = React.useRef();
  React.useEffect(() => {
    body.current = document.querySelector('body');
    body.current.children[0].addEventListener('click', (e) => {
      if (!e.target.classList.contains('ignoreBlur')) {
        setIsSelectShow(false);
      } else {
      }
    });
  }, [body]);

  useEffect(() => {
    if (header_items_ref.current.innerText.length < 2) {
      setItemsPosition('');
    } else if (
      header_items_ref.current.innerText.length > 1 &&
      header_items_ref.current.innerText.length < 3
    ) {
      setItemsPosition('length_two');
    } else {
      setItemsPosition('length_three');
    }
  }, [basket.length]);

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
      console.log('')
    }
  };

  return (
    <header id="Homepage">
      <div>
        <Link to="/">
          <img src={amazonWhite} alt="" className="header_logo" />
        </Link>
      </div>

      <div>
        <small className="text-muted">Deliver to</small>
        <h5>
          <i className="fas fa-map-marker-alt"></i> United State
        </h5>
      </div>

      <div className={`header_search ${searchDivFocus}`}>
        <button
          onClick={selectHandler}
          className="ignoreBlur select_button btn btn-warning px-2 without_me"
        >
          {selectValue}
          {!isSelectShow && <p className="m-0 ml-1 ignoreBlur">⇩</p>}
          {isSelectShow && <p className="m-0 ml-1 ignoreBlur">⇧</p>}
        </button>
        {isSelectShow && (
          <div className="ignoreBlur">
            <p className="ignoreBlur" onClick={changeSelectValue}>
              All
            </p>
            <p className="ignoreBlur" onClick={changeSelectValue}>
              Technology
            </p>
            <p className="ignoreBlur" onClick={changeSelectValue}>
              Electronics
            </p>
            <p className="ignoreBlur" onClick={changeSelectValue}>
              Clothes
            </p>
            <p className="ignoreBlur" onClick={changeSelectValue}>
              Fashion
            </p>
          </div>
        )}
        <input
          type="search"
          placeholder="Search products..."
          className="form-control"
          onFocus={() => {
            setSearchDivFocus('header_search_focus');
          }}
          onBlur={() => {
            setSearchDivFocus('');
          }}
        />
        <button className="search_button btn btn-warning">
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div>
        <h6>
          <i className="far fa-flag"></i>{' '}
          <small>
            <small className="fas fa-angle-down"></small>
          </small>
        </h6>
      </div>

      <div onClick={handleAuthentication}>
        <Link to={!user && './login'}>
          <small>Hello, {user ? user.email : 'Guest'} </small>
          <h5>{user ? 'Sign out' : 'Sign in'}</h5>
        </Link>
      </div>

      <div>
        <small>Returns</small>
        <h5>& Orders</h5>
      </div>

      <div className="header_bag">
        <Link to="/checkout">
          <img src={Cart} alt="" />
          <span ref={header_items_ref} className={`bag_items ${itemsPosition}`}>
            {basket.length} 
          </span>
          <b className="bag_text">Cart</b>
        </Link>
      </div>
    </header>
  ); 
};

export default Header;
