import { createSlice } from "@reduxjs/toolkit"
import teams from "../data/teams"
const incidencesSlice = createSlice({
  name: "incidences",
  initialState: teams,
  reducers: {
    setGoal(state, action) {
      const { team, player } = action.payload
      if (team === "home") {
        state.home.incidences.score += 1
        state.home.incidences.goals.push(player)
      } else {
        state.away.incidences.score += 1
        state.away.incidences.goals.push(player)
      }
    },
    resetTeams(state, action) {
      return teams
    },
  },
})
export const { setGoal, resetTeams } = incidencesSlice.actions
export default incidencesSlice.reducer
