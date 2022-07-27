import table from "../../redusers/table"
import { configureStore } from '@reduxjs/toolkit'

export default configureStore({
  reducer: {
    table: table,
},
})