import React, { useState } from "react";
import "./app.scss";
import Player from "./components/Player/Player";
import Songs from "./components/Songs/Songs";
import data from "./components/DataMusic/DataMusic";
import ContextAPI from "./components/context/ContextAPI";
import SongList from "./components/SongList/SongList";
import ToggleList from "./components/ToggleList/ToggleList";

function App() {
  const [songs, setSongs] = useState(data);
  const [corentSong, setCorentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [displayListSong, setDisplayListSong] = useState(false);

  return (
    <ContextAPI.Provider
      value={{
        songs: songs,
        corentSong: corentSong,
        isPlaying: isPlaying,
        setIsPlaying: setIsPlaying,
        setCorentSong: setCorentSong,
        setSongs: setSongs,
        displayListSong: displayListSong,
        setDisplayListSong: setDisplayListSong,
      }}
    >
      <div className="App">
        <h1 className="header">music player</h1>
        <ToggleList />
        <Songs />
        <Player />
        <SongList />
      </div>
    </ContextAPI.Provider>
  );
}

export default App;
