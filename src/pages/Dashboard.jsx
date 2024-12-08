import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex items-center justify-between">
      {/* SideBar */}
      <Sidebar />
      <div className="w-full h-full ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
