import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <>
      <Header />
      
      <div className="flex items-center justify-center min-h-[500px] bg-amber-50">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
