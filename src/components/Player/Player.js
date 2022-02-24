import React, { useContext, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import ContextAPI from "../context/ContextAPI";

const Player = () => {
  const context = useContext(ContextAPI);

  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
  });

  const musicRef = useRef(null);
  const playMusic = () => {
    if (context.isPlaying) {
      musicRef.current.pause();
      context.setIsPlaying(!context.isPlaying);
    } else {
      musicRef.current.play();
      context.setIsPlaying(!context.isPlaying);
    }
    // console.log(musicRef);
  };

  const infoTimeHandle = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({ ...songInfo, currentTime, duration });
    // console.log(duration);
    // console.log(currentTime);
  };

  const timeFormatPlayer = (time) => {
    const sec = parseInt(time, 10);
    let minutes = Math.floor(sec / 60);
    let seconds = sec - minutes * 60;
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return (
      // Math.floor(time / 60) + ":" + ("0" + Math.floor(time / 60)).slice(-2)
      minutes + ":" + seconds
    );
  };

  const changeDragHandle = (e) => {
    musicRef.current.currentTime = e.target.value;
  };

  return (
    <div className="player_container">
      <div className="time_control">
        <p>{timeFormatPlayer(songInfo.currentTime)}</p>
        {/* <p>{songInfo.currentTime}</p> */}
        <input
          type="range"
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={changeDragHandle}
        />
        <p>{timeFormatPlayer(songInfo.duration)}</p>
      </div>
      <div className="play_control">
        <FontAwesomeIcon icon={faAngleLeft} size="2x" />
        <FontAwesomeIcon
          onClick={playMusic}
          icon={context.isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon icon={faAngleRight} size="2x" />
      </div>
      <audio
        onLoadedMetadata={infoTimeHandle}
        onTimeUpdate={infoTimeHandle}
        ref={musicRef}
        src={context.corentSong.audioAddress}
      ></audio>
    </div>
  );
};

export default Player;
