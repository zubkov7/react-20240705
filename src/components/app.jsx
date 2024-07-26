import { Layout } from "./layout/component";
import { Title } from "./title /component";
import { ThemeContextProvider } from "./theme-context";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import { HeadphonesList } from "./headphones-list/components";

import "./app.css";

export const App = () => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <Layout>
          <Title title='Headphones' />
          <HeadphonesList />
        </Layout>
      </ThemeContextProvider>
    </Provider>
  );
};
