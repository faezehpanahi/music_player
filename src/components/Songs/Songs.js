import React, { useContext } from "react";
import ContextAPI from "../context/ContextAPI";

const Songs = () => {
  const context = useContext(ContextAPI);

  return (
    <div className="song_container">
      <img src={context.corentSong.coverPict} />
      <h2>{context.corentSong.musicName}</h2>
      <h3>{context.corentSong.artist}</h3>
    </div>
  );
};

export default Songs;
