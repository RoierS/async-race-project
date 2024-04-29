import AppProvider from "@context/AppContext";
import AppLayout from "@pages/AppLayout/AppLayout";
import Garage from "@pages/Garage/Garage";
import PageNotFound from "@pages/PageNotFound/PageNotFound";
import Winners from "@pages/Winners/Winners";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

const toastOptions = {
  success: {
    duration: 3000,
  },
  error: {
    duration: 5000,
  },
  style: {
    fontSize: "16px",
    maxWidth: "500px",
    padding: "16px 24px",
    background: "var(--button-background-color-hover)",
    color: "var(--rich-black)",
  },
};

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <AppProvider>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="garage" />} />
              <Route path="garage" element={<Garage />} />
              <Route path="winners" element={<Winners />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </AppProvider>
      </BrowserRouter>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={toastOptions}
      />
    </QueryClientProvider>
  );
}

export default App;
