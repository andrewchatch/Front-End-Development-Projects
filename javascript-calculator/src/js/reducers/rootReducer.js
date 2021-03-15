import { UPDATE } from "../constants/action-types";
import { ADD } from "../constants/action-types";
import { SUBTRACT } from "../constants/action-types";
import { MULTIPLY } from "../constants/action-types";
import { DIVIDE } from "../constants/action-types";
import { CLEAR } from "../constants/action-types";
import { EQUALS } from "../constants/action-types";
import * as math from "mathjs";

const initialState = {
  currVal: '0',
  history: '',
  prevOp: ''
};

export default function rootReducer(state = initialState, action) {
  switch( action.type ) {
    case UPDATE:
      document.getElementById('test').innerHTML = state.history;
      if((state.currVal.includes('.') && action.payload.val === '.') || state.currVal.length > 7){
        return {
          ...state
        }
      }
      else {
        return {
          ...state,
          currVal: state.currVal === "0" ? action.payload.val : state.currVal.concat(action.payload.val)
        }
      }
    case ADD:
      if(/[*/]$/.test(state.history) && state.currVal === '') {
        return {
          ...state,
          history: state.history.slice(0,-1) + state.currVal + "+",
          currVal: '',
          prevOp: '+'
        }
      }
      else if(/[*/]-$/.test(state.history) && state.currVal === '') {
        return {
          ...state,
          history: state.history.slice(0,-2) + state.currVal + "+",
          currVal: '',
          prevOp: '+'
        }
      }
      else {
        return {
          ...state,
          history: state.prevOp==="=" ? state.currVal + "+" : state.history + state.currVal + "+",
          currVal: '',
          prevOp: '+'
        }
      }

    case SUBTRACT:
        return {
            ...state,
            history: state.prevOp==="=" ? state.currVal + "-" : state.history + state.currVal + "-",
            currVal: '',
            prevOp: '-'
          }

    case MULTIPLY:
      if(/[+/]$/.test(state.history) && state.currVal === '') {
        return {
          ...state,
          history: state.history.slice(0,-1) + state.currVal + "*",
          currVal: '',
          prevOp: "*"
        }
      }
      else if(/[+/]-$/.test(state.history) && state.currVal === '') {
        return {
          ...state,
          history: state.history.slice(0,-2) + state.currVal + "*",
          currVal: '',
          prevOp: '*'
        }
      }
      else {
        return {
          ...state,
          history: state.prevOp==="=" ? state.currVal + "*" : state.history + state.currVal + "*",
          currVal: '',
          prevOp: "*"
        }
      }

    case DIVIDE:
      if(/[+*]$/.test(state.history) && state.currVal === '') {
        return {
          ...state,
          history: state.history.slice(0,-1) + state.currVal + "/",
          currVal: '',
          prevOp: "/"
        }
      }
      else if(/[+*]-$/.test(state.history) && state.currVal === '') {
        return {
          ...state,
          history: state.history.slice(0,-2) + state.currVal + "/",
          currVal: '',
          prevOp: '/'
        }
      }
      else {
        return {
          ...state,
          history: state.prevOp==="=" ? state.currVal + "/" : state.history + state.currVal + "/",
          currVal: '',
          prevOp: "/"
        }
      }


    case EQUALS:
      const exp = state.history + state.currVal;
      const numExp = math.evaluate(exp);
      if(state.prevOp === "=")
      {
        return {
          ...state
        }
      }
      else {
        return {
          ...state,
          history: numExp.toString(),
          currVal: numExp.toString(),
          prevOp: "="
        }
      }

    case CLEAR:
      return {
        currVal: '0',
        prevOp: '',
        history: ''
      }
    default:
      return state;
  }
}
