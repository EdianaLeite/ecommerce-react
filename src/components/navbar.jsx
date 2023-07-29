import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { ShopContext } from "../context/shop-context";
import "./navbar.css";

export const Navbar = () => {
  const { cartItems } = useContext(ShopContext);
  const totalItemsInCart = Object.values(cartItems).reduce(
    (total, count) => total + count,
    0
  );
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/"> Inicio </Link>
        <Link to="/contact"> Quem somos </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
          {totalItemsInCart > 0 && <span className="cart-counter">{totalItemsInCart}</span>}
        </Link>
      </div>
    </div>
  );
};
