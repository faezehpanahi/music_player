import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import ContextAPI from "../context/ContextAPI";

const ToggleList = () => {
  const context = useContext(ContextAPI);

  const showListSong = () => {
    return context.setDisplayListSong(!context.displayListSong);
  };

  return (
    <nav>
      <h1>Waves</h1>
      <button onClick={() => showListSong()}>
        Song List
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default ToggleList;
