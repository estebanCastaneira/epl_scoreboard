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
    setGoalAnimation(state, action) {},
    setInjuryTime(state, action) {},
    setRedCardAnimation(state, action) {},
    setSubstitutionAnimation(state, action) {},
    setYellowCardAnimation(state, action) {},
  },
})
export const {
  setGoalAnimation,
  setSubstitutionAnimation,
  setYellowCardAnimation,
  setRedCardAnimation,
} = animationSlice.actions
export default animationSlice.reducer
