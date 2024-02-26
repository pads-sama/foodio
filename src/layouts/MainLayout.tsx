import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout: React.FC = () => {
  return (
    <div className="bg-gray-50 flex flex-col font-poppins items-center justify-start mx-auto w-full">
      <Header />
      <Outlet />{" "}
      <Footer className="bg-gray-901 flex font-poppins items-center justify-center mt-[120px] md:px-5 w-full" />
    </div>
  );
};

export default MainLayout;
