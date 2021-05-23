import React from "react";
import "./game.styles.css";

export const Game = ({ game }) => {
  return (
    <div className={game.size > 1 ? "double" : ""}>
      <img
        src={`../images/${game.img}.png`}
        alt={`${game.title} preview`}
        title={game.title}
      />
    </div>
  );
};
