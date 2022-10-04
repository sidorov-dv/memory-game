import React from "react";
import cl from "./TableRecords.module.css";

const TableRecords = ({ results, onClose }) => {
  if (
    !(
      results["first"].length ||
      results["second"].length ||
      results["third"].length
    )
  ) {
    return (
      <h2 className={cl.header} style={{ color: "#fdf100" }}>
        There are no results for the current game yet
      </h2>
    );
  }
  return (
    <div>
      <h2 className={cl.header}>Best three results for each game type</h2>
      <div className={cl.box_stat}>
        <div className={cl.item_stat}>
          <h3>Records for x8</h3>
          {results["first"].map((item, index) => (
            <p key={index}>
              {index + 1} - {item}
            </p>
          ))}
        </div>
        <div className={cl.item_stat}>
          <h3>Records for x12</h3>
          {results["second"].map((item, index) => (
            <p key={index}>
              {index + 1} - {item}
            </p>
          ))}
        </div>
        <div className={cl.item_stat}>
          <h3>Records for x16</h3>
          {results["third"].map((item, index) => (
            <p key={index}>
              {index + 1} - {item}
            </p>
          ))}
        </div>
      </div>
      <button className={cl.btn_closeModal} onClick={onClose}>
        Close
      </button>
    </div>
  );
};

export default TableRecords;
