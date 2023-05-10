import { useState } from "react";
import useSound from "use-sound";
import backgroundMusic from "../assets/Prologue.mp3";
import { PlayCircleFilled, PauseCircleFilled } from "@material-ui/icons";

const AudioButton = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [play, { stop }] = useSound(backgroundMusic, {
    volume: 0.5,
    loop: true,
  });

  const toggleAudio = () => {
    if (isPlaying) {
      stop();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div onClick={toggleAudio} className="audio-toggle">
      {isPlaying ? <PauseCircleFilled /> : <PlayCircleFilled />}
    </div>
  );
};

export default AudioButton;
