import React, { useState } from "react";
import { SearchBox } from "../search-box/search-box.component";
import "./control-panel.styles.css";

export const ControlPanel = ({ handleChange, handleFilter }) => {
  const [active, setActive] = useState();
  return (
    <div className="control-panel">
      <nav>
        <button
          className={`all ${active === "all" ? "active" : ""}`}
          name="all"
          onClick={(e) => {
            setActive(e.target.name);
            handleFilter("all");
          }}
        >
          <br />
          All
        </button>
        <button
          className={`new ${active === "new" ? "active" : ""}`}
          name="new"
          onClick={(e) => {
            setActive(e.target.name);
            handleFilter("new");
          }}
        >
          <br />
          New
        </button>
        <button
          className={`top ${active === "top" ? "active" : ""}`}
          name="top"
          onClick={(e) => {
            setActive(e.target.name);
            handleFilter("top");
          }}
        >
          <br />
          Top
        </button>
      </nav>
      <SearchBox placeholder="Search" handleChange={handleChange} />
    </div>
  );
};
