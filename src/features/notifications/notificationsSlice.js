import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { client } from '../../api/client'

export const fetchNotifications = createAsyncThunk(
  'notifications/fetchNotifications',
  async () => {
    const response = await client.get('/faleApi/notifications')
    return response.data
  }
)

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchNotifications.fulfilled, (state, action) => {
      console.log('state', state)
      state.notifications.push(action.payload)
      state.notifications.sort((a, b) => b.date.localeCompare(a.date))
    })
  },
})

export const notificationsReducer = notificationsSlice.reducer

export const selectAllNotifications = (state) => state.notifications
