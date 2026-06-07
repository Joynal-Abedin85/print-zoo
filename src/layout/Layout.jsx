import Footer from "@/shared/footer/Footer";
import Navbar from "@/shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { useUserProfile } from "@/hooks/fetchUserProfile";
import Newsletter from "@/pages/home/Newsletter";

const Layout = () => {
  useUserProfile();
  return (
    <>
      <Navbar />
      <Outlet />
      <Newsletter></Newsletter>
      <Footer />
    </>
  );
};

export default Layout;
