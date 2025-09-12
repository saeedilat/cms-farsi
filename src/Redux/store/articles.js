import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../Services/Axios/Configs/getData";
import { removeData } from "../../Services/Axios/Configs/removeData";

export const getArticlesFromServer = createAsyncThunk(
  "articles/getArticlesFromServer",
  async (url) => {
    const articles = await getData(`${url}`);

    return articles.data;
  }
);

export const removeArticleFromServer = createAsyncThunk(
  "articles/removeArticleFromServer",
  async (url) => {
    const removeArticle = await removeData(`${url}`);

    return removeArticle.data;
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

    builder.addCase(removeArticleFromServer.fulfilled, (state, action) => {
      return state.filter((article) => article._id !== action.payload.id);
    });
  },
});

export default slice.reducer;
