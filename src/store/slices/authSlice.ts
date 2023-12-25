import { createSlice } from "@reduxjs/toolkit";

interface IAuthSliceState {
  user: IAuth | null;
}

export interface IAuth {
  mail: string;
  phone_number: string;
  user_id: number;
  name: string;
  reg_date: string;
  city: string;
}

const initialState: IAuthSliceState = {
  user: null,
};

const authSlice = createSlice({
  name: "authSlice",
  //   initialState: initialState, // можно сократить эту строку следующей
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export default authSlice.reducer;
export const { setUser } = authSlice.actions;
