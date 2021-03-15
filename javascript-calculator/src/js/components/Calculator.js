import React from 'react';
import Button from "./Button";
import Display from "./Display";
import { getDisplay } from "../store/store";
import { connect } from "react-redux";
import "../css/calculator.css";

const mapStateToProps = (state) => {
  return {
    currVal: getDisplay(state)
  }
};

class ConnectedCalculator extends React.Component {

  render() {
    return (
      <div>
        <Display currVal={this.props.currVal} />
        <div className="container">
          <div className="row">
            <div className="col-xs-3">
              <Button id="clear" val="C" type="clear"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3">
              <Button id="seven" val="7" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="eight" val="8" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="nine" val="9" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="multiply" val="X" type="operator"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3">
              <Button id="four" val="4" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="five" val="5" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="six" val="6" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="divide" val="/" type="operator"/>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3">
              <Button id="one" val="1" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="two" val="2" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="three" val="3" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="add" val="+" type="operator" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-3">
              <Button id="zero" val="0" type="number"/>
            </div>
            <div className="col-xs-3">
              <Button id="decimal" val="." type="decimal"/>
            </div>
            <div className="col-xs-3">
              <Button id="equals" val="=" type="equals"/>
            </div>
            <div className="col-xs-3">
              <Button id="subtract" val="-" type="operator"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Calculator = connect(mapStateToProps)(ConnectedCalculator);

export default Calculator;
