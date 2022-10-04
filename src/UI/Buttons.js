import React from "react";
import "./Buttons.css";

const Buttons = ({ getCards, onShow }) => {
  return (
    <div className="box_btn">
      <button className="btn_newGame" onClick={getCards.bind(null, 8)}>
        New game 8x2
      </button>
      <button className="btn_newGame" onClick={getCards.bind(null, 6)}>
        New game 6x2
      </button>
      <button className="btn_newGame" onClick={getCards.bind(null, 4)}>
        New game 4x2
      </button>
      <button className="btn_newGame" onClick={onShow}>
        Records
      </button>
    </div>
  );
};

export default Buttons;
