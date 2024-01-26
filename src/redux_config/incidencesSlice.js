import { createSlice } from "@reduxjs/toolkit"
import teams from "../data/teams"

const incidencesSlice = createSlice({
  name: "incidences",
  initialState: teams,
  reducers: {
    setGoal(state, action) {
      const { team, player, time, incidence } = action.payload
      const icon = "/icons/goal.png"

      if (team === "home") {
        state.home.incidences.score += 1
        state.home.incidences.goals.push({ time, player, icon })
      } else {
        state.away.incidences.score += 1
        state.away.incidences.goals.push({ time, player, icon })
      }
      state.globalIncidences.unshift({ team, player, time, icon, incidence })
    },
    setYellowCard(state, action) {
      const { team, player, time, incidence } = action.payload
      const icon = "/icons/yellow-card.png"
      if (team === "home") {
        state.home.incidences.yellowCard.push({ time, player, icon })
      } else {
        state.away.incidences.yellowCard.push({ time, player, icon })
      }
      state.globalIncidences.unshift({ team, player, time, icon, incidence })
    },
    setRedCard(state, action) {
      const { team, player, time, incidence } = action.payload
      const icon = "/icons/red-card.png"

      if (team === "home") {
        state.home.incidences.redCard.push({ time, player, icon })
      } else {
        state.away.incidences.redCard.push({ time, player, icon })
      }
      state.globalIncidences.unshift({ team, player, time, icon, incidence })
    },
    setSubstitutionSlice(state, action) {
      const { team, player, substitution, time, incidence } = action.payload
      const icon = "/icons/substitution.png"
      if (team === "home") {
        const i = state.home.lineup.indexOf(player)
        console.log(i)
      } else {
      }
      state.globalIncidences.unshift({
        team,
        player,
        substitution,
        time,
        icon,
        incidence,
      })
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
  setSubstitutionSlice,
  resetTeams,
} = incidencesSlice.actions
export default incidencesSlice.reducer
