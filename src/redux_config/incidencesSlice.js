import { createSlice } from "@reduxjs/toolkit"
import teams from "../data/teams"
const incidencesSlice = createSlice({
  name: "incidences",
  initialState: teams,
  reducers: {
    setGoal(state, action) {
      const team = action.payload
      if (team === "home") {
        state.home.incidences.score += 1
      } else {
        state.away.incidences.score += 1
      }
    },
    resetTeams(state, action) {
      return teams
    },
  },
})
export const { setGoal, resetTeams } = incidencesSlice.actions
export default incidencesSlice.reducer
