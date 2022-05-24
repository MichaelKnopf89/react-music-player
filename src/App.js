import React, {useState, useRef} from "react";
import Player from "./Components/Player";
import Song from "./Components/Song";
import './Styles/App.scss';
import data from "./data";
import Library from "./Components/Library";
import Nav from "./Components/Nav"

function App() {

  const audioRef = useRef(null);
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  });

  const [libraryStatus, setLibraryStatus] = useState(false);
  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo, currentTime : current, duration})
  };
 
  return (
    <div className="App">
      <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
      <Song currentSong={currentSong} />
      <Player setSongInfo={setSongInfo} songInfo={songInfo} setIsPlaying={setIsPlaying} isPlaying={isPlaying} currentSong ={currentSong} audioRef={audioRef} />
      <Library libraryStatus={libraryStatus} setSongs={setSongs} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying}/>
      <audio onLoadedMetadata={timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
    </div>
  );
}

export default App;
