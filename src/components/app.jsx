import { headphones } from "../constants/mock";
import { Headphone } from "./headphone/component";
import { Layout } from "./layout/component";
import { Title } from "./title /component";
import "./app.css";
import { ThemeContextProvider } from "./theme-context";

export const App = () => {
  return (
    <ThemeContextProvider>
      <Layout>
        <Title title='Headphones' />
        {headphones.map(({ name, brand, reviews, price }) => (
          <Headphone
            name={name}
            brand={brand}
            reviews={reviews}
            price={price}
          />
        ))}
      </Layout>
    </ThemeContextProvider>
  );
};
