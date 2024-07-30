import { Layout } from "./layout/component";
import { ThemeContextProvider } from "./theme-context";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import "./app.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { HeadphonesPage } from "./headphones-page/components";
import { HeadphonePage } from "./headphone-page/components";
import { Navigate } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/about",
    element: <div>about</div>,
  },
  {
    path: "/blocked",
    element: <Navigate to='/' replace />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/headphones",
        element: <HeadphonesPage />,
        children: [
          {
            path: ":headphoneId",
            element: <HeadphonePage />,
          },
        ],
      },
    ],
    errorElement: <div>Not Found</div>,
  },
]);

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <RouterProvider router={router} />
      </ThemeContextProvider>
    </Provider>
  );
};
