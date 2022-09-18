import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface FormState {
  id: string
  pw: string
  confirmPw: string
  email: string
  phone: string
}
const initialState: FormState = {
  id: '',
  pw: '',
  confirmPw: '',
  email: '',
  phone: '',
}
export const doSignUp = createAsyncThunk('userSlice/doSignUp', async (userDate) => {
  // axios.post('signUp/blabla', {})
  console.log('slice', userDate)
})

const userSlice = createSlice({
  name: 'useslice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doSignUp.fulfilled, (state, { payload }) => {
      // state.id = payload.id
    })
    builder.addCase(doSignUp.rejected, (state, { payload }) => {})
    builder.addCase(doSignUp.pending, (state) => {})
  },
})

export const userReducer = userSlice.reducer
// export const {} = userSlice.acions
