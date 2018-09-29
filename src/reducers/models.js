import { SET_MODELS } from "../actions/AppActions";

export default (state = [], action = {}) => {
  switch (action.type) {

    case SET_MODELS:
      return action.payload;

    default:
      return state;

  }
}