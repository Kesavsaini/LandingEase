import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  view: "mobile",
}

export const otherSlice = createSlice({
  name: 'other',
  initialState,
  reducers: {
    changeView: (state,action) => {
      state.view = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeView } = otherSlice.actions

export default otherSlice.reducer