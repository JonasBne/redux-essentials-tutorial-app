import { configureStore } from '@reduxjs/toolkit'
import { notificationsReducer } from '../features/notifications/notificationsSlice'
import { postsReducer } from '../features/posts/postSlice'
import { usersReducer } from '../features/users/usersSlice'

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  },
})
