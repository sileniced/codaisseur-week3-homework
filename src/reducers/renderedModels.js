import { ADD_MODEL } from "../actions/AppActions";

export default (state = [], action = {}) => {
  switch (action.type) {

    case ADD_MODEL:
      return state.concat(action.payload);

    default:
      return state;

  }
}