import { createSlice } from "@reduxjs/toolkit";
import * as pageData from "../../pageState.json";
import featureState from "../../featureState.json";

const initialState = pageData;

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    themeChanger:(state,action)=>{
      state.theme = action.payload ;
    },
    updateHero: (state, action) => {
      const { section, key, value } = action.payload;
      if (state.hero[section]) {
        console.log("Updating hero", {
          section: section,
          key: key,
          value: value,
        });
        state.hero[section][key] = value;
      }
    },
    addFeatureSection: (state) => {
      let index = Object.keys(state).filter((item) => {
        return item.startsWith("feature");
      });
      index = index.length;
      const name = "feature_" + index;
      state[name] = featureState;
    },
    deleteFeatureSection: (state, action) => {
      const { index } = action.payload;
      const name = "feature_" + index;
      delete state[name];
    },
    updateFeatureSection: (state, action) => {
      const { feature, section, key, value } = action.payload;
      if (state[feature]) {
        state[feature][section][key] = value;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  themeChanger,
  updateHero,
  addFeatureSection,
  deleteFeatureSection,
  updateFeatureSection,
} = pageSlice.actions;

export default pageSlice.reducer;
