import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Apps from "../pages/Apps/Apps";
import Installation from "../pages/Installation";
import AppDetail from "../pages/AppDetail/AppDetail";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { index: true, Component: Home },
      {
         path: "apps",
         loader:async () => {
          const response = await fetch("/apps20.json");
          return await response.json();

         },
          Component: Apps 
        },
      { path: "installation", Component: Installation },
      {
        path: "appDetail/:id",
        errorElement: <div>Page not found</div>,
        loader: async () => {
          try {
            const response = await fetch("/apps20.json");
            if (!response.ok) {
              throw new Error("Failed to fetch app detail");
            }
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
