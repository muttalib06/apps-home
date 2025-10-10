import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation";
import AppDetail from "../pages/AppDetail/AppDetail";
import { Suspense } from "react";
import Spinner from "../Spinner/Spinner";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [
      { index: true, Component: Home },
      {
        path: "apps",
        loader: async () => {
          const response = await fetch("/apps20.json");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return await response.json();
        },
        Component: Apps,
      },
      {
        path: "installation",
        loader: async () => {
          const response = await fetch("/apps20.json");
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return await response.json();
        },
        Component: Installation,
      },
      {
        path: "appDetail/:id",
        loader: async () => {
          try {
            const response = await fetch("/apps20.json");
            if (!response.ok) {
              throw new Error("Failed to fetch app detail");
            }
            await new Promise((resolve) => setTimeout(resolve, 1000));
            return await response.json();
          } catch (error) {
            console.error("loader error", error);
            throw new Response("Error loading app detail", { status: 500 });
          }
        },
        Component: AppDetail,
      },
    ],
  },
]);
