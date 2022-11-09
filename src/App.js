import React from "react";

//import routes and route
import { Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

// import pages
import Home from "./pages/Home";
import ForSale from "./pages/ForSale";
import ForRent from "./pages/ForRent";
import Residences from "./pages/Residences";
import PropertyManagement from "./pages/PropertyManagement";
import AboutUs from "./pages/AboutUs";
import CreateContainer from "./pages/CreateContainer";

const App = () => {
  return (
    <>
      <AnimatePresence>
        <Header />
        <div className="max-w-[1440px] mx-auto bg-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/forsale" element={<ForSale />} />
            <Route path="/pages/forrent" element={<ForRent />} />
            <Route path="/pages/residences" element={<Residences />} />
            <Route
              path="/pages/property-management"
              element={<PropertyManagement />}
            />
            <Route path="/pages/about-us" element={<AboutUs />} />
            <Route path="/pages/createItem" element={<CreateContainer />} />
          </Routes>
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
};

export default App;
