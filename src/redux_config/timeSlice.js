import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalSeconds: 2700, // 45 minutos en segundos
  time: 0,
  isFirstTime: false,
  isSecondTime: false,
  isTimeUp: false,
  isFinished: false,
}

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    firstTime(state) {
      return { ...state, isFirstTime: true }
    },
    updateTimer(state) {
      if (state.time < 2700 && (!state.isTimeUp || state.isFirstTime)) {
        const updatedRemainingSeconds = state.time + 60
        return {
          ...state,
          time: Math.max(updatedRemainingSeconds, 0),
          isFirstTime: updatedRemainingSeconds < 2700,
          isTimeUp: true,
        }
      }
      if (state.time < 5400 && state.isTimeUp) {
        const updatedRemainingSeconds = state.time + 60
        return {
          ...state,
          time: Math.max(updatedRemainingSeconds, 0),
          isSecondTime: updatedRemainingSeconds > 2700,
        }
      }
      if (state.time >= 5400) {
        return { ...state, isSecondTime: false, isFinished: true }
      }
      return state
    },
    secondTime(state) {
      return { ...state, isSecondTime: true }
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

export const { firstTime, updateTimer, secondTime, resetTimer } =
  timeSlice.actions
export default timeSlice.reducer
