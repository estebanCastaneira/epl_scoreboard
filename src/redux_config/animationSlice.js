import { createSlice } from "@reduxjs/toolkit"

const animationSlice = createSlice({
  name: "animation",
  initialState: {
    goal: { home: false, away: false },
    injuryTime: false,
    redCard: false,
    substitution: false,
    yellowCard: false,
  },
  reducers: {
    setGoalAnimation(state, action) {
      const team = action.payload
      if (team === "home") {
        state.goal.home = true
      } else {
        state.goal.away = true
      }
    },
    setInjuryTimeAnimation(state, action) {
      state.injuryTime = action.payload
    },
    setRedCardAnimation(state, action) {
      state.redCard = action.payload
    },
    setSubstitutionAnimation(state, action) {
      state.substitution = action.payload
    },
    setYellowCardAnimation(state, action) {
      state.yellowCard = action.payload
    },
  },
})
export const {
  setGoalAnimation,
  setInjuryTimeAnimation,
  setSubstitutionAnimation,
  setYellowCardAnimation,
  setRedCardAnimation,
} = animationSlice.actions
export default animationSlice.reducer
