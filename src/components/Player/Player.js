import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = () => {
  return (
    <div className="player_container">
      <div className="time_control">
        <p>star time</p>
        <input type="range" />
        <p>end time</p>
      </div>
      <div className="play_control">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon icon={faPlay} size="2x" />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
    </div>
  );
};

export default Player;
