import React, {useState} from "react";
import Player from "./Components/Player";
import Song from "./Components/Song";
import './Styles/App.scss';
import data from "./data";

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
 
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;
