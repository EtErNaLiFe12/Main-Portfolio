import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface initialState {
  value: number
}

const initialState: initialState = {
  value: 0
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setCounter(state, action: PayloadAction<number>) {
      state.value = action.payload;
    }
  }
});

export const { setCounter } = mainSlice.actions;

export default mainSlice.reducer;