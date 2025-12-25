import { configureStore } from "@reduxjs/toolkit";
import cardReducer from "./cardSlice";

const appStore = configureStore({
  //This reducer is the responsible for the appStore.
  //This reducer is the combination of different small stores
  //For each slice we have different reducers.

  reducer: {
    //add all the slices adn their reducers also in here
    card: cardReducer,
  },
});

export default appStore;
