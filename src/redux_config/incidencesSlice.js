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
      const { home, away } = state
      const icon = "/icons/substitution.png"

      const performSubstitution = (lineup, bench, player, substitution) => {
        const playerIndex = lineup.indexOf(player)
        const playerSubIndex = bench.indexOf(substitution)

        if (playerIndex !== -1 && playerSubIndex !== -1) {
          bench[playerSubIndex] = player + " *"
          lineup[playerIndex] = substitution
        }
      }

      if (team === "home" && home.incidences.subCount < 6) {
        console.log("tamo en home")
        performSubstitution(home.lineup, home.bench, player, substitution)
        home.incidences.subCount += 1
      } else if (team === "away" && away.incidences.subCount < 6) {
        console.log("tamo en away")
        performSubstitution(away.lineup, away.bench, player, substitution)
        away.incidences.subCount += 1
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
