import "./App.css";
import routes from "./routes.jsx";
import { useRoutes } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Sidebar from "./Components/Sidebar/Sidebar.jsx";
import ResponseSidebar from "./Components/Sidebar/ResponseSidebar.jsx";
import { useState } from "react";

function App() {
  const router = useRoutes(routes);

  const [flag, SetFlag] = useState(false);

  return (
    <>
      <div className="container relative mx-auto">
        <Header />

        <button
          onClick={() => SetFlag(true)}
          className={`absolute p-2 bg-green-300 right-0 top-[70px] cursor-pointer rounded-2xl lg:hidden `}
        >
          اطلاعات ادمین
        </button>

        <ResponseSidebar flag={flag} SetFlag={SetFlag} />
        <main className="flex gap-10 mt-14">
          <Sidebar />
          {router}
        </main>
      </div>
    </>
  );
}

export default App;
