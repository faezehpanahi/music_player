import React, { useContext } from "react";
import ContextAPI from "../context/ContextAPI";
import SongListItem from "./SongListItem";

const SongList = () => {
  const context = useContext(ContextAPI);

  return (
    <div
      className={`song_list ${context.displayListSong ? "" : "display_list"}`}
    >
      <h2>List Of Song</h2>
      <div className="song_list_items">
        {context.songs.map((song) => (
          <SongListItem song={song} />
        ))}
      </div>
    </div>
  );
};

export default SongList;
