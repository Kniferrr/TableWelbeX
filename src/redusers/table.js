import { createSlice } from '@reduxjs/toolkit'

export const table = createSlice({
  name: 'table',
  initialState: {
    sort: "name",
    page: 1,
    sortColomn: "",
    sortCondition: "",
    argument: "",
    sortState: false,
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
      state.argument = action.payload;
      state.sortState = false;
      },
      formIinputCondition: (state, action) => {
        state.sortCondition = action.payload;
        state.sortState = false;
        },
        forminputColomn: (state, action) => {
          state.sortColomn = action.payload;
          state.sortState = false;
          },
          resetSort: (state) => {
            state.page = 1;
            state.argument = "";
            state.sortCondition = "";
            state.sortColomn = "";
            state.sortState = false;
            },
            subminForm: (state) => {
              state.page = 1;
              state.sortState = true;
              },
  },
})

// Action creators are generated for each case reducer function
export const { SetSort,setNewPage,formInputChange,formIinputCondition,forminputColomn,resetSort,subminForm} = table.actions

export default table.reducer