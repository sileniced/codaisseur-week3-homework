import { combineReducers } from "redux";
import computerModels from './computerModels'
import renderedComputerModels from './renderedComputerModels'

export default combineReducers({
  computerModels,
  renderedComputerModels
})