import { createSlice } from "@reduxjs/toolkit"
import teams from "../data/teams"
const incidencesSlice = createSlice({
  name: "incidences",
  initialState: teams,
  reducers: {
    setGoal(state, action) {
      const { team, player, time } = action.payload

      if (team === "home") {
        state.home.incidences.score += 1
        state.home.incidences.goals.push(`${time} ${player}`)
      } else {
        state.away.incidences.score += 1
        state.away.incidences.goals.push(`${time} ${player}`)
      }
    },
    setYellowCard(state, action) {
      const { team, player, time } = action.payload
      if (team === "home") {
        state.home.incidences.yellowCard.push(`${time} ${player}`)
      } else {
        state.away.incidences.yellowCard.push(`${time} ${player}`)
      }
    },
    setRedCard(state, action) {
      const { team, player, time } = action.payload

      if (team === "home") {
        state.home.incidences.redCard.push(`${time} ${player}`)
      } else {
        state.away.incidences.redCard.push(`${time} ${player}`)
      }
    },
    setSubstitution(state, action) {
      const { team, player, time } = action.payload
      if (team === "home") {
      } else {
      }
    },
    resetTeams(state, action) {
      return teams
    },
  },
})
export const { setGoal, resetTeams } = incidencesSlice.actions
export default incidencesSlice.reducer
