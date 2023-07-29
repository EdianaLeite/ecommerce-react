import React from "react";
import Group from "../image/group.png"
import './contact.css'

export const Contact = () => {
  return (
  <div className="contact">
    <h2>Quem somos</h2>
    <div className="container">
    <div className="right">
        <p>
          Acreditamos que a melhor forma de ver o mundo é com bons olhos. Por isso nossa equipe está focada em aperfeiçoar todo o procedimento de fabricação de nossos produtos, garantindo qualidade e bom preço. Inovamos em modelos, e em tecnologia e não paramos nunca. Acreditamos que o melhor está por vir para todos, e por isso trabalhamos incansavelmente até que todos possam enxergar o que tem de melhor nesse mundo.</p>
    </div>
    <div className="left">
        <img src={Group} alt="" />
    </div>
    </div>
  </div>
 )
};
