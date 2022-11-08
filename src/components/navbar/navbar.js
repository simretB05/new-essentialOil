import React, { useState,useContext  } from "react";
import {NavLink} from 'react-router-dom';
import classes from "../navbar/navbar.module.scss";
import AddCart from '../addcart/addCart'
import Modal from "./Modal";
import CartContextData from "../store/cart-context";


function Navbar({products, cart, setCart,  isAuthenticated, onLogout}) {

  const CartCtx = useContext(CartContextData);
  const numberofcartItems = CartCtx.items.reduce((currNumber, item) => { 
    return currNumber + item.qty;
  }, 0);


  const [menuOpen, setMenuOpen] = useState(false)
  function menuToggleHandler(e) {
        e.preventDefault()
              setMenuOpen((p) => !p);
              
      };

  const [menuOpenCart, setMenuOpenCart] = useState(false);
  
  
  const menuToggleHandlerCart = () => {
    
    setMenuOpenCart(true);
  };

  const HidemenuToggleHandlerCart = () => {
    
    setMenuOpenCart(false);
  };

  return (
  
    <header className={classes.header}>
     
      <div className={classes.header__toggle}>
    
          <button className={classes.header__toggle__btn}  onClick={menuToggleHandler} aria-label="Open menu">
            <div className={ menuOpen ? classes.header__toggle__btn__open: classes.header__toggle__btn__burger }></div>
          </button>
    
        <NavLink className={classes.header__toggle__home__link} to="/">
          <h2 className={classes.header__toggle__logo}>essential oils</h2>
        </NavLink>
      </div>
      <nav className={classes.nav}>
        {/* <Modal open={menuOpen} > */}
        <ul className={menuOpen ? classes.navToggle__active : classes.nav__list}>
          {!isAuthenticated && (
            <li className={classes.nav__list__description}>
              <a className={menuOpen ? classes.nav__list__description__link : classes.nav__list__description__link} href="/collection">
                collection
                <u className={classes['sub-list']}>
                  <li className={classes['sub-list__item']} >
                    <a href="#">Lavender Essential Oil</a>
                  </li>
                  <li className={classes['sub-list__item']}>
                    <a href="#">Peppermint Essential Oil</a>
                  </li>
                  <li className={classes['sub-list__item']}>
                    <a href="#">Lemon Essential oil</a>
                  </li>
                  <li className={classes['sub-list__item']}>
                    <a href="#">Sun Flower Essential oil</a>
                  </li>
                  <li className={classes['sub-list__item']}>
                    <a href="#">Tea Tree Essential oil</a>
                  </li>
                  </u>
              </a>
            </li>
          )}
          {!isAuthenticated && (
            <li className={classes.nav__list__description}>
              <a className={classes.nav__list__description__link} href="/contact-us">
                contact-us
              </a>
            </li>
          )}
          {!isAuthenticated && (
            <li className={classes.nav__list__description}>
              <a className={classes.nav__list__description__link} href="/about-us">
                Aobut-us
              </a>
            </li>
          )}
          {isAuthenticated && (
            <li className={classes.nav__list__description}>
              <NavLink className={classes.nav__list__description__link} to="/log-in">
                Login Home
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li className={classes.nav__list__description}>
              <NavLink className={classes.nav__list__description__link} to="/user">
                Users
              </NavLink>
            </li>
          )}
          {isAuthenticated && (
            <li className={classes.nav__list__description}>
              <NavLink className={classes.nav__list__description__link} to="/your-cart">
                Your cart
              </NavLink>
            </li>
          )}
          {!isAuthenticated && (
            <li className={classes.nav__list__description__login}>
              <a className={classes.nav__list__description__login__link} href="/log-in">
                <button className={classes.nav__list__description__login__link} >Login</button>
              </a>
            </li>
          )}
          {isAuthenticated && (
            <li className={classes.nav__list__description__login}>
              <NavLink className={classes.nav__list__description__login__link} href="/log-in">
                <button onClick={onLogout} className={classes.nav__list__description__login__link} > Logout  </button>

              </NavLink>
              <a className={classes.nav__list__description__link__img} href="/log-in">
                <img className={classes.nav__list__description__login__link__img} src="../assets/images/avator-image.png" alt="avator_image" />
              </a>
            </li>
          )}
          </ul>
          {/* </Modal> */}
        <button className={classes.nav__cart} onClick={menuToggleHandlerCart } aria-label="Open menu" >
          <p className={classes.nav__cart__text}>{numberofcartItems}</p>
          <img className={classes.nav__cart__img} src="../assets/icons/icon-cart.svg" alt="shopping cart" />
        </button>
   
      </nav>
      {menuOpenCart &&
        <AddCart products={products} cart={cart} setCart={setCart} onHideCart={HidemenuToggleHandlerCart} onMenuOpenCarts={ menuToggleHandlerCart} />
      }
      </header>

  );

};

export default Navbar;