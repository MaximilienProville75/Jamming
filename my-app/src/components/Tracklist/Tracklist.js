import React from "react";
import "./Tracklist.css";
import Track from "../Track/Track";

export default class Tracklist extends React.Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.searchResults.map((track) => {
          return <Track key={track.id} />;
        })}
      </div>
    );
  }
}
