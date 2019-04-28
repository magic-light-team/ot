// https://github.com/andrewngu/sound-redux/blob/master/client/src/components/audio.jsx

import PropTypes from 'prop-types';
import React, { Component } from 'react';

const propTypes = {
  audioUrl: PropTypes.string.isRequired,
  onLoadedMetadata: PropTypes.func.isRequired,
  onLoadStart: PropTypes.func.isRequired,
  onPause: PropTypes.func.isRequired,
  onPlay: PropTypes.func.isRequired,
};


class AudioPlayer extends Component {
  constructor() {
    super();
    this.audioElement = null;

    this.onEnded = this.onEnded.bind(this);
    this.onLoadedMetadata = this.onLoadedMetadata.bind(this);
    this.onLoadStart = this.onLoadStart.bind(this);
    this.onPause = this.onPause.bind(this);
    this.onPlay = this.onPlay.bind(this);

    this.toggleMuted = this.toggleMuted.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
  }

  componentDidMount() {
    const { audioElement } = this;
    audioElement.play();
  }

  componentDidUpdate(prevProps) {
    const { audioElement, props } = this;
    const { audioUrl } = props;
    if (prevProps.audioUrl !== audioUrl) {
      audioElement.play();
    }
  }

  onEnded() {
    const { playNextSong } = this.props;
    playNextSong();
  }

  onLoadedMetadata() {
    const { audioElement, props } = this;
    const { onLoadedMetadata } = props;
    onLoadedMetadata(Math.floor(audioElement.duration));
  }

  onLoadStart() {
    const { onLoadStart } = this.props;
    onLoadStart();
  }

  onPlay() {
    const { onPlay } = this.props;
    onPlay();
  }

  onPause() {
    const { onPause } = this.props;
    onPause();
  }

  toggleMuted() {
    const { audioElement } = this;
    const { muted } = audioElement;
    audioElement.muted = !muted;
  }

  togglePlay() {
    const { audioElement } = this;
    if (audioElement.paused) {
      audioElement.play();
    } else {
      audioElement.pause();
    }
  }

  render() {
    const { audioUrl } = this.props;

    return (
      <div>
        <audio
          id="audio"
          onEnded={this.onEnded}
          onLoadedMetadata={this.onLoadedMetadata}
          onLoadStart={this.onLoadStart}
          onPause={this.onPause}
          onPlay={this.onPlay}
          onTimeUpdate={this.onTimeUpdate}
          onVolumeChange={this.onVolumeChange}
          ref={(node) => { this.audioElement = node; }}
          src={audioUrl}
        />

      </div>
    );
  }
}

export default AudioPlayer;