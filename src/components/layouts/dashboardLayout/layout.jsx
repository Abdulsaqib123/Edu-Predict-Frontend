import { Outlet } from "react-router-dom";
import DashboardHeader from "./header/header";
import DashboardFooter from "./footer/footer";

const DashboardLayout = () => {
  return (
    <>
      <DashboardHeader />
      <Outlet />
      <DashboardFooter />
    </>
  );
};

export default DashboardLayout;
