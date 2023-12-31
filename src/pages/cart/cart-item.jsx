import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const itemTotal = cartItems[id] * price;

  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <div className="countHandler">
          <button id="quantity" onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button id="quantity" onClick={() => addToCart(id)}> + </button>
        </div>
        <p> R$ {price}</p>
        <p>R$ {itemTotal}</p>
      </div>
    </div>
  );
};
