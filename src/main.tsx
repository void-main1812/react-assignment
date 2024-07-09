import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./global.css";

import InputCredential from "./pages/inputCredentials/index.tsx";
import { QueryClient, QueryClientProvider } from "react-query";
import DataShowCase from "./pages/dataGrid/index.tsx";

// initializing the query client from react-query
const queryClient = new QueryClient();

// creating the browser router to handle the routing
const router = createBrowserRouter([
  {
    path: "/",
    element: <InputCredential />,
  },
  {
    path: "/datagrid",
    element: <DataShowCase />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
