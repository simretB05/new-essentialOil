import { useReducer } from "react";
import CartContextData from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0
};
const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedItems = state.items.concat(action.item);
    const updatedtotalAmount = state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount:updatedtotalAmount
    };
  }
  return defaultCartState;
  
}

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  }
  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  }

  const CartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: (item) => addItemToCartHandler,
    removeItem: (id) => removeItemFromCartHandler
  };
  return  <CartContextData.Provider value={CartContext}>
{props.children}
  </CartContextData.Provider>
}
export default CartProvider;