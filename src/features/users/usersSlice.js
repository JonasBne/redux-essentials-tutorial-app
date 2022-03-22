import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { client } from '../../api/client'

const initialState = []

export const fetchUsers = createAsyncThunk('posts/fetchUsers', async () => {
  const response = await client.get('/fakeApi/users')
  console.log('response', response)
  return response.data
})

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload
    })
  },
})

export const usersReducer = usersSlice.reducer

export const selectAllUsers = (state) => state.users

export const selectUserById = (state, userId) =>
  state.users.find((user) => user.id === userId)
