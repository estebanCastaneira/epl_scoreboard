import { combineReducers } from "@reduxjs/toolkit"
import timeReducer from "./timeSlice"

const rootReducer = combineReducers({
  time: timeReducer,
})

export default rootReducer
