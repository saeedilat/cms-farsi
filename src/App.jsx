import "./App.css";
import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";

function App() {
  const router = useRoutes(routes);

  return (
    <>
      <div className="container mx-auto">
        <Header />
        <main className="mt-14 grid grid-cols-3 gap-3">
          <Sidebar />
          {router}
        </main>
      </div>
    </>
  );
}

export default App;
