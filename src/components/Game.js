import React, { useEffect, useState } from "react";
import { initialCards } from "../data/cards";
import CardField from "../UI/CardField";
import CardList from "./CardList";
import TableRecords from "./TableRecords";
import Buttons from "../UI/Buttons";
import Modal from "../UI/Modal";
import cl from "./Game.module.css";

const Game = () => {
  const [cards, setCards] = useState([]);
  const [one, setOne] = useState(null);
  const [two, setTwo] = useState(null);
  const [turns, setTurns] = useState(0);
  const [disabled, setDisabled] = useState(false);
  const [isShowRecords, setIsShowRecords] = useState(false);
  const [tableResults, setTableResults] = useState({
    first: [],
    second: [],
    third: [],
  });

  useEffect(() => {
    getCards(8);
  }, []);

  useEffect(() => {
    if (cards.length === 16) {
      let allMatched = cards
        .map((card) => {
          return card.isMatched;
        })
        .filter((item) => item);
      if (allMatched.length === cards.length) {
        if (tableResults["third"].length < 3) {
          setTableResults((prev) => {
            return {
              ...prev,
              third: [...prev["third"]].concat(turns).sort((a, b) => a - b),
            };
          });
        } else if (tableResults["third"].length === 3) {
          setTableResults((prev) => {
            return {
              ...prev,
              third: [...prev["third"]]
                .concat(turns)
                .sort((a, b) => a - b)
                .slice(0, prev["third"].length),
            };
          });
        }
      }
    }
    if (cards.length === 12) {
      let allMatched = cards
        .map((card) => {
          return card.isMatched;
        })
        .filter((item) => item);
      if (allMatched.length === cards.length) {
        if (tableResults["second"].length < 3) {
          setTableResults((prev) => {
            return {
              ...prev,
              second: [...prev["second"]].concat(turns).sort((a, b) => a - b),
            };
          });
        } else if (tableResults["second"].length === 3) {
          setTableResults((prev) => {
            return {
              ...prev,
              second: [...prev["second"]]
                .concat(turns)
                .sort((a, b) => a - b)
                .slice(0, prev["second"].length),
            };
          });
        }
      }
    }
    if (cards.length === 8) {
      let allMatched = cards
        .map((card) => {
          return card.isMatched;
        })
        .filter((item) => item);
      if (allMatched.length === cards.length) {
        if (tableResults["first"].length < 3) {
          setTableResults((prev) => {
            return {
              ...prev,
              first: [...prev["first"]].concat(turns).sort((a, b) => a - b),
            };
          });
        } else if (tableResults["first"].length === 3) {
          setTableResults((prev) => {
            return {
              ...prev,
              first: [...prev["first"]]
                .concat(turns)
                .sort((a, b) => a - b)
                .slice(0, prev["first"].length),
            };
          });
        }
      }
    }
    // eslint-disable-next-line
  }, [cards]);

  useEffect(() => {
    if (one && two) {
      setDisabled(true);
      if (one.title === two.title) {
        setCards((prev) => {
          return prev.map((card) => {
            if (card.title === one.title) {
              return { ...card, isMatched: true };
            } else return card;
          });
        });
        resetSelect();
      } else {
        setTimeout(() => resetSelect(), 1000);
      }
    }
  }, [one, two]);

  const getCards = (quantity) => {
    let shuffleCardsArray = [
      ...initialCards.slice(0, quantity),
      ...initialCards.slice(0, quantity),
    ]
      .map((item) => ({ ...item, id: Math.random().toFixed(5) }))
      .sort((a, b) => Math.random() - 0.5);
    setOne(null);
    setTwo(null);
    setCards(shuffleCardsArray);
    setTurns(0);
  };

  const twoCardsSelect = (card) => {
    if (!one) {
      setOne(card);
    } else if (!two) {
      setTwo(card);
    }
  };

  function resetSelect() {
    setOne(null);
    setTwo(null);
    setTurns((prev) => prev + 1);
    setDisabled(false);
  }

  const showRecords = () => {
    setIsShowRecords(true);
  };

  const hideModal = () => {
    setIsShowRecords(false);
  };

  return (
    <div className={cl.Game}>
      {isShowRecords && (
        <Modal onCloseModal={hideModal}>
          <TableRecords results={tableResults} onClose={hideModal} />
        </Modal>
      )}
      <h1 className={cl.name}>Memory game</h1>
      <Buttons getCards={getCards} onShow={showRecords} />
      <p className={cl.turns_count}>Turns: {turns}</p>
      <CardField>
        <CardList
          cards={cards}
          onChose={twoCardsSelect}
          one={one}
          two={two}
          disabled={disabled}
        />
      </CardField>
    </div>
  );
};

export default Game;
