import AppLayout from "@pages/AppLayout/AppLayout";
import Garage from "@pages/Garage/Garage";
import PageNotFound from "@pages/PageNotFound/PageNotFound";
import Winners from "@pages/Winners/Winners";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const staleTime = 60000;

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
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
    </QueryClientProvider>
  );
}

export default App;
