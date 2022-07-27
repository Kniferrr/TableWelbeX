import { createSlice } from '@reduxjs/toolkit'

export const table = createSlice({
  name: 'table',
  initialState: {
    sort: "name",
    page: 1,
  },
  reducers: {
    SetSort: (state, action) => {
      
      if(state.sort === action.payload){
        state.sort = `${"un"}${action.payload}`
      }else{
        state.sort = action.payload;
      }

      console.log(state.sort)
    },
  },
})

// Action creators are generated for each case reducer function
export const { SetSort } = table.actions

export default table.reducer