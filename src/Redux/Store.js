import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/users";
import coursesReducer from "./store/courses";
import articlesReducer from "./store/articles";
export default configureStore({
  reducer: {
    users: userReducer,
    courses: coursesReducer,
    articles: articlesReducer,
  },
});
