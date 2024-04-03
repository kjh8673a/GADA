import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dnf from "./components/Dnf";
import RootLayout from "./components/common/RootLayout";
import Error from "./components/common/Error";
import Search from "./components/Search/Search";
import Character from "./components/Character/Character";
import Auction from "./components/Auction/Auction";
import AuctionSearch from "./components/Auction/Search/AuctionSearch";
import AuctionItem from "./components/Auction/Item/AuctionItem";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Dnf /> },
        {
          path: "/character/search",
          element: <Search />,
          errorElement: <Error />,
        },
        {
          path: "/character",
          element: <Character />,
          errorElement: <Error />,
        },
        {
          path: "/auction",
          element: <Auction />,
          errorElement: <Error />,
        },
        {
          path: "/auction/search",
          element: <AuctionSearch />,
          errorElement: <Error />,
        },
        {
          path: "/auction/item",
          element: <AuctionItem />,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
