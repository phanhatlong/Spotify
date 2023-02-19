import React, { Component } from "react";
import PropTypes from "prop-types";
import "react-h5-audio-player/lib/styles.css";
import H5AudioPlayer from "react-h5-audio-player";
import { useContext } from "react";
import { Songs } from "../Context";

export default function Playing() {
  const { song } = useContext(Songs);
  return (
    <div>
      <H5AudioPlayer
        className="play-music"
        src={song.url}
        layout="stacked reverse"
        showSkipControls={true}
        showJumpControls={false}
      ></H5AudioPlayer>
    </div>
  );
}
