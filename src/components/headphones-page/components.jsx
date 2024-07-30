import { Outlet } from "react-router-dom";
import { HeadphonesList } from "../headphones-list/components";
import { Title } from "../title /component";

export const HeadphonesPage = () => {
  return (
    <div>
      <Title title='Headphones' />
      <HeadphonesList />
      <Outlet />
    </div>
  );
};
