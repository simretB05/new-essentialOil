import React, { useState } from "react";
import {NavLink} from 'react-router-dom';
import classes from "../navbar/navbar.module.scss";
import AddCart from '../addcart/addCart'


function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
  
    <header className={classes.header}>
     
      <div className={classes.header__toggle}>
    
          <button className={classes.header__toggle__btn} onClick={menuToggleHandler} aria-label="Open menu">
            <div className={ menuOpen ? classes.header__toggle__btn__open: classes.header__toggle__btn__burger }   ></div>
          </button>
    
        <NavLink className={classes.header__toggle__home__link} to="/">
          <h2 className={classes.header__toggle__logo}>essential oils</h2>
        </NavLink>
      </div>
      <nav className={classes.nav}>
        <ul className={  menuOpen ?classes.navToggle__active:classes.nav__list}>
          <li className={classes.nav__list__description}>
            <NavLink className={ menuOpen? classes.nav__list__description__link: classes.nav__list__description__link} to="/collection">
              collection
            </NavLink>
          </li>
          <li className={classes.nav__list__description}>
            <NavLink className={classes.nav__list__description__link} to="/contact-us">
              contact-us
            </NavLink>
          </li>
          <li className={classes.nav__list__description}>
            <NavLink className={classes.nav__list__description__link} to="/about-us">
              Aobut-us
            </NavLink>
          </li>
          <li className={classes.nav__list__description__login}>
            <NavLink className={classes.nav__list__description__login__link} to="/log-in">
              Log in
            </NavLink>
            <NavLink className={classes.nav__list__description__link__img} to="/log-in">
              <img className={classes.nav__list__description__login__link__img} src="../assets/images/avator-image.png" alt="avator_image" />
            </NavLink>
          </li>
        </ul>
        <div className={classes.nav__cart}>
          <p className={classes.nav__cart__text}>0</p>
          <img className={classes.nav__cart__img} src="../assets/icons/icon-cart.svg" alt="shopping cart" />
        </div>
   
      </nav>
  
      {/* <div className={classes.shoping__cart}>
        <button className={classes.shoping__cart__close"><img  class="shoping-cart__close-img" src="../assets/icons/icon-close.svg" alt="close icon"></button>
    </div> */}
      <AddCart/>
    </header>

  );

};

export default Navbar;