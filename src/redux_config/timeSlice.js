import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  firstHalf: 2700, // 45 minutos en segundos
  secondHalf: 5400,
  time: 0,
  isFirstHalf: false,
  isSecondHalf: false,
  isTimeUp: false,
  isFinished: false,
}

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    firstHalf(state) {
      return { ...state, isFirstHalf: true }
    },
    updateTimer(state) {
      if (state.time < 2700 && (!state.isTimeUp || state.isFirstHalf)) {
        const updatedRemainingSeconds = state.time + 60
        return {
          ...state,
          time: Math.max(updatedRemainingSeconds, 0),
          isFirstHalf: updatedRemainingSeconds < 2700,
          isTimeUp: true,
        }
      }
      if (state.time < 5400 && state.isTimeUp) {
        const updatedRemainingSeconds = state.time + 60
        return {
          ...state,
          time: Math.max(updatedRemainingSeconds, 0),
          isSecondHalf: updatedRemainingSeconds > 2700,
        }
      }
      if (state.time >= 5400) {
        return { ...state, isSecondHalf: false, isFinished: true }
      }
      return state
    },
    secondHalf(state) {
      return { ...state, isSecondHalf: true }
    },
    resetTimer(state) {
      return {
        ...state,
        remainingSeconds: state.totalSeconds,
        isRunning: false,
      }
    },
  },
})

export const { firstHalf, updateTimer, secondHalf, resetTimer } =
  timeSlice.actions
export default timeSlice.reducer
