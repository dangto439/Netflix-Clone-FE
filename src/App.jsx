import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout";
import HomePage from "./pages/home";
import MoivesManagement from "./pages/movies-management";
import Login from "./pages/login";
import Movies from "./pages/movies";
import Contact from "./pages/contact";
import Register from "./pages/register";
import ForgotPassword from "./pages/forgot-password";

function App() {
  const router = createBrowserRouter([
    //cha
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/movies-management",
          element: <MoivesManagement />,
        },
        {
          path: "/movies",
          element: <Movies />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgot-password",
      element: <ForgotPassword />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
