import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import cart from './Cart';
import { Cart } from '.';
import { useStateContext } from '../context/StateContext';
import { SearchBar } from '.';

const Navbar = () => {
  const  {showCart , setShowCart, totalQuantities} = useStateContext();
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <a href="/">BAY7GARAGE</a>
      </div>
      <ul className="navbar-list">
        <div className="navbar-list-home">
          <a href="/" className="navbar-link">Home</a>
        </div>
        <div className="navbar-list-cart">
          <button type="button" className="cart-icon" onClick={()=> setShowCart(true)}>
            <AiOutlineShopping />
            <span className="cart-item-qty">{totalQuantities}</span>
          </button>
          { showCart &&<Cart />}
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
