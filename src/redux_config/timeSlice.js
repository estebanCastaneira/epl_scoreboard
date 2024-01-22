import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firstHalf: 2700,
  secondHalf: 5400,
  injuryTime: 0,
  time: 0,
  isStarted: false,
  isFirstHalf: false,
  isSecondHalf: false,
  isHalfTime: false,
  isFinished: false,
}
const updateRemainingSeconds = (state, additionalTime) => {
  const updatedRemainingSeconds = state.time + additionalTime
  return {
    ...state,
    time: Math.max(updatedRemainingSeconds, 0),
  }
}

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    firstHalf(state) {
      return { ...state, isFirstHalf: true, isStarted: true }
    },
    updateTimer(state) {
      const interval = 60
      if (
        state.time < state.firstHalf + state.injuryTime &&
        state.isFirstHalf
      ) {
        const updatedRemainingSeconds = state.time + interval
        return {
          ...state,
          time: Math.max(updatedRemainingSeconds, 0),
          isFirstHalf:
            updatedRemainingSeconds < state.firstHalf + state.injuryTime,
          isHalfTime: true,
        }
      }
      if (
        state.time < state.secondHalf + state.injuryTime &&
        state.isSecondHalf
      ) {
        const updatedRemainingSeconds = state.time + interval
        return {
          ...state,
          time: Math.max(updatedRemainingSeconds, 0),
          isSecondHalf: true,
        }
      }
      if (state.time >= state.secondHalf) {
        return { ...state, isSecondHalf: false, isFinished: true }
      }
      return state
    },
    secondHalf(state, action) {
      return { ...state, isSecondHalf: true }
    },
    resetTimer(state, action) {
      return initialState
    },
  },
})

export const { firstHalf, updateTimer, secondHalf, resetTimer } =
  timeSlice.actions
export default timeSlice.reducer
