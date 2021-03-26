import { createSlice } from '@reduxjs/toolkit'

export const tagLineSlice = createSlice({
  name: 'tagLine',
  initialState: {
    image:'',
    description: ''
  },
  reducers: {
    updateImage: (state,action)=> {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      //console.log(state.images)
      state.image = action.payload
    },
    updateDescription: (state,action)=>{
        state.description = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { updateImage, updateDescription} = tagLineSlice.actions


export default tagLineSlice.reducer