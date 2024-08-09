import { App } from "./app";

export function generateStaticParams() {
  return [{ slug: ["headphones", "MLXJ2LLA"] }];
}

export default function Page({ params: { slug } }) {
  console.log(slug);

  return <App />;
}
