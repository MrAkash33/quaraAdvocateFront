import { createSlice } from '@reduxjs/toolkit'

const initState = {
    email:'',
    password:''
  }
export const loginSlice = createSlice({
    name: 'login',
    initialState: initState,
    reducers: {
        login:(state, action) => {
            state[action.payload.name] = action.payload.value
        }
    }
  })
  
  // Action creators are generated for each case reducer function
  export const { login } = loginSlice.actions
  
  export default loginSlice.reducer