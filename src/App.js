import React, {useState, useRef} from "react";
import Player from "./Components/Player";
import Song from "./Components/Song";
import './Styles/App.scss';
import data from "./data";
import Library from "./Components/Library";

function App() {

  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
});
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({...songInfo, currentTime : current, duration})
};
 
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player setSongInfo={setSongInfo} songInfo={songInfo} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong ={currentSong} audioRef={audioRef} />
      <Library setSongs={setSongs} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
