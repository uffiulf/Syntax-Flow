import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Team from "../pages/Team";
import Projects from "../pages/Projects";
import Blog from "../pages/Blog";
import Contact from "../pages/Contact";
import Profile from "../pages/Profile";
import Project from "../pages/Project";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/team", element: <Team /> },
      { path: "/projects", element: <Projects /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "/profile/:slug", element: <Profile /> },
      { path: "/project/:slug", element: <Project /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
