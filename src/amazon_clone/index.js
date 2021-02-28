import React from 'react';
import './assets/css/bootstrap.min.css';
import Header from './Header';
import HeaderBottom from './HeaderBottom';
import Home from './Home';
import Login from './Login';
import { Switch, Route } from 'react-router-dom';
import Products from './Products';
import { StateProvider } from './ContextReducer';
import Checkout from './Checkout';

const Amazon = () => {
  return (
    <StateProvider> 
        <Switch>

          <Route exact path={`/`}>
            <Header />
            <HeaderBottom />
            <Home />
          </Route>

          <Route exact path="/products">
            <Header />
            <HeaderBottom />
            <Products />
          </Route>

          <Route exact path="/checkout">
            <Header />
            <HeaderBottom />
            <Checkout />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
        </Switch> 
    </StateProvider>
  );
};

export default Amazon;
