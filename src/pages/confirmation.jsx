import React, { useContext} from "react";
import { useLocation} from "react-router-dom";
import Confetti from "react-confetti";
import "./confirmation.css";
import { ShopContext } from "../context/shop-context";
import { useNavigate } from "react-router-dom";



const ConfirmationPage = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);


  const customerName = searchParams.get("name");
  const customerEmail = searchParams.get("email");
  const paymentMethod = searchParams.get("method").toLowerCase();

  const navigate = useNavigate();

  const handleNavigateHome = () => {
    navigate('/');
  };

  return (
    <div className="confirmation-container">
      <Confetti />
      <h2 className="confirmation-hello">Olá, {customerName}!</h2>
      <p className="confirmation-text">
        Muito obrigada por realizar a compra, no valor total de R$ {totalAmount}, pagando com {paymentMethod}. Você receberá mais informações no seu e-mail {customerEmail}.
      </p>
      <button className="back-btn" onClick={handleNavigateHome}>
        Voltar para a página inicial
      </button>
    </div>
  );
};

export default ConfirmationPage;
