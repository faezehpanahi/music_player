import React, { useContext, useRef, useState, useEffect } from "react";
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
    animatePercentage: 0,
  });

  useEffect(() => {
    const newSong = context.songs.map((songItem) => {
      if (songItem.id === context.corentSong.id) {
        return {
          ...songItem,
          active: true,
        };
      } else {
        return {
          ...songItem,
          active: false,
        };
      }
    });
    context.setSongs(newSong);
  }, [context.corentSong]);

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

    if (currentTime === duration) {
      const indexSong = context.songs.findIndex(
        (item) => item.id === context.corentSong.id
      );

      if (indexSong === context.songs.length - 1) {
        context.setCorentSong(context.songs[0]);
      } else {
        context.setCorentSong(context.songs[indexSong + 1]);
      }
      playMusic();
    }
    // calculate percentage
    const roundCurrentTime = Math.round(currentTime);
    const roundDuration = Math.round(duration);
    const animatePercentage = Math.round(
      (roundCurrentTime / roundDuration) * 100
    );
    // console.log(animatePercentage);
    setSongInfo({ ...songInfo, currentTime, duration, animatePercentage });
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

  const skipSong = (diraction) => {
    const indexSong = context.songs.findIndex(
      (item) => item.id === context.corentSong.id
    );
    // console.log(indexSong);
    if (diraction === "next") {
      if (indexSong === context.songs.length - 1) {
        context.setCorentSong(context.songs[0]);
      } else {
        context.setCorentSong(context.songs[indexSong + 1]);
      }
    }
    if (diraction === "back") {
      if (indexSong === 0) {
        context.setCorentSong(context.songs[context.songs.length - 1]);
      } else {
        context.setCorentSong(context.songs[indexSong - 1]);
      }
    }
  };

  const animateTrack = {
    transform: `translateX(${songInfo.animatePercentage}%)`,
  };

  return (
    <div className="player_container">
      <div className="time_control">
        <p>{timeFormatPlayer(songInfo.currentTime)}</p>
        {/* <p>{songInfo.currentTime}</p> */}
        <div
          className="track"
          style={{
            background: `linear-gradient(to right,${context.corentSong.color[0]},${context.corentSong.color[1]})`,
          }}
        >
          <input
            type="range"
            min={0}
            max={songInfo.duration}
            value={songInfo.currentTime}
            onChange={changeDragHandle}
          />
          <div style={animateTrack} className="animate_track"></div>
        </div>
        <p>{timeFormatPlayer(songInfo.duration)}</p>
      </div>
      <div className="play_control">
        <FontAwesomeIcon
          icon={faAngleLeft}
          size="2x"
          onClick={() => skipSong("back")}
        />
        <FontAwesomeIcon
          onClick={playMusic}
          icon={context.isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          icon={faAngleRight}
          size="2x"
          onClick={() => skipSong("next")}
        />
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
