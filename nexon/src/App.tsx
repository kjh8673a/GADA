import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maple from "./components/maple/Maple";
import RootLayout from "./components/common/RootLayout";
import Character from "./components/maple/character/Character";
import Error from "./components/common/Error";
import CGsearch from "./components/maple/search/CGsearch";
import Comparison from "./components/maple/comparison/Comparison";
import Rank from "./components/maple/rank/Rank";
import UserAgentBoundary from "./components/common/UserAgentBoundary";

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
    <>
      <UserAgentBoundary>
        <RouterProvider router={router} />
      </UserAgentBoundary>
    </>
  );
}

export default App;

