import { createSlice } from '@reduxjs/toolkit'

export const cardSlice = createSlice({
  name: 'cards',
  initialState: {
    data: {}
  },
  reducers: {
    getDatafromApi: (state, action) => {
      state.data = action.payload;
    }
  },
})

// Action creators are generated for each case reducer function
export const { getDatafromApi } = cardSlice.actions

export default cardSlice.reducer