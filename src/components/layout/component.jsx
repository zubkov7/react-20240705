import { Outlet } from "react-router-dom";
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import { Cart } from "../cart/component";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
};
