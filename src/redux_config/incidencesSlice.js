import { createSlice } from "@reduxjs/toolkit"
import teams from "../data/teams"
const incidencesSlice = createSlice({
  name: "incidences",
  initialState: teams,
  reducers: {
    setGoal(state, action) {
      const { team, player, time } = action.payload
      const icon = "/icons/goal.png"

      if (team === "home") {
        state.home.incidences.score += 1
        state.home.incidences.goals.push({ time, player, icon })
      } else {
        state.away.incidences.score += 1
        state.away.incidences.goals.push({ time, player, icon })
      }
    },
    setYellowCard(state, action) {
      const { team, player, time } = action.payload
      const icon = "/icons/yellow-card.png"
      if (team === "home") {
        state.home.incidences.yellowCard.push({ time, player, icon })
      } else {
        state.away.incidences.yellowCard.push({ time, player, icon })
      }
    },
    setRedCard(state, action) {
      const { team, player, time } = action.payload
      const icon = "/icons/red-card.png"

      if (team === "home") {
        state.home.incidences.redCard.push({ time, player, icon })
      } else {
        state.away.incidences.redCard.push({ time, player, icon })
      }
    },
    setSubstitution(state, action) {
      const { team, player, time } = action.payload
      const icon = ""
      if (team === "home") {
      } else {
      }
    },
    resetTeams(state, action) {
      return teams
    },
  },
})
export const {
  setGoal,
  setYellowCard,
  setRedCard,
  setSubstitution,
  resetTeams,
} = incidencesSlice.actions
export default incidencesSlice.reducer
