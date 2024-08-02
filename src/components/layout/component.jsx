import { Outlet } from "react-router-dom";
import { Footer } from "../footer/component";
import { Header } from "../header/component";
import { Cart } from "../cart/component";
import { Link } from "react-router-dom";

export const Layout = () => {
  return (
    <div>
      <Header />
      <Link to='/headphones'>headphones</Link>
      <Link to='/'>main</Link>
      <Outlet />
      <Cart />
      <Footer />
    </div>
  );
};
