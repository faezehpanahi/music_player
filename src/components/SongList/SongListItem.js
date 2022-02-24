import React, { useContext } from "react";
import ContextAPI from "../context/ContextAPI";

const SongListItem = ({ song }) => {
  const context = useContext(ContextAPI);

  const songSelect = () => {
    const selecedSong = context.songs.filter(
      (songItem) => songItem.id === song.id
    );
    context.setCorentSong(selecedSong[0]);

    const newSong = context.songs.map((songItem) => {
      if (songItem.id === song.id) {
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
    // console.log(newSong);
  };

  return (
    // <div className="song_item" onClick={() => context.setCorentSong(song)}>
    <div
      className={`song_item ${song.active ? "selected" : ""}`}
      onClick={songSelect}
    >
      <img src={song.coverPict} />
      <div className="song_description">
        <h3>{song.musicName}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  );
};

export default SongListItem;
