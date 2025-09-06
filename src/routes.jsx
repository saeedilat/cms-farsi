import Courses from "./Pages/Courses/Courses.jsx";
import Articles from "./Pages/Articles/Articles.jsx";
import Infos from "./Pages/Infos/Infos.jsx";
import Users from "./Pages/Users/USers.jsx";

const routes = [
  { path: "/", element: <Users /> },
  { path: "/users", element: <Users /> },
  { path: "/courses", element: <Courses /> },
  { path: "/articles", element: <Articles /> },
  { path: "/infos", element: <Infos /> },
];

export default routes;
