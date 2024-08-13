import { Footer } from "../footer/component";
import { Header } from "../header/component";

export const Layout = ({ children, sidebar, renderTitle }) => {
  return (
    <div>
      <Header />
      {sidebar}
      {children}
      {renderTitle('some title')}
      <Footer />
    </div>
  );
};
