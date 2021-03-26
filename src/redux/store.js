import { configureStore } from '@reduxjs/toolkit'
import tagLineReducer from './tagLineSlice'
import postReducer from './postSlice'

export default configureStore({
  reducer: {
      tagLine: tagLineReducer,
      post: postReducer
  }
})