import React from "react";
import "./Audio.css";

const AudioComponent = () => {
  return (
    <div className="player">
      <div className="player-controls">
        <button
          className="player-play-btn"
          role="button"
          aria-label="Play"
          data-playing="false"
        >
          <div className="player-icon-play">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <title>play</title>
              <polygon
                className="icon-play"
                points="19.05 12 6 3.36 6 20.64 19.05 12"
              />
              <rect className="icon-container" width="24" height="24" />
            </svg>
          </div>

          <div className="player-icon-pause hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              
            >
              <title>pause</title>
              <g>
                <rect
                  className="icon-pause"
                  x="6"
                  y="3.26"
                  width="4"
                  height="17.48"
                />
                <rect
                  className="icon-pause"
                  x="14"
                  y="3.26"
                  width="4"
                  height="17.48"
                />
              </g>
              <rect className="icon-container" width="24" height="24" />
            </svg>
          </div>
        </button>
        <div className="player-timeline">
          <span
            className="player-time player-time-duration"
            style={{display: "none"}}
          ></span>
          <div className="player-progress">
            <div className="player-progress-filled">
              <div className="progress-ball"></div>
            </div>
          </div>
          <span className="player-time player-time-current">00:00</span>
        </div>
        <div className="player-volume-container">
          <input
            type="range"
            id="volume"
            min="0"
            max="1"
            value="1"
            step="0.01"
            className="player-volume"
          />
        </div>
      </div>

      <audio
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/858/outfoxing.mp3"
        crossorigin="anonymous"
      ></audio>
    </div>
  );
};

export default AudioComponent;
