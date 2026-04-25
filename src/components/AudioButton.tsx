import { useState } from "react";
import useSound from "use-sound";
import backgroundMusic from "../assets/Prologue.mp3";

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
    <button
      onClick={toggleAudio}
      className="fab-button"
      aria-label={isPlaying ? "Pause music" : "Play music"}
      title={isPlaying ? "Pause music" : "Play music"}
    >
      {isPlaying ? (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <rect x="6" y="4" width="4" height="16" rx="1" />
          <rect x="14" y="4" width="4" height="16" rx="1" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M8 5v14l11-7z" />
        </svg>
      )}
    </button>
  );
};

export default AudioButton;
