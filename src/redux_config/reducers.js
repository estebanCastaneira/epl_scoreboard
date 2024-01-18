import { combineReducers } from "@reduxjs/toolkit"
import timeReducer from "./timeSlice"
import incidencesSlice from "./incidencesSlice"

const rootReducer = combineReducers({
  time: timeReducer,
  incidences: incidencesSlice,
})

export default rootReducer
