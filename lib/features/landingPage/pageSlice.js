import { createSlice } from "@reduxjs/toolkit";
import * as pageData from "../../pageState.json";
import featureState from "../../featureState.json";
import cardsSection from '../../cardsSectionState.json'
import cardState from '../../cardState.json'
import formState from '../../formState.json'
import inputState from "../../InputState.json"
import socialsState from '../../socialsState.json'

const initialState ={};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
     initState:(state,action)=>{
        return {...action.payload};
    },
    themeChanger:(state,action)=>{
      state.theme = action.payload;
    },
    updateHero: (state, action) => {
      const { section, key, value } = action.payload;
      if (state.hero[section]) {
        state.hero[section][key] = value;
      }
    },
    addFeatureSection: (state) => {
      let index = Object.keys(state).filter((item) => {
        return item.startsWith("feature");
      });
      if(index.length > 0) {
        index = index.at(-1);
         index = parseInt(index.substring(8));
         index++;
      } else {
        index = 0;
      }
      const name = "feature_" + index;
      state[name] = featureState;
    },
    deleteFeatureSection: (state, action) => {
      const index  = action.payload;
      const name = "feature_" + index;
      delete state[name];
    },
    updateFeatureSection: (state, action) => {
      const { feature, section, key, value } = action.payload;
      if (state[feature]) {
        state[feature][section][key] = value;
      }
    },
    addCardsSection: (state) => {
      let index = Object.keys(state).filter((item) => {
        return item.startsWith("cards");
      });
      if(index.length > 0) {
         index = index.at(-1);
         index = parseInt(index.substring(6));
         index++;
      } else {
        index = 0;
      }
      const name = "cards_" + index;
      state[name] = cardsSection;
    },
    updateCardsSection:(state,action)=>{
      const { cardsSection, section, key, value } = action.payload;
      if (state[cardsSection]) {
        state[cardsSection][section][key] = value;
      }
    },
    addCardToTheSection:(state,action)=>{
      const { cardsSection } = action.payload;
      if(state[cardsSection]){
        state[cardsSection].cards.push(cardState);
      }
    },
    updateCard:(state,action)=>{
      const { cardsSection, index,section, key, value } = action.payload;
      if (state[cardsSection]) {
        state[cardsSection].cards[index][section][key] = value;
      }
    },
    deleteCard:(state,action)=>{
      const { cardsSection, index} = action.payload;
      if (state[cardsSection]) {
        state[cardsSection].cards=state[cardsSection].cards.filter((_,idx)=>idx!==index);
      }
    },
    duplicateCard:(state,action)=>{
      const { cardsSection, index} = action.payload;
      if (state[cardsSection]) {
        state[cardsSection].cards.push({...state[cardsSection].cards[index]});
      }
    },
    deleteCardsSection:(state,action)=>{
      const index  = action.payload;
      const name = "cards_" + index;
      delete state[name];
    },
    addFormSection: (state) => {
      let index = Object.keys(state).filter((item) => {
        return item.startsWith("form");
      });
      if(index.length > 0) {
         index = index.at(-1);
         index = parseInt(index.substring(5));
         index++;
      } else {
        index = 0;
      }
      const name = "form_" + index;
      state[name] = formState;
    },
    updateFormSection: (state,action) => {
      const { formSection, section, key, value } = action.payload;
      if (state[formSection]) {
        state[formSection][section][key] = value;
      }
    },
    deleteFormSection: (state, action) => {
      const index  = action.payload;
      const name = "form_" + index;
      delete state[name];
    },
    addInputsToForm:(state,action)=>{
      const { formSection } = action.payload;
      if(state[formSection]){
        state[formSection]["form"].inputs.push(inputState);
      }
    },
    updateFormInput:(state,action)=>{
      const { formSection, index, key, value } = action.payload;
      if (state[formSection]) {
        state[formSection].form.inputs[index][key] = value;
      }
    },
    deletFormInput:(state,action)=>{
      const { formSection, index} = action.payload;
      if (state[formSection]) {
        state[formSection].form.inputs=state[formSection].form.inputs.filter((_,idx)=>idx!==index);
      }
    },
    updateFooter:(state,action)=>{
      const { section, key, value } = action.payload;
      if (state.footer[section]) {
        state.footer[section][key] = value;
      }
    },
    handleSocial:(state,action)=>{
      const { index,type,key,value} = action.payload;
      if (type==="add") {
        state.footer.socials.socialArray.push(socialsState);
      }else if(type==="delete"){
        state.footer.socials.socialArray=state.footer.socials.socialArray.filter((_,idx)=>idx!==index);
      }else if(type==="update"){
        state.footer.socials.socialArray[index][key]=value;
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  initState,
  themeChanger,
  updateHero,
  addFeatureSection,
  deleteFeatureSection,
  updateFeatureSection,
  addCardsSection,
  addCardToTheSection,
  updateCardsSection,
  updateCard,
  deleteCard,
  duplicateCard,
  deleteCardsSection,
  addFormSection,
  deleteFormSection,
  updateFormSection,
  addInputsToForm,
  updateFormInput,
  deletFormInput,
  updateFooter,
  handleSocial,
} = pageSlice.actions;

export default pageSlice.reducer;
