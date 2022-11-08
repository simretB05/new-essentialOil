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
console.log(typeof(CartCtx.items))
	const { onMenuOpenCarts, onHideCart, onMenuOpen,product } = props;
	let opts = { format: '%v %c', code: 'CAD' }

	// const [menuCloseCart, setMenuCloseCart] = useState(false);

	// const closeToggleHandlerCart = () => {
	// console.log('nay')
	// setMenuCloseCart((z) => !z);

	// };
	// const numberofcartItems = CartCtx.items.reduce((currNumber, item) => { 
  //   return currNumber + item.qty;
  // }, 0);
	const totalAmounts = `${totalAmount.toFixed(2)}`;
	console.log(typeof(items))
	const hasItems = CartCtx.items.length > 0;

  // const cartItemRemoveHandler = (id) => {
	// 	console.log(typeof(items))
		

	// };


	const [count, setCount] = useState(1)
	
	const onAddBtn = (item) => {
		// addItem({ ...item, qty: 1 });
		const exist = items.find((x) => x.id === item.id);
		console.log(exist.qty)
    // if (exist) {
    //   setCount(
    //     CartCtx.items.map((i) =>
    //       i.id === item.id ? { ...exist, qty: item.qty++ } : i

    //     )

    //   );
    //   console.log(item)

    // } else {
    //   setCount([...CartCtx.items, { ...item, qty: 0 }]);
    // }
  };
	  
	const cartItemRemoveHandler = (id) => {
  removeItem(id);
  };
	// const onAddBtn = (item) => {
	// 	setCount((x)=>x+1)
	// 	addItem({ ...item, qty: 1 });
		
		
	// 	};

		
	

	
	// const onRemoveBtn = (x) => {

	// 	if (count <= 0) {
	// 		return setCount((x) => x - 1)
	// 	}
   
	// }

// 	const cartItemAddHandler = (item) => {
// 		for (let i in item)
// 		console.log(item);
// }
  
// 	const [addBtn, setAddBtn] = useState(0)
	
	
	

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
														{formatCurrency(`${x.price * count * x.qty} opts`)}
													</span>
													<span className={classes.shoping__cart__span}>CAD</span>
												</div>
											</div>
											<div className={classes.shoping__cart__counter}>
												<button className={classes.shoping__cart__btn__minus} onClick={cartItemRemoveHandler}>-</button>
												<span className={classes.shoping__cart__countOfProduct}>{count}</span>
												<button className={classes.shoping__cart__btn__plus} onClick={onAddBtn} >+</button>
											</div>
										</div>
									</li>
								</ul>
																))}

								</div>
						)}
				<div className={classes.shoping__cart__subTotal}>
					<p className={classes.shoping__cart__text}>SubTotal
								<span className={classes.shoping__cart__price}>{totalAmounts*count}</span>
						<span className={classes.shoping__cart__span}>CAD</span>
					</p>
				</div>
						
				<hr className={classes.shoping__cart__hr} />
				<div className={classes.shoping__cart__checkOutHolder}>
					<NavLink to="/your-cart"><button className={classes.shoping__cart__checkOutBtn}>Checkout</button></NavLink>
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
