import { Layout } from "./layout/component";
import { Provider } from "react-redux";
import { store } from "../redux/store";

import "./app.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { HeadphonesPage } from "./headphones-page/components";
import { HeadphonePage } from "./headphone-page/components";
import { ThemeContextProvider } from "./theme-context/component";

const router = createBrowserRouter([
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
