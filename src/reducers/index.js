import { combineReducers } from "redux";
import models from './models'
import renderedModels from './renderedModels'

export default combineReducers({
  models,
  renderedModels
})