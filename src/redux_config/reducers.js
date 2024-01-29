import { combineReducers } from "@reduxjs/toolkit"
import animationSlice from "./animationSlice"
import incidencesSlice from "./incidencesSlice"
import timeReducer from "./timeSlice"

const rootReducer = combineReducers({
  animation: animationSlice,
  incidences: incidencesSlice,
  time: timeReducer,
})

export default rootReducer
