import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface GlobalState {
  mode: "light" | "dark";
}

const initialState: GlobalState = {
  mode: "dark"
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light"
    },
    setSpecificMode: (state, action: PayloadAction<"light" | "dark">) => {
      state.mode = action.payload;
    }
  }
})

// Export actions
export const { setMode, setSpecificMode } = globalSlice.actions;

// Export reducer
export default globalSlice.reducer;