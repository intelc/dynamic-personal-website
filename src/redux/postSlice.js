/* eslint-disable no-param-reassign */
import { createSlice, current } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    posts: [],

  },
  reducers: {
    createPost: (state, action) => {
      action.payload.id = uuidv4()

      state.posts = [...state.posts, action.payload]
      // console.log(state.posts)
    },
    updatePost: (state, action) => {
      // console.log(current(state.posts))

      state.posts = state.posts.map(post => {
        // console.log(action.payload.title)

        if (post.id === action.payload.id) {
          post.title = action.payload.title
          post.image = action.payload.image
          post.description = action.payload.description

          return (post)
        }
        return (post)
      })
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter(post => post.id !== action.payload.id)
    },
  },
})

// Action creators are generated for each case reducer function
export const { createPost, updatePost, deletePost } = postSlice.actions

export default postSlice.reducer
