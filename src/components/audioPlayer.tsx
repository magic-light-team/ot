
import React from 'react';
import './audioPlayer.css';

interface AudioPlayerProps{
    music:string,
}

const AudioPlayer:React.FC<AudioPlayerProps> = ({music}) => {
  console.log("render ", music)
    return (
        <audio id="player" src={music} />
     );
};

export default AudioPlayer;
