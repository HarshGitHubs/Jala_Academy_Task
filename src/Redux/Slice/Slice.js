import { createSlice , nanoid } from "@reduxjs/toolkit";

const initialState = {
    slider:1
}

export const projectSlice = createSlice({
    name: 'projectSlice',
    initialState,
    reducers:{
        updateSlider: (state, action)=> {
            state.slider = action.payload
        }
    }
})

export const {updateSlider} = projectSlice.actions
export default projectSlice.reducer