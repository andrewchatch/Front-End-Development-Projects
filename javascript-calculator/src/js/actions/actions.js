import { UPDATE } from "../constants/action-types";
import { ADD } from "../constants/action-types";
import { SUBTRACT } from "../constants/action-types";
import { MULTIPLY } from "../constants/action-types";
import { DIVIDE } from "../constants/action-types";
import { CLEAR } from "../constants/action-types";
import { EQUALS} from "../constants/action-types";


export function updateDisplay(value) {
  return {
    type: UPDATE,
    payload: {
      val: value
    }
  }
};

export function addition(value) {
  return {
    type: ADD,
    payload: {
      val: value
    }
  }
};

export function subtraction(value) {
  return {
    type: SUBTRACT,
    payload: {
      val: value
    }
  }
};

export function multiplication(value) {
  return {
    type: MULTIPLY,
    payload: {
      val: value
    }
  }
};

export function division(value) {
  return {
    type: DIVIDE,
    payload: {
      val: value
    }
  }
};

export function clearDisplay() {
  return {
    type: CLEAR,
    payload: {
    }
  }
};

export function equals(value) {
  return {
    type: EQUALS,
    payload: {
      val: value
    }
  }
}
