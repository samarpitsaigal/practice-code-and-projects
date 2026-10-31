//npm uninstall @chakra-ui/react react react-dom
//npm install react@18 react-dom@18
//npm install @chakra-ui/react@2 @emotion/react @emotion/styled framer-motion
//npm run dev
import Dashboard from "./Pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Support from "./Pages/Support/Support";
import Transection from "./Pages/Transation/Transection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/Transection",
    element: <Transection/>,
  },
  {
    path: "/Support",
    element: <Support />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
