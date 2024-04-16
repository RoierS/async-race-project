import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div>
      <div>test app Layout</div>
      <Outlet />
    </div>
  );
}

export default AppLayout;
