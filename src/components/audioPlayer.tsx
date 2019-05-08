
import React,{useEffect} from 'react';
import './audioPlayer.css';

interface AudioPlayerProps {
  music: string,
  mute: boolean
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ music, mute }) => {

  let audio:HTMLAudioElement;

  useEffect(() => {
    audio.pause();
    audio.load();
    audio.play();
    
    // return () => {
    //   effect
    // };
  }, [music]);

  useEffect(() => {
    if(mute)
    {
      console.log("mute music")
    }else{
      console.log("play music")
    }
    // return () => {
    //   effect
    // };
  }, [mute])

  return (
    <audio 
      className="player" 
      autoPlay 
      preload="auto" 
      controls={false}
      loop={true}
      muted={mute}
      ref={(audioref)=>{audio = audioref || new Audio()}}
    >
      <source src={process.env.PUBLIC_URL + "/audio/" + music} type="audio/mpeg" />
      Your browser does not support the audio tag.
    </audio>
  );
};

export default React.memo(AudioPlayer,(prevProps, nextProps)=>{
  return prevProps.music === nextProps.music
});
