import { headphones } from "../constants/mock";
import { Headphone } from "./headphone/component";
import { Layout } from "./layout/component";
import { Title } from "./title /component";

export const App = () => {
  return (
    <div>
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
    </div>
  );
};
