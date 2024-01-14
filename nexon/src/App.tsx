import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maple from "./components/maple/Maple";
import RootLayout from "./components/common/RootLayout";
import Character from "./components/maple/character/Character";
import Error from "./components/common/Error";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <Maple /> },
        //캐릭터 정보 조회 페이지
        {
          path: "/Character",
          element: <Character />,
          errorElement : <Error />
        },
        //캐릭터/길드 조회 페이지
        {
          path: "/Search",
          element: <></>,
          errorElement : <Error />
        },
        //랭킹 페이지
        {
          path: "/Rank",
          element: <></>,
          errorElement : <Error />
        },
        //캐릭터 비교 페이지
        {
          path: "/vs",
          element: <></>,
          errorElement : <Error />
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;

