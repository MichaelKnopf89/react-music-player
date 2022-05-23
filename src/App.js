import React, {useState} from "react";
import Player from "./Components/Player";
import Song from "./Components/Song";
import './Styles/App.scss';
import data from "./data";
import Library from "./Components/Library";

function App() {

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
 
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong ={currentSong} />
      <Library songs={songs}/>
    </div>
  );
}

export default App;
