// import React from "react";
import LocomotiveScroll from "locomotive-scroll";

import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Marquees from "./components/Marquees";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Stripes from "./components/Stripes";
// import Stripe from "./components/Stripe";
import Work from "./components/Work";
// import "./App.css";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="font-['Poppins'] w-full  bg-zinc-900 text-white">
      <Navbar />
      <Work />
      {/* <Stripe /> */}
      <Stripes />
      <Products />
      <Marquees />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
