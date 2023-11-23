import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Components/home/LandingPage";
import Login from "./Components/home/Login";
import Register from "./Components/home/Register";
import DashboardLayout from "./Components/layout/DashboardLayout";
import Stats from "./Components/modules/Stats/Stats";
import Tasks from "./Components/modules/Tasks/Tasks";
import Users from "./Components/modules/Users/Users";
import Global from "./Components/modules/Global/Global";
import Notifications from "./Components/modules/Notifications/Notifications";
import Folder from "./Components/modules/Folder/Folder";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
      children: [
        { path: "/login", element: <Login /> },
        { path: "/register", element: <Register /> },
      ],
    },
    {
      path: "/",
      element: <DashboardLayout />,
      children: [
        {
          index: true,
          element: <Stats />,
        },
        {
          path: "/tasks",
          element: <Tasks />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/global",
          element: <Global />,
        },
        {
          path: "/notifications",
          element: <Notifications />,
        },
        {
          path: "/admins",
          element: <Folder />,
        },
      ],
    },
    { path: "*", element: <h2>invalid route</h2> },
  ]);

  return (
    <section>
      <RouterProvider router={router} />
    </section>
  );
}

export default App;
