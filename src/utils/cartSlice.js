import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["Hlloe"],
  },
  reducers: {
    addItem: (state, action) => {
      //immer library
      //Vanialla(older) Redux = Don't Mutate state
      // const oldState = [...state]
      //newState.items.push(action.payload);
      // return newState

      //Redux Toolkit
      // We hava to mutate the state
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    //originalState = {items: ["pizza"]}
    clearCart: (state, action) => {
      //RTK - either Mutate the existing  state or return a new State
      // state.items.length = 0; // originalState = []

      return { items: [] }; // this new object will be replaced inside originalState = { items: [] }
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;