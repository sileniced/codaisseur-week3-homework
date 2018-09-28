import { SET_COMPUTER_MODELS } from "../actions/AppActions";

export default (state = [], action = {}) => {
  switch (action.type) {

    case SET_COMPUTER_MODELS:
      return action.payload;

    default:
      return state;

  }
}