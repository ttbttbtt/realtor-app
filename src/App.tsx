import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { MainPage } from "./pages/MainPage/MainPage";
import { OnePage } from "./pages/OnePage/OnePage";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/main",
    element: <MainPage />,
  },
  {
    path: "/one",
    element: <OnePage />,
  },
]);

const App: React.FC = () => {
  return (
    <div className="App">
      <RouterProvider router={routerConfig} />
    </div>
  );
};

export default App;