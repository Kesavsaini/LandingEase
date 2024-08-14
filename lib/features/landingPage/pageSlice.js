import { createSlice } from '@reduxjs/toolkit'
import * as pageData from '../../pageState.json'

const initialState =pageData;

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    updateHero: (state,action) => {
       const {section,key,value}=action.payload;
       if(state.hero[section]){
        console.log("Updating hero",{section:section,key:key,value:value});
        state.hero[section][key]=value;
       }
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateHero } =pageSlice.actions

export default pageSlice.reducer