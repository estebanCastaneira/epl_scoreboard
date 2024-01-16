import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  totalSeconds: 2700, // 45 minutos en segundos
  initialTime: 0,
  isRunning: false,
}

const timeSlice = createSlice({
  name: "time",
  initialState,
  reducers: {
    firstTime(state) {
      return { ...state, isRunning: true }
    },
    updateTimer(state) {
      if (state.initialTime < 2700) {
        const updatedRemainingSeconds = state.initialTime + 20
        return {
          ...state,
          initialTime: Math.max(updatedRemainingSeconds, 0),
          isRunning: updatedRemainingSeconds < 2700,
        }
      }
      return state
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

export const { firstTime, updateTimer, resetTimer } = timeSlice.actions
export default timeSlice.reducer
