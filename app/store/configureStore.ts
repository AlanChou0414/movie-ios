import { combineReducers, configureStore } from "@reduxjs/toolkit"

//slice
import FormSlice from '@Slice/form.slice'
import SearchSlice from "@Slice/search.slice"

export const rootReducers = combineReducers({
  Form: FormSlice,
  Search: SearchSlice
})

const store = configureStore({
  reducer: rootReducers
})

export default store