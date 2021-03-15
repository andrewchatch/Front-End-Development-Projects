import React from "react";
import "../css/display.css";


class Display extends React.Component {

    render() {
      return (
        <div id="display">
          <p id="display-value">
            {this.props.currVal}
          </p>

        </div>
    );
  }
}

export default Display;
