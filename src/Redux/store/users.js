import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getData } from "../../Services/Axios/Configs/getData";
import { removeData } from "../../Services/Axios/Configs/removeData";

export const getUsersFromServer = createAsyncThunk(
  "users/getUsersFromServer",
  async (url) => {
    const usersData = await getData(`${url}`);

    return usersData.data;
  }
);

export const removeUserFromServer = createAsyncThunk(
  "users/removeUserFromServer",
  async (url) => {
    const removeUser = await removeData(`${url}`);

    return removeUser.data;
  }
);

const slice = createSlice({
  name: "users",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    (builder.addCase(
      getUsersFromServer.fulfilled,
      (state, action) => action.payload
    ),
      builder.addCase(removeUserFromServer.fulfilled, (state, action) => {
        return state.filter((user) => user._id !== action.payload.id);
      }));
  },
});

export default slice.reducer;
