import React, { useState, useEffect, useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  const [showModal, setShowModal] = useState(false);

  const handleAddToCart = () => {
    addToCart(id);
    setShowModal(true);
  };

  useEffect(() => {
    if (showModal) {
      const timeout = setTimeout(() => {
        setShowModal(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [showModal]);

  return (
    <div className="product-card">
      <img src={productImage} className="product-image" />
      <div className="product-description">
        <p className="product-name">{productName}</p>
        <p className="product-price">R$ {price}</p>
      </div>
      <button className="add-to-cart-button" onClick={handleAddToCart}>
        Eu quero!
      </button>
          <div className={`modal ${showModal ? 'show' : ''}`}>
             Seu item foi adicionado ao carrinho
        </div>
    </div>
  );
};
