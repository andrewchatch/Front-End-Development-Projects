import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id={this.props.id} className="button text-center" onClick={updateDisplay(this.props.val)}>
        {this.props.val}
      </div>
    );
  }
}

export default Button;
