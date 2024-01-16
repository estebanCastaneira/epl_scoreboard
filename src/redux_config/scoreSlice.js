import { createSlice } from "@reduxjs/toolkit"

const scoreSlice = createSlice({
  name: "score",
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
  },
})
export const { setGoal } = scoreSlice.actions
export default scoreSlice.reducer
