import { createSlice } from '@reduxjs/toolkit';

const foodSlice = createSlice({
  name: 'food',
  initialState: {
    items: [],
  },
  reducers: {
    setFoodItems(state, action) {
      state.items = action.payload;
    },
  },
});

export const { setFoodItems } = foodSlice.actions;
export default foodSlice.reducer;
