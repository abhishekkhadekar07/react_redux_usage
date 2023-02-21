import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {id:'0',name:'Abhishek khadekar'},
  {id:'2',name:'sunil khadekar'},
  {id:'3',name:'sarika khadekar'}
]

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    
  }
})

export const selectAllUsers = (state) => state.users
export default usersSlice.reducer
