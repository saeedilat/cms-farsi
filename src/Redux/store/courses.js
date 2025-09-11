import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../Services/Axios/Configs/getData";
export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async (url) => {
    const courses = await getData.get(`${url}`);
    return courses.data;
  }
);

const slice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getCoursesFromServer.fulfilled,
      (state, action) => action.payload
    );
  },
});

export default slice.reducer;
