
import React, { useState,useEffect } from 'react';
import './audioPlayer.css';

interface AudioPlayerProps {
  music: string,
  mute: boolean
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ music, mute }) => {
  
  const [audio, setAudio] = useState();
  // let audio: HTMLAudioElement | null;
  
  useEffect(() => {
    if (audio) {
      audio.pause();
      audio.load();
      audio.play();
    }
    // return () => {
    //   effect
    // };
  }, [music,audio]);

  useEffect(() => {
    if (audio) {
      if (mute) {
        audio.pause();
        // console.log("mute music")
      } else {
        audio.play();
        // console.log("play music")
      }
    }
    // return () => {
    //   effect
    // };
  }, [mute,audio])

  return (
    <audio
      className="player"
      autoPlay
      preload="auto"
      controls={false}
      loop={true}
      muted={mute}
      ref={(audioref) => { setAudio(audioref) }}
    >
      <source src={process.env.PUBLIC_URL + "/audio/" + music} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
  );
};

export default React.memo(AudioPlayer, (prevProps, nextProps) => {
  return prevProps.music === nextProps.music && prevProps.mute === nextProps.mute
});
