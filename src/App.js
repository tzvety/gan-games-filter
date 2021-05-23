import React, { useState, useEffect } from "react";
import "./App.css";
import { GameList } from "./components/game-list/game-list.component";
import { ControlPanel } from "./components/control-panel/control-panel.component.jsx";

function App() {
  const [games, setGames] = useState([]);
  const [filteredGames, setFilteredGames] = useState();

  const handleChange = (e) => {
    setFilteredGames(
      games.filter((game) =>
        game.title.toLowerCase().includes(e.target.value.toLocaleLowerCase())
      )
    );
  };

  const handleFiltering = (tag) => {
    setFilteredGames(
      tag === "all" ? games : games.filter((game) => game.tags.includes(tag))
    );
  };

  useEffect(() => {
    fetch("/api/games")
      .then((response) => response.json())
      .then((games) => setGames(games));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Slots</h1>
        <ControlPanel
          handleChange={handleChange}
          handleFilter={handleFiltering}
        />
      </header>
      <section>
        <GameList games={filteredGames || games} />
      </section>
    </div>
  );
}

export default App;
