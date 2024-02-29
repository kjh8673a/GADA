import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dnf from "./components/Dnf";
import RootLayout from "./components/common/RootLayout";
import Error from "./components/common/Error";
import Search from "./components/Search/Search";
import Character from "./components/Character/Character";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Dnf /> },
        {
          path: "/Search",
          element: <Search />,
          errorElement: <Error />,
        },
        {
          path: "/Character/:CharacterName",
          element: <Character />,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

