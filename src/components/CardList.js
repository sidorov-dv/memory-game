import React from "react";
import CardItem from "./CardItem";
import cl from "./CardList.module.css";

const CardList = ({ cards, onChose, one, two, disabled }) => {
  const choseCards = (card) => {
    onChose(card);
  };

  return (
    <div className={cl.box_styles}>
      {cards.map((item) => (
        <CardItem
          key={item.id}
          card={item}
          onSelected={choseCards}
          flipCard={item === one || item === two || item.isMatched}
          disabled={disabled}
        />
      ))}
    </div>
  );
};

export default CardList;
