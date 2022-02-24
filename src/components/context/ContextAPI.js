import { createContext } from "react";

const ContextAPI = createContext({
  songs: [],
  corentSong: {},
  isPlaying: false,
  displayListSong: false,
  setIsPlaying: () => {},
  setCorentSong: () => {},
  setSongs: () => {},
  setDisplayListSong: () => {},
});

export default ContextAPI;
