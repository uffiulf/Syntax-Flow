import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main
        id="main-content"
        className="flex-grow mx-auto max-w-7xl px-6"
      >
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
