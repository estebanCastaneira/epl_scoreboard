import { createSlice } from "@reduxjs/toolkit"
import teams from "../data/teams"
const incidencesSlice = createSlice({
  name: "incidences",
  initialState: teams,
  reducers: {
    setGoal(state, action) {},
    resetScore(state, action) {
      return teams
    },
  },
})
export const { setGoal, resetScore } = incidencesSlice.actions
export default incidencesSlice.reducer
