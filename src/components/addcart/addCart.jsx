import React, { useState,useContext } from "react";
import classes from "../addcart/addCart.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcPaypal, faCcVisa, faCcAmazonPay, faApplePay } from '@fortawesome/free-brands-svg-icons';
import Modal from "../navbar/Modal";
import CartContextData from '../store/cart-context';
import formatCurrency from "format-currency";
import { NavLink } from 'react-router-dom';


const AddCart = (props) => {
	
	const { items, addItem, removeItem, totalAmount } = useContext(CartContextData);
	const CartCtx  = useContext(CartContextData);
  console.log(typeof(CartCtx))
	const { onMenuOpenCarts, onHideCart, onMenuOpen,product } = props;
	let opts = { format: '%v %c', code: 'CAD' }
	const [menuCloseCart, setMenuCloseCart] = useState(false);
	const totalAmounts = `${totalAmount.toFixed(2)}`;

	const [count, setCount] = useState()

	const hasItems = CartCtx.items.length > 0;

	const onAddBtn = (item) => {
    CartCtx.addItem({ ...item, qty: 1 });
	
 }
  
 const onRemoveBtn = (id) => {
	CartCtx.removeItem(id);
};
	return (
		<Modal onClose={ onHideCart}>
			
				<div  className= {onMenuOpenCarts ? classes.shoping__cart : classes.shoping__cart}>
				<button onClick={onHideCart} className={classes.shoping__cart__close} >
				
				<img className={classes.shoping__cart__close__img}
					src="./assets/icons/icon-close.svg"
					alt="close icon" />
			</button>
			<div className={classes.shoping__cart__popup}>
				<h3 className={classes.shoping__cart__titlecart}>Your Cart Items</h3>
					<hr className={classes.shoping__cart__hr} />

					<div>
						{!hasItems ? (
							<h4 className={classes.shoping__cart__empty}>cart is empty</h4>
						) : (
						<div>
							{CartCtx.items.map((x) => (

							<ul className={classes.shoping__cart__items}>
									<li className={classes.shoping__cart__main__cont}>
										<div className={classes.shoping__cart__container}>
											<div className={classes.shoping__cart__img__container}>
												<img className={classes.shoping__cart__img} src={x.image} alt="essential __oil__image" />
												<div className={classes.shoping__cart__text__container}>
													<h3 className={classes.shoping__cart__title}>{x.name}</h3>
													<span className={classes.shoping__cart__total}>
														{formatCurrency(`${x.price*x.qty} opts`)}
													</span>
													<span className={classes.shoping__cart__span}>CAD</span>
												</div>
											</div>
											<div className={classes.shoping__cart__counter}>
												<button className={classes.shoping__cart__btn__minus}onClick={onRemoveBtn.bind(null, x.id)} >-</button>
												<span className={classes.shoping__cart__countOfProduct}>{x.qty}</span>
												<button className={classes.shoping__cart__btn__plus}  onClick={ onAddBtn.bind(null,x)}>+</button>
											</div>
										</div>
									</li>
								</ul>
					))}

								</div>
						)}
				<div className={classes.shoping__cart__subTotal}>
					<p className={classes.shoping__cart__text}>SubTotal
								<span className={classes.shoping__cart__price}>{totalAmounts}</span>
						<span className={classes.shoping__cart__span}>CAD</span>
					</p>
				</div>
						
				<hr className={classes.shoping__cart__hr} />
				<div className={classes.shoping__cart__checkOutHolder}>
					<a href="#"><button className={classes.shoping__cart__checkOutBtn}>Checkout</button></a>
						</div>
						</div>
			</div>
			<div className={classes.pay__options}>
				<ul className={classes.pay__options__list}>
					<li className={classes.pay__options__item}><FontAwesomeIcon icon={faCcPaypal} size="2x" /></li>
					<li className={classes.pay__options__item}><FontAwesomeIcon icon={faCcVisa} size="2x" /></li>
					<li className={classes.pay__options__item}><FontAwesomeIcon icon={faCcAmazonPay} size="2x" /></li>
					<li className={classes.pay__options__item}><FontAwesomeIcon icon={faApplePay} size="2x" /></li>

				</ul>
			</div>
				
		</div>

		</Modal>
	
	);
};

export default AddCart;
