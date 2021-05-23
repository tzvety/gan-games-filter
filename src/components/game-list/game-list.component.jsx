import React, { useRef, useEffect } from "react";
import { Game } from "../game/game.component";
import { wrapGrid } from "animate-css-grid";

import "./game-list.styles.css";

export const GameList = (props) => {
  const grid = useRef();

  useEffect(() => {
    wrapGrid(grid.current, { easing: "backOut", stagger: 10, duration: 400 });
  }, [grid]);

  return (
    <div className="grid-wrapper" ref={grid}>
      {props.games.map((game) => (
        // @ts-ignore
        <Game key={game.img} game={game} />
      ))}
    </div>
  );
};
