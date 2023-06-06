import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SearchResult = {
  page: '',
  results: []
}

export const SearchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    setSearchResult: (state, action: PayloadAction<SearchResult>) => {
      state.page = action.payload.page;
      state.results = action.payload.results;
    }
  }
})

export const { setSearchResult } = SearchSlice.actions
export default SearchSlice.reducer