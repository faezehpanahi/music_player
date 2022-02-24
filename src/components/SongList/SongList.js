import React, { useContext } from "react";
import ContextAPI from "../context/ContextAPI";
import SongListItem from "./SongListItem";

const SongList = () => {
  const context = useContext(ContextAPI);

  return (
    <div
      className={`song_list ${context.displayListSong ? "" : "display_list"}`}
    >
      <h1>List Of Song</h1>
      <div className="song_list_items">
        {context.songs.map((song) => (
          <SongListItem song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongList;
