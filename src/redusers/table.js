import { createSlice } from '@reduxjs/toolkit'

export const table = createSlice({
  name: 'table',
  initialState: {
    sort: "name",
    page: 1,
    sortColomn: "",
    sortCondition: "",
    argument: ""
  },
  reducers: {
    SetSort: (state, action) => {
      
      if(state.sort === action.payload){
        state.sort = `${"un"}${action.payload}`
      }else{
        state.sort = action.payload;
      }

    },
    setNewPage: (state, action) => {
      
    state.page = action.payload;
    },
    formInputChange: (state, action) => {
      state.argument = action.payload
  
        console.log(action.payload)
      },
      formIinputCondition: (state, action) => {
        state.sortCondition = action.payload
    
          console.log(action.payload)
        },
        forminputColomn: (state, action) => {
          state.sortColomn = action.payload
      
            console.log(action.payload)
          },
  },
})

// Action creators are generated for each case reducer function
export const { SetSort,setNewPage,formInputChange,formIinputCondition,forminputColomn} = table.actions

export default table.reducer