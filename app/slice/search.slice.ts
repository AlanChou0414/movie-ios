import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ResultProps = {
  page: '',
  results: []
}

export const SearchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setSearchResult: (state, action: PayloadAction<ResultProps>) => {
      state.page = action.payload.page;
      state.results = action.payload.results;
    },
    removeSearchResult: () => {
      return initialState
    }
  }
})

export const { setSearchResult, removeSearchResult } = SearchSlice.actions
export default SearchSlice.reducer