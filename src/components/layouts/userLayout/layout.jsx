import { Outlet } from "react-router-dom";
import UserHeader from "./header/header";
import UserFooter from "./footer/footer";

const UserLayout = () => {
  return (
    <>
      <UserHeader />
      <Outlet />
      <UserFooter />
    </>
  );
};

export default UserLayout;
