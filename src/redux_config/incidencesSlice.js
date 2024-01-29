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
    // setYellowCard(state, action) {
    //   const { team, player, time, incidence } = action.payload
    //   const iconY = "/icons/yellow-card.png"
    //   const iconR = "/icons/second-yellow.png"
    //   if (team === "home") {
    //     if (state.home.incidences.yellowCard.includes(player)) {
    //       state.globalIncidences.unshift({
    //         team,
    //         player,
    //         time,
    //         icon: iconR,
    //         incidence,
    //       })
    //     }

    //     state.home.incidences.yellowCard.push(player)
    //     state.globalIncidences.unshift({
    //       team,
    //       player,
    //       time,
    //       icon: iconY,
    //       incidence,
    //     })
    //   } else {
    //     if (state.away.incidences.yellowCard.includes(player)) {
    //       state.globalIncidences.unshift({
    //         team,
    //         player,
    //         time,
    //         icon: iconR,
    //         incidence,
    //       })
    //     }
    //     state.away.incidences.yellowCard.push(player)
    //     state.globalIncidences.unshift({
    //       team,
    //       player,
    //       time,
    //       icon: iconY,
    //       incidence,
    //     })
    //   }
    // },
    setYellowCard(state, action) {
      const { team, player, time, incidence } = action.payload
      const iconY = "/icons/yellow-card.png"
      const iconR = "/icons/second-yellow.png"
      const teamIncidences = team === "home" ? state.home : state.away

      if (teamIncidences.incidences.yellowCard.includes(player)) {
        teamIncidences.incidences.redCard.push(player)
        const playerIndex = teamIncidences.lineup.indexOf(player)
        teamIncidences.lineup[playerIndex] = player + " *"
        state.globalIncidences.unshift({
          team,
          player,
          time,
          icon: iconR,
          incidence,
        })
      } else {
        teamIncidences.incidences.yellowCard.push(player)
        state.globalIncidences.unshift({
          team,
          player,
          time,
          icon: iconY,
          incidence,
        })
      }
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

      if (team === "home" && home.incidences.subsCount <= 5) {
        performSubstitution(home.lineup, home.bench, player, substitution)
        home.incidences.subsCount += 1
      } else if (team === "away" && away.incidences.subsCount <= 5) {
        performSubstitution(away.lineup, away.bench, player, substitution)
        away.incidences.subsCount += 1
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
