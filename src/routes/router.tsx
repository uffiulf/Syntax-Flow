import React, { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const Home = lazy(() => import("../pages/Home"));
const Team = lazy(() => import("../pages/Team"));
const Projects = lazy(() => import("../pages/Projects"));
const Blog = lazy(() => import("../pages/Blog"));
const Contact = lazy(() => import("../pages/Contact"));
const Profile = lazy(() => import("../pages/Profile"));
const Project = lazy(() => import("../pages/Project"));
const NotFound = lazy(() => import("../pages/NotFound"));

const withSuspense = (node: React.ReactNode) => (
  <Suspense fallback={<div className="py-20 text-center text-muted-foreground">Loading…</div>}>{node}</Suspense>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: withSuspense(<Home />) },
      { path: "/team", element: withSuspense(<Team />) },
      { path: "/projects", element: withSuspense(<Projects />) },
      { path: "/blog", element: withSuspense(<Blog />) },
      { path: "/contact", element: withSuspense(<Contact />) },
      { path: "/profile/:slug", element: withSuspense(<Profile />) },
      { path: "/project/:slug", element: withSuspense(<Project />) },
      { path: "*", element: withSuspense(<NotFound />) },
    ],
  },
]);
