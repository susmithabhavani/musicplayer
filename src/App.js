
import {useState, useEffect} from 'react';
import Player from './COMPONENTS/Player';
import Details from './COMPONENTS/Details';
import Controls from './COMPONENTS/Controls';
import "./COMPONENTS/style.css"

function App() {
  
  const [songs] = useState([
    {
      title: "Oh Manasa",
      artist: "Shravan Bharadwaj,Lalitha Kavya",
      img_src: "./images/2.jpeg",
      src: "./songs/Oh Manasa.mp3",
    
    },
    {
      title: "Sita Ramam Theme",
      artist: "Vishal Chandhrasekar",
      img_src: "./images/1.jpeg",
      src: "./songs/Sita Ramam Theme.mp3"
    },
    {
      title: "Tharali Tharali",
      artist: "Artist 3",
      img_src: "./images/1.jpeg",
      src: "./songs/Tharali Tharali.mp3"
    },
    {
      title: "Wedding Anthem",
      artist: "Artist 4",
      img_src: "./images/2.jpeg",
      src: "./songs/Wedding Anthem.mp3"
    }
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  
  
  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
    
    <div className="App">
      
       
      <Player 
        currentSongIndex={currentSongIndex} 
        setCurrentSongIndex={setCurrentSongIndex} 
        nextSongIndex={nextSongIndex} 
        songs={songs}
      />
    
    </div>
  );
}

export default App;