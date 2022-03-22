import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = [
  {
    id: '1',
    title: 'First Post!',
    content: 'Hello!',
    userId: '0',
    date: '2022-03-22T08:58:39.710Z',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
  {
    id: '2',
    title: 'Second Post',
    content: 'More text',
    userId: '1',
    date: '2022-03-22T07:58:39.710Z',
    reactions: {
      thumbsUp: 0,
      hooray: 0,
      heart: 0,
      rocket: 0,
      eyes: 0,
    },
  },
]

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded: {
      reducer(state, action) {
        console.log('payload', action.payload)
        state.push(action.payload)
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
            date: new Date().toISOString(),
          },
        }
      },
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload
      const existingPost = state.find((post) => post.id === id)

      if (existingPost) {
        existingPost.title = title
        existingPost.content = content
      }
    },
    reactionAdded: {
      reducer(state, action) {
        const { postId, reaction } = action.payload
        const existingPost = state.find((post) => post.id === postId)
        if (existingPost) {
          existingPost.reactions[reaction]++
        }
      },
      prepare(postId, reaction) {
        return {
          payload: {
            postId,
            reaction,
          },
        }
      },
    },
  },
})

export const { postAdded, postUpdated, reactionAdded } = postsSlice.actions

export const postsReducer = postsSlice.reducer

export const selectAllPosts = (state) => state.posts

export const selectPostById = (state, postId) =>
  state.posts.find((post) => post.id === postId)
