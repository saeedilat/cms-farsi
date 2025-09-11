import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../Services/Axios/Configs/getData";

export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async (url) => {
    const usersData = await getData.get(`${url}`);

    return usersData.data;
  }
);

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getUsersFromServer.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default slice.reducer;
