import React from "react";
import "./Track.css";

export default class Track extends React.Component {
  renderAction() {
    if (isRemoval) {
      return <button className="Track-action"> - </button>;
    }
    if (!isRemoval) {
      return <button className="Track-action"> + </button>;
    }
  }

  render() {
    return (
      <div class="Track">
        <div class="Track-information">
          <h3>{this.props.track.name}</h3>
          <p>
            {this.props.track.artist} {this.props.track.album}
          </p>
        </div>
        {/* <button class="Track-action"><!-- + or - will go here --></button> */}
      </div>
    );
  }
}
