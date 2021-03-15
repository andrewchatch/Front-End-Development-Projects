import React from "react";
import "../css/button.css";
import { updateDisplay } from "../actions/actions";
import { addition } from "../actions/actions";
import { subtraction } from "../actions/actions";
import { multiplication } from "../actions/actions";
import { division } from "../actions/actions";
import { clearDisplay } from "../actions/actions";
import { equals } from "../actions/actions";
import { connect } from "react-redux";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if(this.props.id === "clear") {
      this.props.clearDisplay();
    }
    else if(this.props.id === "add") {
      this.props.addition(this.props.val);
    }
    else if(this.props.id === "subtract") {
      this.props.subtraction(this.props.val);
    }
    else if(this.props.id === "multiply") {
      this.props.multiplication(this.props.val);
    }
    else if(this.props.id === "divide") {
      this.props.division(this.props.val);
    }
    else if(this.props.id === "equals") {
      this.props.equals(this.props.val);
    }
    else if(this.props.type === "number" || this.props.type === "decimal") {
      this.props.updateDisplay(this.props.val);
    }
  }

  render() {
    return (
      <div id={this.props.id} className="button text-center" onClick={this.handleClick}>
        {this.props.val}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  updateDisplay: currVal => dispatch(updateDisplay(currVal)),
  addition: currVal => dispatch(addition(currVal)),
  subtraction: currVal => dispatch(subtraction(currVal)),
  multiplication: currVal => dispatch(multiplication(currVal)),
  division: currVal => dispatch(division(currVal)),
  equals: (currVal) => dispatch(equals(currVal)),
  clearDisplay: () => dispatch(clearDisplay())
});



export default connect(null, mapDispatchToProps)(Button);
