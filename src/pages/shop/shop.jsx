import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle"></div>
      <div className="banner-offer">
        <ul className="offers">
          <li>Envio grátis a todo Brasil</li>
          <li>Aproveite a nossa oferta 2x1 nas nossas melhores marcas</li>
          <li>Parcele em até 10x no cartão sem juros</li>
        </ul>
      </div>
      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
