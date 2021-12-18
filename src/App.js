import "./app.scss";
import Player from "./components/Player/Player";
import Songs from "./components/Songs/Songs";

function App() {
  return (
    <div className="App">
      <h1>music player</h1>
      <Songs />
      <Player />
    </div>
  );
}

export default App;
