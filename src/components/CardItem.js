import React from "react";
import cl from "./CardItem.module.css";

const CardItem = ({ card, onSelected, flipCard, disabled }) => {
  const selectCard = () => {
    if (!disabled) {
      onSelected(card);
    }
  };

  return (
    <div className={`${cl.item_styles} ${flipCard ? cl.flipped : ""}`}>
      <img src={card.src} alt={card.title} className={cl.animals} />
      <img
        src="./images/cover.jpg"
        alt="cover"
        className={cl.cover}
        onClick={selectCard}
      />
    </div>
  );
};

export default CardItem;
