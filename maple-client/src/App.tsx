import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Maple from "./components/maple/Maple";
import RootLayout from "./components/common/RootLayout";
// import UserAgentBoundary from "./components/common/UserAgentBoundary";

const Character = lazy(() => import("./components/maple/character/Character"));
const Comparison = lazy(() => import("./components/maple/comparison/Comparison"));
const Rank = lazy(() => import("./components/maple/rank/Rank"));
const Guild = lazy(() => import("./components/maple/guild/Guild"));
const CGsearch = lazy(() => import("./components/maple/search/CGsearch"));
const Error = lazy(() => import("./components/common/Error"));

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Maple /> },
        //캐릭터 정보 조회 페이지
        {
          path: "/Character/:Charactername",
          element: <Character />,
          errorElement: <Error />,
        },
        //캐릭터/길드 조회 페이지
        {
          path: "/Search/:name",
          element: <CGsearch />,
          errorElement: <Error />,
        },
        //길드 페이지
        {
          path: "/Search/Guild/:worldName/:name",
          element: <Guild />,
          errorElement: <Error />,
        },
        //랭킹 페이지
        {
          path: "/Rank",
          element: <Rank />,
          errorElement: <Error />,
        },
        //캐릭터 비교 페이지
        {
          path: "/comparison/:characters?",
          element: <Comparison />,
          errorElement: <Error />,
        },
      ],
    },
  ]);

  return (
    // <UserAgentBoundary>
    <RouterProvider router={router} />
    // </UserAgentBoundary>
  );
}

export default App;

