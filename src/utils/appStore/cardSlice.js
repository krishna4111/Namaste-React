import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  //1.name of the slice
  name: "card",
  //2.initial state
  initialState: {
    items: [],
  },
  //3.reducer functions and actions
  reducers: {
    //Actions are like add , remove an item
    //The left side is the action and the right side is the reducer
    //function that is executed when we call this action
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => {
        return item.id != action.payload.id;
      });
    },
    //In here i don't need action.
    clearCart: (state) => {
      state.items.length = 0;
    },
  },
});

//Redux toolkit gives this syntax it is not created by us.
//but the actions in here are create by us .
//this is the way how we have to exports the actions.
export const { addItem, removeItem, clearCart } = cardSlice.actions;

export default cardSlice.reducer;
