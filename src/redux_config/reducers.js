import { combineReducers } from "@reduxjs/toolkit"
import timeReducer from "./timeSlice"
import scoreReducer from "./scoreSlice"

const rootReducer = combineReducers({
  time: timeReducer,
  score: scoreReducer,
})

export default rootReducer
