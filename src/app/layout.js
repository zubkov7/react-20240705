import { Layout } from "../components/layout/component";

export const metadata = {
  title: "React course",
  description: "react course description",
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>
        <div id='root'>
          <Layout
            sidebar={<div>sidebar</div>}
            renderTitle={(title) => <div>{title}</div>}
          >
            {children}
          </Layout>
          <div id='portal' />
        </div>
      </body>
    </html>
  );
}
