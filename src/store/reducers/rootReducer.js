import {combineReducers} from "redux"
import pinkReducer from "./pink"
import photosReducer from "./photos"

export default combineReducers({
  pink: pinkReducer,
  photos: photosReducer
})