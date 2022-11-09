import React,{useContext, useState} from 'react'
import classes from "./YourCart.module.scss"
import CartContextData from '../../store/cart-context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCcPaypal, faCcVisa, faCcAmazonPay, faApplePay } from '@fortawesome/free-brands-svg-icons';
import formatCurrency from "format-currency";
import {NavLink} from 'react-router-dom';



function YourCart() {
	const { items, addItem, removeItem, totalAmount } = useContext(CartContextData);

	const CartCtx  = useContext(CartContextData);

	const totalAmounts = `${totalAmount.toFixed(2)}`;

  console.log(items)
  let opts = { format: '%v %c', code: 'CAD' }
  const hasItems = items.length > 0;

	const [count, setCount] = useState(hasItems)
	
	const onAddBtn = (item) => {
    CartCtx.addItem({ ...item, qty: 1 });
	
	}
	const onRemoveBtn = (id) => {
		CartCtx.removeItem(id);
	};
  return (
<div className={classes.content}>
      <main className={classes.main}>
        <section className={classes.main__section}>
        <h1 className={classes.main__section__title}>Your Cart </h1>
        
        <div>
						{!hasItems? (
							<h4 class={classes.shoping__cart__empty}>cart is empty</h4>
						) : (
							<ul className={classes.shoping__cart__items}>
								{items.map((x) => (
									<li className={classes.shoping__cart__main__cont}>
										<div className={classes.shoping__cart__container}>
											<div className={classes.shoping__cart__img__container}>
												<img className={classes.shoping__cart__img} src={x.image} alt="essential __oil__image" />
												<div className={classes.shoping__cart__text__container}>
													<h3 className={classes.shoping__cart__title}>{ x.name}</h3>
													<span className={classes.shoping__cart__total}>
														{formatCurrency(`${x.price*x.qty } opts`)}
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
								))}
							</ul>
						)}
				<div className={classes.shoping__cart__subTotal}>
					<p className={classes.shoping__cart__text}>SubTotal
								<span className={classes.shoping__cart__price}>{ totalAmounts}</span>
						<span className={classes.shoping__cart__span}>CAD</span>
					</p>
						</div>
						<div className={classes.shoping__cart__checkOutHolder}>
					<a href="#"><button className={classes.shoping__cart__checkOutBtn} disabled={!hasItems}>Checkout</button></a>
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
        </section>
      
        
      </main>
</div>  )
}

export default YourCart