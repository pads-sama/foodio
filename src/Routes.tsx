import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const MainLayout = React.lazy(() => import("layouts/MainLayout"));
const Homepage = React.lazy(() => import("pages/Homepage"));
const Checkout = React.lazy(() => import("pages/Checkout"));
const Orderonline = React.lazy(() => import("pages/Orderonline"));
const Contact = React.lazy(() => import("pages/Contact"));
const Reservation = React.lazy(() => import("pages/Reservation"));
const Aboutus = React.lazy(() => import("pages/Aboutus"));
const Menu = React.lazy(() => import("pages/Menu"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/aboutus" element={<Aboutus />} />
            <Route path="/reservation" element={<Reservation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/orderonline" element={<Orderonline />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/homepage" element={<Homepage />} />
          </Route>
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
