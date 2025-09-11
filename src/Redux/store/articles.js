import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../Services/Axios/Configs/getData";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getArticlesFromServer",
  async (url) => {
    const articles = await getData.get(`${url}`);

    return articles.data;
  }
);

const slice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getArticlesFromServer.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default slice.reducer;
