import React from "react";

import "./styles.scss";

const CardList = (props) => {
  return (
    <div>
      <div className="card-product card d-flex flex-column">
        <img src={props.img} alt="Algo" />
        <div className="p-3">
          <p className="text-center itemName fw-bold text-dark">{props.text}</p>
          <p className="itemDescription text-secondary mb-4">{props.description}</p>
          <p className="text-right text-success fw-bold text-end m-0">R$ {props.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CardList;
