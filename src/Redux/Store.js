import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/users";
import coursesReducer from "./store/courses";
export default configureStore({
  reducer: {
    users: userReducer,
    courses: coursesReducer,
  },
});
