import AppLayout from "@pages/AppLayout/AppLayout";
import Garage from "@pages/Garage/Garage";
import PageNotFound from "@pages/PageNotFound/PageNotFound";
import Winners from "@pages/Winners/Winners";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Navigate replace to="garage" />} />
          <Route path="garage" element={<Garage />} />
          <Route path="winners" element={<Winners />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
