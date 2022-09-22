import { createSlice } from '@reduxjs/toolkit'

export const table = createSlice({
  name: 'table',
  initialState: {
    sort: "name",
    page: 1,
    numAllPages: 1,
    sortColomn: "",
    sortCondition: "",
    argument: "",
    sortState: false,
    coutSort: 0,
    error: false
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
     
      },
      formIinputCondition: (state, action) => {
        state.sortCondition = action.payload;
        },
        forminputColomn: (state, action) => {
          state.sortColomn = action.payload;
         
          },
          resetSort: (state) => {
            state.page = 1;
            state.argument = "";
            state.sortCondition = "";
            state.sortColomn = "";
            state.sortState = false;
            state.coutSort++;
            },
            subminForm: (state) => {
              state.page = 1;
              state.sortState = true;
              state.coutSort++;
              },
              ERROR: (state) =>{
              state.error = true;
              },
              setnumAllPages: (state,action) =>{
                state.numAllPages = action.payload;
              }
  },
})

// Action creators are generated for each case reducer function
export const { SetSort,setNewPage,formInputChange,formIinputCondition,forminputColomn,resetSort,subminForm,ERROR,setnumAllPages} = table.actions

export default table.reducer