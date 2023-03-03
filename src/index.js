import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Join from "./components/Join/Join";
import Chat from "./components/Chat/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Join />,
  },
  {
    path: "/join",
    element: <Join />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </>
);
