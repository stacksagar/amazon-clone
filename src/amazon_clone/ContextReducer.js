import { createContext, useContext, useReducer } from "react";

const initialState = {
  isLoading: false,
  basket: [],
  user: null
}; 

const reducer = (state, action) => {
  switch (action.type) {

    case 'ADD_TO_CART':
      return {
        ...state,
        basket: state.basket.concat(action.product)
      }

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        basket: state.basket.filter(product => product.id !== action.id)
      }

    case "startLoading":
      return { ...state, isLoading: true };
    case "stopLoading":
      return { ...state, isLoading: false };
    
    case 'SET_USER':
      return {
        ...state,
        user: action.user
      }

    default:
      return state;
  }
};

const MyContext = createContext();

const StateProvider = ({ children }) => (
  <MyContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </MyContext.Provider>
);

const useContextValue = () => useContext(MyContext);
export { StateProvider, useContextValue };
