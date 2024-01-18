import { createSlice } from "@reduxjs/toolkit"

const incidencesSlice = createSlice({
  name: "incidences",
  initialState: { home: 0, away: 0 },
  reducers: {
    setGoal(state, action) {
      const { team } = action.payload
      if (team === "home") {
        state.home += 1
      } else if (team === "away") {
        state.away += 1
      }
    },
    resetScore(state, action) {
      return { home: 0, away: 0 }
    },
  },
})
export const { setGoal, resetScore } = incidencesSlice.actions
export default incidencesSlice.reducer
