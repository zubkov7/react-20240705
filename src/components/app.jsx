import { useRef } from "react";
import { headphones } from "../constants/mock";
import { Headphone } from "./headphone/component";
import { Layout } from "./layout/component";
import { Title } from "./title /component";
import { useEffect } from "react";
import "./app.css";

export const App = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
    console.log(inputRef.current.offsetHeight);
  }, []);

  const sendAnalytics = () => console.log("send analytics");

  return (
    <div>
      <Layout>
        <Title title='Headphones' />
        <input ref={inputRef} />
        <span ref={sendAnalytics}>analytics</span>
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
