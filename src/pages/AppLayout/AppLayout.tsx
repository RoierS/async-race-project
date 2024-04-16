import AppWrapper from "@ui/AppWrapper/AppWrapper";
import Footer from "@ui/Footer/Footer";
import Header from "@ui/Header/Header";
import Main from "@ui/Main/Main";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <AppWrapper>
      <Header />

      <Main>
        <Outlet />
      </Main>

      <Footer />
    </AppWrapper>
  );
}

export default AppLayout;
