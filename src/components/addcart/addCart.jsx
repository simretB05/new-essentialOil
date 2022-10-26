import classes from "../addcart/addCart.module.scss";
import React, { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import {faCcPaypal,faCcVisa,faCcAmazonPay,faApplePay } from '@fortawesome/free-brands-svg-icons';
 

const AddCart = (props) => { 
	const { menuOpenCarts } = props;
	const [menuCloseCart, setMenuCloseCart] = useState(false);

  const closeToggleHandlerCart = () => {
    console.log('nay')
    setMenuCloseCart((z) => !z);
  };

  return (
		    <div className={menuCloseCart && menuOpenCarts? classes.shoping__cart__closed :!menuOpenCarts&&!menuCloseCart? classes.shoping__cart__closed: classes.shoping__cart }>
				<button onClick={closeToggleHandlerCart} className={classes.shoping__cart__close}>
					<img className={classes.shoping__cart__close__img}
						src="./assets/icons/icon-close.svg"
						alt="close icon"/>
				</button>
			  	<div className={classes.shoping__cart__popup}>
				  	<h3 className={classes.shoping__cart__titlecart}>Your Cart Items</h3>
				  	<hr className={classes.shoping__cart__hr}/>
					  		<ul className={classes.shoping__cart__items}>
								<li className={classes.shoping__cart__main__cont}>
									<div className={classes.shoping__cart__container}>
										<div className={classes.shoping__cart__img__container}>
											<img className = { classes.shoping__cart__img } src="./assets/images/images6.jpg" alt=" essential oil image"/>
												<div className={classes.shoping__cart__text__container}>
													<h3 className={classes.shoping__cart__title}>mint oils</h3>
													<span className={classes.shoping__cart__total}>
													$99
													</span>
													<span className={classes.shoping__cart__span}>CAD</span>
												</div>
										</div>
										<div className ={classes.shoping__cart__counter}>
											<button className={classes.shoping__cart__btn__minus}>-</button>
											<span className={classes.shoping__cart__countOfProduct}>1</span>
											<button className={classes.shoping__cart__btn__plus} >+</button>
							 			 </div>
							 		 </div>
								</li>
			         		</ul>
				<div className={classes.shoping__cart__subTotal}>    
					<p class={classes.shoping__cart__text}>SubTotal
						<span className={classes.shoping__cart__price}>9</span>
						<span className={classes.shoping__cart__span}>CAD</span>
					</p>
                	</div>
					    <hr className={classes.shoping__cart__hr}/>
						<div className={classes.shoping__cart__checkOutHolder}>
							<button className={classes.shoping__cart__checkOutBtn}>Checkout</button>
                        </div>
					</div>
			  <div className={classes.pay__options}>
				  <ul className={classes.pay__options__list}>
				  <li className={classes.pay__options__item}><FontAwesomeIcon icon={faCcPaypal} size="2x"/></li>
				  <li className={classes.pay__options__item}><FontAwesomeIcon icon={faCcVisa}size="2x" /></li>
				  <li className={classes.pay__options__item}><FontAwesomeIcon icon={faCcAmazonPay} size="2x"/></li>
				  <li className={classes.pay__options__item}><FontAwesomeIcon icon={faApplePay}size="2x" /></li>

				</ul>
			</div>
      
		    </div>
	
  );
};

export default AddCart;
