import { createSlice } from "@reduxjs/toolkit"

const initialState: InputType = {
  inputValue: ''
}

const FormSlice = createSlice({
  name: 'Form',
  initialState,
  reducers: {
    setInputValue: (state, action) => {
      state.inputValue = action.payload
    },
    clearInputValue: () => {
      return initialState
    }
  }
})

export const { setInputValue, clearInputValue } = FormSlice.actions
export default FormSlice.reducer