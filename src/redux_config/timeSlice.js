import { createSlice } from "@reduxjs/toolkit"

const timeSlice = createSlice({
  name: "time",
  initialState: "00:00",
  reducers: {
    firstTime(state, action) {
      console.log(action.payload)
      return state
    },
  },
})
export const { firstTime } = timeSlice.actions
export default timeSlice.reducer
