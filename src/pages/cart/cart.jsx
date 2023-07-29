import React, { useState, useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  const [showModal, setShowModal] = useState(false);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");

  const clearCart = () => {
    checkout();
  };

  const handleCheckout = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handlePurchaseConfirmation = () => {
    const encodedCustomerName = encodeURIComponent(customerName);
    const encodedCustomerEmail = encodeURIComponent(customerEmail);
    const encodedPaymentMethod = encodeURIComponent(paymentMethod);
    const confirmationURL = `/confirmation?name=${encodedCustomerName}&email=${encodedCustomerEmail}&method=${encodedPaymentMethod}&totalAmount=${totalAmount}`;
  
    navigate(confirmationURL);
  };
  

  return (
    <div className="cart">
      <div>
        <h2>Carrinho</h2>
      </div>
      {totalAmount > 0 && (
          <div className="cart-info">
            <h3>Nome do Produto</h3>
            <h3>Quantidade</h3>
            <h3>Preço Unidade</h3>
            <h3>Preço Total</h3>
          </div>
        )}
      <div className="cart-container">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout-container">
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p className="subtotal"> Total: R$ {totalAmount} </p>
          <button onClick={() => navigate("/")}> Continuar comprando </button>
          <button onClick={clearCart}> Limpar carrinho </button>
          <button onClick={handleCheckout}> Finalizar compra </button>
        </div>
      ) : (
        <div className="empty-cart">
          <h2> Seu carrinho está vazio</h2>
          <img src="https://media.tenor.com/lx2WSGRk8bcAAAAC/pulp-fiction-john-travolta.gif" alt="" />
          <button className="back-btn" onClick={() => navigate("/")}> Voltar para a página principal </button>
        </div>
      )}

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3>Finalizar Compra</h3>
            <input
              type="text"
              placeholder="Nome"
              value={customerName}
              onChange={(e) => setCustomerName(e.target.value)}
            />
            <input
              type="email"
              placeholder="E-mail"
              value={customerEmail}
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
            <select
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="">Selecione o Método de Pagamento</option>
              <option value="Cartão de Crédito">Cartão de Crédito
              </option>
              <option value="Boleto Bancário">Boleto Bancário</option>
              <option value="Transferência Bancária">Transferência Bancária</option>
            </select>
            <div className="modal-actions">
              <button onClick={handleModalClose}>Cancelar</button>
              <button onClick={handlePurchaseConfirmation}>Confirmar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};