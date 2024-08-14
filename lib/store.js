import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/couter/counterSlice'
import pageReducer from './features/landingPage/pageSlice'

export const makeStore = () => {
  return configureStore({
    reducer: {
        counter: counterReducer,
        page: pageReducer
    },
  })
}