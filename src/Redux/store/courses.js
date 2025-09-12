import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getData } from "../../Services/Axios/Configs/getData";
import { removeData } from "../../Services/Axios/Configs/removeData";
export const getCoursesFromServer = createAsyncThunk(
  "courses/getCoursesFromServer",
  async (url) => {
    const courses = await getData(`${url}`);
    return courses.data;
  }
);

export const removeCourseFromServer = createAsyncThunk(
  "courses/removeCourseFromServer",
  async (url) => {
    const removeCourse = await removeData(`${url}`);
    return removeCourse.data;
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

    builder.addCase(removeCourseFromServer.fulfilled, (state, action) => {
      return state.filter((course) => course._id !== action.payload.id);
    });
  },
});

export default slice.reducer;
