import React from "react";

 const CartContextData=React.createContext({
  items: [],
  totalAmount:0,
  addItem: (item) => { },
  removeItem:(id)=>{}
 })
export default CartContextData;