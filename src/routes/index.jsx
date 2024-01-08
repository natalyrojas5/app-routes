import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import "../App.css";
/**
 * LAYOUTS
 */
import { LayoutPublic, LayoutPrivate, Layout } from "@/shared/layouts";

/**
 * PAGES
 */
import { Dashboard } from "@/modules/private/pages";
import { Home, Login } from "@/modules/public/pages";

/*
  BASE_URL = http://localhost:5173/
*/

const router = createBrowserRouter([
  {
    /* route: "BASE_URL" */
    path: "/",
    element: <Layout />,
    children: [
      {
        /* route: BASE_URL/dashboard */
        path: "dashboard",
        element: <LayoutPrivate />,
        children: [
          {
            /* route: BASE_URL/dashboard */
            path: "",
            element: <Dashboard />,
          },
        ],
      },
      {
        /* route: BASE_URL/auth */
        path: "auth",
        element: <LayoutPublic />,
        children: [
          {
            /* route: BASE_URL/auth/login */
            path: "login",
            element: <Login />,
          },
          {
            /*  route: BASE_URL/auth */
            path: "",
            element: <Home />,
          },
        ],
      },
    ],
  },
  {
    /* route: BASE_URL/frontendgreen (example) */
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
